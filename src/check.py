import logging
import pandas as pd

try:

    from src.processing.utils import generate_blank_record

except:

    from processing.utils import generate_blank_record


def check_output(data: pd.DataFrame):
    '''Function to check output from master, mistress, and output'''

    # check columns are correct
    check_column_names(data)

    # check duplicate who_id
    check_duplicate_id(data, 'who_id')
    check_duplicate_id(data, 'prev_measure_number')
    check_duplicate_id(data, 'following_measure_number')

    # check for coded values from config
    coded_config = pd.read_csv('config/output_check/coded_values.csv')
    check_coded_values(data, coded_config)


    # check for unknown who_codes and iso_codes
    check_unknown_values(data, 'iso_3166_1_numeric')
    check_unknown_values(data, 'who_region')
    check_unknown_values(data, 'country_territory_area')
    check_unknown_values(data, 'who_code')
    check_unknown_values(data, 'who_measure')
    check_unknown_values(data, 'who_subcategory')
    check_unknown_values(data, 'who_category')

    return(data)


def check_duplicate_id(data: pd.DataFrame, key: str, log: bool = True):

    try:

        assert len(data['who_id']) == len(data['who_id'].unique())

        if log:

            logging.info('OUTPUT_CHECK_SUCCESS=No Duplicate %s.' % key)

    except Exception as e:

        if log:

            logging.error('OUTPUT_CHECK_FAILURE=Duplicate %s detected.' % key)

        raise e


def check_column_names(data: pd.DataFrame, log: bool = True):
    '''Function to check that column names are expected'''
    expected = generate_blank_record().keys()

    try:

        assert set(data.columns) == set(expected)

        if log:

            logging.info('OUTPUT_CHECK_SUCCESS=Data has expected column names.')

    except Exception as e:

        if log:

            logging.error('OUTPUT_CHECK_FAILURE=Column names do not agree.')

        raise e


def check_unknown_values(data: pd.DataFrame, key: str, log: bool = True):
    '''Function to check for unknown values'''

    unknown_vals = data.loc[data[key] == 'unknown']

    n_unknown = len(unknown_vals.iloc[:, 1])

    try:

        assert n_unknown == 0

        if log:

            logging.info('OUTPUT_CHECK_SUCCESS=No unknown values in %s.' % key)

    except Exception as e:

        if log:

            logging.error('OUTPUT_CHECK_FAILURE=%d unknown values in %s.' % (n_unknown, key))

            country_keys = ['iso', 'iso_3166_1_numeric', 'who_region', 'country_territory_area']
            coding_keys = ['who_code', 'who_measure', 'who_subcategory', 'who_category', 'prov_category', 'prov_subcategory', 'prov_category']

            if key in country_keys:

                unknown_vals = unknown_vals[country_keys].drop_duplicates()

                for k, row in unknown_vals.iterrows():

                    logging.error('OUTPUT_CHECK_FAILURE=Unknown country %s.' % (' '.join(['%s=%s' % (key, value) for (key, value) in row.items()])))

            elif key in coding_keys:

                unknown_vals = unknown_vals[coding_keys].drop_duplicates()

                for k, row in unknown_vals.iterrows():

                    logging.error('OUTPUT_CHECK_FAILURE=Unknown coding %s.' % (' '.join(['%s=%s' % (key, value) for (key, value) in row.items()])))

        pass


def check_coded_values(data: pd.DataFrame, config: pd.DataFrame, log: bool = True):
    '''Function to check for any values not accepted as coded values'''

    config = config.groupby('column')
    config = [config.get_group(x) for x in config.groups]

    for column in config:

        column_name = list(column['column'].unique())[0]

        expected = list(column['value']) + ['']

        obs = list(data[column_name].unique())

        difference = set(obs).difference(set(expected))

        try:

            assert len(difference) == 0

            if log:

                logging.info('OUTPUT_CHECK_SUCCESS=No unexpected values in %s.' % column_name)

        except Exception as e:

            if log:

                logging.error('OUTPUT_CHECK_FAILURE=Unexpected values in %s: %s.' % (column_name, ', '.join([str(x) for x in difference])))

            pass
