# Script to detect problem ids in duplicate_record_id, prev_measure_number and following_measure_number

suppressPackageStartupMessages(
  require(tidyverse)
)


mistress <- read_csv('/Users/hamishgibbs/Documents/Covid-19/WHO_PHSM_Cleaning/data/cleansed/mistress_20201216.csv')

mistress <- mistress %>% 
  mutate(duplicate_record_id = ifelse(duplicate_record_id %in% c('auto', 'auto1', 'auto2'), NA, duplicate_record_id))

get_id_problems <- function(problem_col, mistress){
  
  who_ids <- mistress %>% pull(who_id) %>% unique()
  
  col_ids <- mistress %>% pull(!! sym(problem_col)) %>% unique()
  
  problems <- setdiff(col_ids, who_ids)
  
  problem_df <- mistress %>% 
    filter(!! sym(problem_col) %in% problems) %>% 
    select(who_id, who_code, !! sym(problem_col)) %>% 
    mutate(column = problem_col) %>% 
    dplyr::rename(other_id_col = !! sym(problem_col))
  
  return(problem_df)
  
}

cols <- c('duplicate_record_id', 'prev_measure_number', 'following_measure_number')

problem_ref <- do.call(rbind, lapply(cols, get_id_problems, mistress = mistress))

write_csv(problem_ref, '/Users/hamishgibbs/Documents/Covid-19/WHO_PHSM_Cleaning/data/manual/missing_id_table.csv')

