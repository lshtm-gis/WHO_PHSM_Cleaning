"""
OXCGRT.py
====================================
Transform OXCGRT records to WHO PHSM format.

**Data Source:**
`https://raw.githubusercontent.com/OxCGRT/covid-policy-tracker/master/data/OxCGRT_latest_withnotes.csv <https://raw.githubusercontent.com/OxCGRT/covid-policy-tracker/master/data/OxCGRT_latest_withnotes.csv>`_

**Processing Steps:**
1. generator function of new record with correct keys (shared)
2. replace data in new record with data from old record using column reference (shared)
3. Assign unique ID (shared)
4. Handle date formatting

"""

import pandas as pd
from countrycode.countrycode import countrycode

# hot fix for sys.path issues in test environment
try:

    from processing import utils
    from processing import check

except Exception as e:

    from src.processing import utils
    from src.processing import check


def transform(record: dict, key_ref: dict, country_ref: pd.DataFrame, who_coding: pd.DataFrame, no_update_phrase: pd.DataFrame):

    # 1. generator function of new record with correct keys (shared)
    new_record = utils.generate_blank_record()

    # 2. replace data in new record with data from old record using column
    # reference (shared)
    record = utils.apply_key_map(new_record, record, key_ref)

    # Filter out records with "no update" phrases
    if record['comments'] in list(no_update_phrase['phrase']):

        return(None)

    # 3. Assign unique ID (shared)
    record = utils.assign_id(record)

    # 4. Handle date formatting
    record = utils.parse_date(record)

    # 8. replace sensitive country names
    record = utils.replace_sensitive_regions(record)

    # 9. assign ISO code
    record['iso'] = countrycode(codes=record['country_territory_area'], origin='country_name', target='iso3c')

    # 10. check missing ISO
    check.check_missing_iso(record)

    # Remove records where there is no data in prov_subcategory
    if record['prov_subcategory'] == 0:

        return(None)

    # Drop records with "no update" phrases

    # Removes information in flag variables for now
    record['prov_measure'] = 0
    record['prov_subcategory'] = int(record['prov_subcategory'])
    record['prov_measure'] = int(record['prov_measure'])

    # 11. Join WHO accepted country names (shared)
    record = utils.assign_who_country_name(record, country_ref)

    record = financial_measures(record)

    # 12. Join who coding from lookup (shared)
    record = utils.assign_who_coding(record, who_coding)

    # 13. check for missing WHO codes (shared)
    check.check_missing_who_code(record)

    # 16. Add WHO PHSM admin_level values
    record = utils.add_admin_level(record)

    return(record)


def financial_measures(record):
    '''
    Function to move values from prov_measure to value_usd for financial reasures.

    prov_measure values are replaced with 1 for coding.

    '''

    financial = ['E3_Fiscal measures',
                 'E4_International support',
                 'H4_Emergency investment in healthcare',
                 'H5_Investment in vaccines']

    if record['prov_category'] in financial:

        record['value_usd'] = record['prov_subcategory']

        record['prov_subcategory'] = 1

    return(record)