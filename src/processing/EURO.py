import pandas as pd
from countrycode.countrycode import countrycode

# hot fix for sys.path issues in test environment
try:

    from processing import utils
    from processing import check

except Exception:

    from src.processing import utils
    from src.processing import check


def transform(record: dict, key_ref: dict, country_ref: pd.DataFrame, who_coding: pd.DataFrame):
    """
    Apply transformations to EURO records.

    Parameters
    ----------
    record : dict
        Input record.
    key_ref : dict
        Reference for key mapping.
    country_ref : pd.DataFrame
        Reference for WHO accepted country names.
    who_coding : pd.DataFrame
        Reference for WHO coding.

    Returns
    -------
    dict
        Record with transformations applied.

    """

    # 1. Create a new blank record
    new_record = utils.generate_blank_record()

    # 2. replace data in new record with data from old record using key_ref
    record = utils.apply_key_map(new_record, record, key_ref)

    # 3. Make manual country name changes
    record = utils.replace_conditional(record, 'country_territory_area', 'Kosovo*', 'Kosovo')
    record = utils.replace_conditional(record, 'country_territory_area', 'Bewlgium', 'Belgium')
    record = utils.replace_conditional(record, 'country_territory_area', 'Luxemburg', 'Luxembourg')

    # Replace enforcement values
    record = utils.replace_conditional(record, 'enforcement', ' ', 'not known')
    record = utils.replace_conditional(record, 'enforcement', 0, 'not applicable')
    record = utils.replace_conditional(record, 'enforcement', '0', 'not applicable')
    record = utils.replace_conditional(record, 'enforcement', 1, 'recommended')
    record = utils.replace_conditional(record, 'enforcement', '1', 'recommended')
    record = utils.replace_conditional(record, 'enforcement', '2', 'required')
    record = utils.replace_conditional(record, 'enforcement', 2, 'required')
    record = utils.replace_conditional(record, 'enforcement', 3, 'monitored')
    record = utils.replace_conditional(record, 'enforcement', '3', 'monitored')
    record = utils.replace_conditional(record, 'enforcement', '', 'not known')

    # Replace measure_stage values
    record = utils.replace_conditional(record, 'measure_stage', 1, 'new')
    record = utils.replace_conditional(record, 'measure_stage', '1', 'new')
    record = utils.replace_conditional(record, 'measure_stage', 2, 'modification')
    record = utils.replace_conditional(record, 'measure_stage', '2', 'modification')
    record = utils.replace_conditional(record, 'measure_stage', 3, 'phase-out')
    record = utils.replace_conditional(record, 'measure_stage', '3', 'phase-out')
    record = utils.replace_conditional(record, 'measure_stage', ' ', '')
    record = utils.replace_conditional(record, 'measure_stage', 0, '')
    record = utils.replace_conditional(record, 'measure_stage', '0', '')

    # Change a who_code value based on measure_stage
    record = update_school_record(record)

    # Strip whitespace characters from coding
    record['prov_category'] = record['prov_category'].strip()
    record['prov_subcategory'] = record['prov_subcategory'].strip()
    record['prov_measure'] = record['prov_measure'].strip()

    # 4. replace sensitive country names by ISO (utils)
    record = utils.replace_sensitive_regions(record)

    record['iso'] = countrycode(codes=record['country_territory_area'], origin='country_name', target='iso3c')

    # 6. check for missing ISO codes (shared)
    check.check_missing_iso(record)

    # 7. Join WHO accepted country names (shared)
    record = utils.assign_who_country_name(record, country_ref)

    # 12. Join who coding from lookup (shared)
    record = utils.assign_who_coding(record, who_coding)

    # 13. check for missing WHO codes (shared)
    check.check_missing_who_code(record)

    # 8. Add WHO PHSM admin_level values
    record = utils.add_admin_level(record)

    record = utils.remove_tags(record)

    return record


def update_school_record(record: dict):

    if record['who_code'] == '4.1.2' and record['measure_stage'] == 'phase out':

        record['who_code'] = '4.1.1'

    return record
