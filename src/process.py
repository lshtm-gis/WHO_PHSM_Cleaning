"""
process.py
====================================
Script to apply dataset-specific transformers to individual dataset records.
"""

import pickle
import sys
import pandas as pd
import logging
from progress.bar import Bar

from processing.main import process
from processing.utils import generate_blank_record, assign_id, get_min_id
from utils import create_dir, log_records_per, log_records_total
from processing import check
from check import check_output

argv = sys.argv

# Create process directory in tmp
create_dir('tmp/process')

# Setup logging to log into the process directory
logging.basicConfig(filename='tmp/process/process.log',
                    level=logging.DEBUG,
                    format='%(asctime)s - %(levelname)s - %(message)s')

logging.info("Processing Data...")

# Read list of record dicts
records = pickle.load(open("tmp/preprocess/records.pickle", "rb"))

# load key transformation reference
key_ref = {'JH_HIT': pd.read_csv('config/key_map/JH_HIT.csv').to_dict(orient='records'),
           'CDC_ITF': pd.read_csv('config/key_map/CDC_ITF.csv').to_dict(orient='records'),
           'ACAPS': pd.read_csv('config/key_map/ACAPS.csv').to_dict(orient='records'),
           'OXCGRT': pd.read_csv('config/key_map/OXCGRT.csv').to_dict(orient='records')}

# load who country name reference
country_ref = pd.read_csv('config/country_names/who_country_names.csv')

# load who dataset coding reference
who_coding = {'JH_HIT': pd.read_csv('config/who_coding/JH_HIT.csv').fillna(''),
              'CDC_ITF': pd.read_csv('config/who_coding/CDC_ITF.csv').fillna(''),
              'ACAPS': pd.read_csv('config/who_coding/ACAPS.csv').fillna(''),
              'OXCGRT': pd.read_csv('config/who_coding/OXCGRT.csv').fillna('')}

# Load prov measure filter reference
prov_measure_filter = {'JH_HIT': pd.read_csv('config/prov_measure_filter/JH_HIT.csv')}

# Load "no update" phrase reference
no_update_phrase = {'OXCGRT': pd.read_csv('config/no_update_phrase/OXCGRT.csv')}

# Get minimum ID number from previous data release
min_id = get_min_id('data/cleansed/mistress_latest.csv', id_column='who_id')

# Define a list to store processed records
processed_records = []

# Start progress bar
bar = Bar('Processing Data...', max=len(records))
for record in records:

    # Process individual records
    record = process(record, key_ref, country_ref, who_coding, prov_measure_filter, no_update_phrase)

    # If record is not None, transform it to a dictionary
    if record is not None:

        processed_records.append(pd.DataFrame.from_dict(record, orient = 'index').T)

    # Increment progress bar
    bar.next()

records = pd.concat(processed_records)


# Assign who codes to the original WHO codes
records['original_who_code'] = records['who_code']

# Assign id numbers to new data
records = assign_id(records, min_id)

# Apply standard checks to processed data
check_output(records)

# Log number of records in the processed dataset
log_records_per(records, 'dataset')
log_records_total(records)

# Write processed file to csv
records.to_csv('tmp/process/records.csv', index=False)

print('Success.')
logging.info("Success.")
