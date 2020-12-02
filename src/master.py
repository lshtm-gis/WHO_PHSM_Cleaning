import pickle
import sys
import pandas as pd
import logging

from utils import create_dir, log_records_per, log_records_total
from check import check_output
from master.main import get_new_records

argv = sys.argv
pd.set_option('display.max_columns', 5)

create_dir("tmp/master")

logging.basicConfig(
    filename="tmp/master/master.log",
    level=logging.DEBUG,
    format="%(asctime)s - %(levelname)s - %(message)s",
)

print("Reading master data...")
logging.info("Reading master data...")

manually_cleaned = pd.read_csv("tmp/manually_cleaned/records.csv", low_memory=False, parse_dates = ['date_start'])

print("Reading previous update...")
logging.info("Reading previous update...")

previous_update = pd.read_csv("data/not_cleansed/update_merge_2020_12_02.csv", parse_dates=['date_start'], low_memory=False, encoding='latin1',
                              dtype={'date_start':str})

#previous_update['date_start'] = pd.to_datetime(previous_update['date_start'], format='%d/%m/%Y')

update = pd.read_csv("tmp/postprocess/records.csv", low_memory=False, parse_dates = ['date_start'])

# Combine with new data (independent from IDs)
print("Combining manually cleaned and update data...")
logging.info("Combining manually cleaned and update data...")

combo_cols = ["country_territory_area", "dataset", "area_covered", "who_code", "date_start"]

drop_cols = ['processed', 'keep', 'duplicate_record_id', 'prov_category', 'prov_subcategory',
    'prov_measure', 'value_usd', 'percent_interest', 'source_alt', 'queries_comments', 'date_processed']

previous_update_not_ox = previous_update.loc[(previous_update['dataset'] != 'OXCGRT'), :]
update_not_ox = update.loc[(update['dataset'] != 'OXCGRT'), :]

previous_update_ox = previous_update.loc[(previous_update['dataset'] == 'OXCGRT'), :]
update_ox = update.loc[(update['dataset'] == 'OXCGRT'), :]

assert (len(previous_update_not_ox.index) + len(previous_update_ox.index)) == len(previous_update.index)
assert (len(update_not_ox.index) + len(update_ox.index)) == len(update.index)

new_records_ox = get_new_records(
    update_ox,
    previous_update_ox,
    combo_cols,
)

new_ids = set(update_not_ox['prop_id']).difference(set(previous_update_not_ox['prop_id']))

new_ids = [x for x in new_ids if not pd.isna(x)]

new_records_not_ox = update.loc[[x in new_ids for x in update['prop_id']], :]

new_records = pd.concat([new_records_not_ox, new_records_ox])

new_records.to_csv('tmp/new_records.csv')

# Label records as not_cleansed
new_records["processed"] = "not_cleansed"

new_records["keep"] = "y"

new_records.loc[[x in ['10', '11', '12', '13'] for x in new_records['who_code']], 'keep'] = "n"

# Assign date processed to today
new_records["date_processed"] = pd.to_datetime('today').strftime('%d-%m-%Y')

master = pd.concat([manually_cleaned, new_records])

'''

#####

manual steps here

#####

- these should be kept to a bare minimum, should be
  temporary, and should be added with justification & date in comment

'''

# 18-11-2020 - Filter USA subnational records
# To avoid swamping volunteers with too many records
#usa_records = list(master.loc[(master['dataset'] == 'JH_HIT') & (master['processed'] == 'not_cleansed') & (master['iso'] == 'USA') & ([x in ['state', 'other'] for x in master['admin_level']]), 'uuid'])
#master = master.loc[[x not in usa_records for x in master['uuid']], :]

check_output(master)

log_records_per(master, "dataset")
log_records_per(master, "processed")
log_records_total(master)

master.to_csv("tmp/master/master.csv", index=False)

master[['uuid', 'who_id']].to_csv('tmp/master/id_ref.csv', index=False)

# Create release data
master = master.loc[(master['processed'] == 'sequenced') & (master['keep'] == 'y')]

master.drop(drop_cols, axis=1, inplace=True)

master.to_csv("tmp/master/release.csv", index=False)

print("Success.")
logging.info("Success.")
