import pandas as pd


def get_new_records(records: pd.DataFrame, previous_update: pd.DataFrame, cols):
    '''Identify new records in an update data and a previous update data'''

    # Concatenate values in `cols` separated by "_" in update data
    records['combo_string'] = get_combo_string(records, cols)

    # And previous update
    previous_update['combo_string'] = get_combo_string(previous_update, cols)

    # Identify which concatenated strings are unique in the new data
    new_combo_strings = set(records['combo_string']).difference(set(previous_update['combo_string']))

    # get a subset of the update data by these unique strings
    new_records = records.loc[[x in new_combo_strings for x in records['combo_string']], :]

    return(new_records)


def get_combo_string(records, cols):

    combo_string = records[cols].apply(lambda x: x.astype(str)).agg('_'.join, axis=1)

    return(combo_string)