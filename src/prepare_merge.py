'''
prepare_merge.py

Script to merge prop IDs from previous weeks with not_cleansed data to detect changes

'''
import pandas as pd
from datetime import datetime

# Define which columns will be retained in the merging dataset
merge_columns = ["prop_id",
                 "country_territory_area",
                 "dataset",
                 "area_covered",
                 "who_code",
                 "date_start"]

print('Getting IDs for data merge...')

# Read previous update data - this should be for the previous week
previous_update = pd.read_csv('data/merge/update_merge_2021_02_25.csv', low_memory=False)
previous_update['date_start'] = pd.to_datetime(previous_update['date_start'])
# Read previous release data - this should be for the previous week
previous_not_cleansed = pd.read_csv('data/not_cleansed/master_2021_02_25.csv', low_memory=False)
previous_not_cleansed['date_start'] = pd.to_datetime(previous_not_cleansed['date_start'])
previous_not_cleansed['date_end'] = pd.to_datetime(previous_not_cleansed['date_end'])

def combine_updates(previous_update, previous_not_cleansed, merge_columns):
    '''Function to combine information from previous not_cleansed data'''

    # Filter only records which were not_cleansed last week
    previous_not_cleansed = previous_not_cleansed.loc[previous_not_cleansed['processed'] == 'not_cleansed', :]

    # Filter for merge_columns
    previous_not_cleansed = previous_not_cleansed[merge_columns]

    # Combine these records with the last merge file
    merge = pd.concat([previous_update, previous_not_cleansed])

    return(merge)

# Combine previous merge file with last week's records
update_merge = combine_updates(previous_update, previous_not_cleansed, merge_columns)

# Write merge file to csv
update_merge.to_csv('data/merge/update_merge_{}.csv'.format(datetime.now().strftime('%Y_%m_%d')))
print('Success.')
