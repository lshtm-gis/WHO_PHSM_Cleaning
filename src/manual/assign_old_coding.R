require(tidyverse)

manual_arranged_dtypes <- cols(who_id = col_character(), dataset = col_character(),
                               prop_id = col_character(), who_region = col_character(), country_territory_area = col_character(),
                               iso = col_character(), iso_3166_1_numeric = col_number(), admin_level = col_character(),
                               area_covered = col_character(),
                               prov_category = col_character(), prov_subcategory = col_character(),
                               prov_measure = col_character(), who_code = col_character(), who_category = col_character(), who_subcategory = col_character(),
                               who_measure = col_character(), targeted = col_character(), value_usd = col_character(),
                               percent_interest = col_number(), comments = col_character(),
                               non_compliance_penalty = col_character(), source = col_character(),
                               source_type = col_character(), link = col_character(), source_alt = col_character(),
                               date_start = col_character(), date_end = col_character(), date_entry = col_character(), measure_stage = col_character(), following_measure_number = col_character())

# Read master data
master <- read_csv('/Users/hamishgibbs/Documents/Covid-19/WHO_PHSM_Cleaning/data/not_cleansed/master_2020_11_20_new.csv',
                   col_types = manual_arranged_dtypes) %>% 
  mutate(date_start = lubridate::dmy(date_start)) %>% 
  select(-original_who_code)

# Read coding
coding <- read_csv('/Users/hamishgibbs/Documents/Covid-19/WHO_PHSM_Cleaning/data/manual/who_dataset_coding.csv',
                   col_types = cols(non_compliance = col_character(), who_targeted = col_character())) %>% 
  select(prov_category, prov_subcategory, 
         prov_measure, who_code) %>% 
  distinct() %>% 
  add_count(prov_category, prov_subcategory, 
            prov_measure) %>% 
  filter(n == 1) %>% 
  select(-n)

# Select 10, 11, 12 records
#16,594
master %>% 
  filter(who_code %in% c('10', '11', '12')) %>% 
  #join_coding
  select(dataset, prov_category, prov_subcategory, 
         prov_measure) %>% 
  left_join(coding, by = c('prov_category', 
                           'prov_subcategory', 'prov_measure')) %>% 
  filter(is.na(who_code)) %>% 
  distinct() %>% 
  arrange(dataset) %>% 
  view()

odd_values <- master %>% 
  filter(who_code %in% c('10', '11', '12')) %>% 
  left_join(coding, by = c('prov_category', 
                           'prov_subcategory', 'prov_measure')) %>% 
  dplyr::rename(who_code = who_code.x) %>% 
  dplyr::rename(original_who_code = who_code.y)

values <- master %>% 
  filter(!who_code %in% c('10', '11', '12')) %>% 
  mutate(original_who_code = who_code)


(odd_values %>% pull(1) %>% length() + values %>% pull(1) %>% length())
master %>% pull(1) %>% length()
testthat::expect_true((odd_values %>% pull(1) %>% length() + values %>% pull(1) %>% length()) == master %>% pull(1) %>% length())

#####

# Change this once the original_who_code is present in the update data

#####
new_master <- rbind(odd_values, values) %>% 
  mutate(who_code = original_who_code) %>% 
  select(-original_who_code) %>% 
  mutate(dataset = ifelse(dataset == 'OxCGRT', 'OXCGRT', dataset)) %>% 
  mutate(country_territory_area = str_to_title(country_territory_area)) #%>% 
  #mutate(area_covered = str_to_lower(area_covered))

jh_num_ids <- new_master %>% 
  filter(dataset == 'JH_HIT', who_code == '4.1.2') %>% 
  pull(prop_id) %>% 
  gsub("[^0-9.]", "",  .)

#Need to correct the JS schools IDs
jh_schools <- tibble(prop_id = c(paste0(jh_num_ids, '_primary_school'),
 paste0(jh_num_ids, '_sec_school'),
 paste0(jh_num_ids, '_nursery_school')))

new_master <- plyr::rbind.fill(new_master, jh_schools) %>% as_tibble()

write_csv(new_master, '/Users/hamishgibbs/Documents/Covid-19/WHO_PHSM_Cleaning/data/not_cleansed/master_2020_11_20_new2.csv')



