Search.setIndex({docnames:["index","source/modules","source/src","source/src.manually_cleaned","source/src.master","source/src.postprocess","source/src.preprocess","source/src.processing"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:55},filenames:["index.rst","source/modules.rst","source/src.rst","source/src.manually_cleaned.rst","source/src.master.rst","source/src.postprocess.rst","source/src.preprocess.rst","source/src.processing.rst"],objects:{"":{src:[2,0,0,"-"]},"src.master":{main:[4,0,0,"-"]},"src.master.main":{get_combo_string:[4,1,1,""],get_new_records:[4,1,1,""]},"src.postprocess":{CDC_ITF:[5,0,0,"-"],JH_HIT:[5,0,0,"-"],main:[5,0,0,"-"]},"src.postprocess.CDC_ITF":{postprocess:[5,1,1,""],remove_id_duplicates:[5,1,1,""]},"src.postprocess.JH_HIT":{combine_measures:[5,1,1,""],postprocess:[5,1,1,""]},"src.postprocess.main":{postprocess:[5,1,1,""]},"src.preprocess":{check:[6,0,0,"-"],utils:[6,0,0,"-"]},"src.preprocess.check":{check_column_names:[6,1,1,""],check_date_format:[6,1,1,""],check_input:[6,1,1,""],validate_date_format:[6,1,1,""]},"src.preprocess.utils":{df_to_records:[6,1,1,""],filter_new_hashes:[6,1,1,""],get_measure_records:[6,1,1,""],get_names:[6,1,1,""],get_row_hashes:[6,1,1,""],oxcgrt_records:[6,1,1,""],split_df_by_group:[6,1,1,""],write_records:[6,1,1,""]},"src.processing":{ACAPS:[7,0,0,"-"],CDC_ITF:[7,0,0,"-"],JH_HIT:[7,0,0,"-"],check:[7,0,0,"-"],main:[7,0,0,"-"],utils:[7,0,0,"-"]},"src.processing.ACAPS":{transform:[7,1,1,""]},"src.processing.CDC_ITF":{add_date_end:[7,1,1,""],area_covered_national:[7,1,1,""],join_comments:[7,1,1,""],transform:[7,1,1,""]},"src.processing.JH_HIT":{apply_prov_measure_filter:[7,1,1,""],blank_record_and_url:[7,1,1,""],fill_not_enough_to_code:[7,1,1,""],transform:[7,1,1,""]},"src.processing.check":{check_missing_iso:[7,1,1,""],check_missing_who_code:[7,1,1,""],check_record_keys_agree:[7,1,1,""]},"src.processing.main":{process:[7,1,1,""]},"src.processing.utils":{add_admin_level:[7,1,1,""],apply_key_map:[7,1,1,""],assign_id:[7,1,1,""],assign_who_coding:[7,1,1,""],assign_who_country_name:[7,1,1,""],create_id:[7,1,1,""],generate_blank_record:[7,1,1,""],get_min_id:[7,1,1,""],key_map:[7,1,1,""],new_id:[7,1,1,""],none_to_empty_str:[7,1,1,""],parse_date:[7,1,1,""],remove_tags:[7,1,1,""],replace_conditional:[7,1,1,""],replace_country:[7,1,1,""],replace_sensitive_regions:[7,1,1,""],shift_sensitive_region:[7,1,1,""]},src:{manually_cleaned:[3,0,0,"-"],master:[4,0,0,"-"],postprocess:[5,0,0,"-"],preprocess:[6,0,0,"-"],process:[2,0,0,"-"],processing:[7,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:function"},terms:{"0x7efca72991d0":[],"0x7efca7299278":[],"0x7efca7299358":[],"0x7efca72a2358":[],"0x7efca72a2400":[],"0x7efca72a2438":[],"0x7efca72a2e80":[],"0x7efca72a2fd0":[],"0x7efca74b74e0":[],"0x7efca74b79e8":[],"0x7efca75e97b8":[],"0x7efca75e9828":[],"0x7efca75e9860":[],"0x7efca75e98d0":[],"0x7efca75e9f60":[],"0x7efca75e9f98":[],"0x7efca7602ac8":[],"0x7efca7602c50":[],"0x7efca7602c88":[],"0x7efca7602da0":[],"0x7efca7602ef0":[],"0x7efca7602f28":[],"0x7efca7602f60":[],"0x7efca76336a0":[],"0x7efca76338d0":[],"0x7efca7633b00":[],"0x7efca76503c8":[],"0x7efca7650438":[],"0x7efca765ecf8":[],"0x7efca77515f8":[],"0x7efca7751978":[],"0x7efca77519e8":[],"0x7efca7a7f898":[],"0x7efca7a7f940":[],"0x7f097cb8d5c0":[],"0x7f097cba01d0":[],"0x7f097cba0438":[],"0x7f097cbc3a90":[],"0x7f097cbc3b38":[],"0x7f097cbc3b70":[],"0x7f097cbc3ba8":[],"0x7f097cc67a20":[],"0x7f097cc9a828":[],"0x7f097cc9a898":[],"0x7f097cc9a9b0":[],"0x7f097ccefa90":[],"0x7f097ccf86a0":[],"0x7f097ccf86d8":[],"0x7f097ccf8748":[],"0x7f097ccf87b8":[],"0x7f097ccf87f0":[],"0x7f097ccf8828":[],"0x7f097cd048d0":[],"0x7f097cd04b00":[],"0x7f097cd0c048":[],"0x7f097cd0ce48":[],"0x7f097cd19a90":[],"0x7f097cd3aeb8":[],"0x7f097cd4fa20":[],"0x7f097cd4fb70":[],"0x7f097cd4fc50":[],"0x7f097cd7ad30":[],"0x7f097cdfea20":[],"0x7f097cdfef28":[],"0x7f097ce159e8":[],"0x7f097ce15ac8":[],"0x7f097ce15b70":[],"0x7f097ce15ba8":[],"0x7f097ce81518":[],"0x7f097ce81e10":[],"0x7f097ce81ef0":[],"0x7f097ce81f28":[],"0x7f0ae8b49240":[],"0x7f0ae8b49358":[],"0x7f0ae8b49908":[],"0x7f0ae8b51048":[],"0x7f0ae8b51588":[],"0x7f0ae8b51eb8":[],"0x7f0ae8b51fd0":[],"0x7f0ae8d7cef0":[],"0x7f0ae8e27ac8":[],"0x7f0ae8e27e10":[],"0x7f0ae8eb0128":[],"0x7f0ae8eb0198":[],"0x7f0ae8eb0828":[],"0x7f0ae8eb0b38":[],"0x7f0ae8eb0b70":[],"0x7f0ae8ee1438":[],"0x7f0ae8ee1828":[],"0x7f0ae8ee26d8":[],"0x7f0ae8ee2748":[],"0x7f0ae8ee2d30":[],"0x7f0ae8ee60f0":[],"0x7f0ae8ee6208":[],"0x7f0ae8ee9390":[],"0x7f0ae8ee93c8":[],"0x7f0ae8ee9400":[],"0x7f0ae8ee9438":[],"0x7f0ae8ee94e0":[],"0x7f0ae8ee96a0":[],"0x7f0ae8eff4e0":[],"0x7f0ae8eff550":[],"0x7f0ae8f0dd30":[],"0x7f0ae8ff8908":[],"0x7f0ae8ff89e8":[],"0x7f0ae8ff8a58":[],"0x7f24ab273f28":[],"0x7f24ab297a58":[],"0x7f24ab297b00":[],"0x7f24ab297b38":[],"0x7f24ab297b70":[],"0x7f24ab33b9e8":[],"0x7f24ab36a7b8":[],"0x7f24ab36a828":[],"0x7f24ab36a940":[],"0x7f24ab3c09e8":[],"0x7f24ab3c9320":[],"0x7f24ab3c9630":[],"0x7f24ab3c9668":[],"0x7f24ab3c96d8":[],"0x7f24ab3c9748":[],"0x7f24ab3c9780":[],"0x7f24ab3c97b8":[],"0x7f24ab3c9908":[],"0x7f24ab3d5f60":[],"0x7f24ab3de358":[],"0x7f24ab3de630":[],"0x7f24ab3eaa20":[],"0x7f24ab40def0":[],"0x7f24ab422a20":[],"0x7f24ab422ba8":[],"0x7f24ab422be0":[],"0x7f24ab44cc88":[],"0x7f24ab4cf6d8":[],"0x7f24ab4cf828":[],"0x7f24ab4cf940":[],"0x7f24ab4e78d0":[],"0x7f24ab4e7940":[],"0x7f24ab4e7dd8":[],"0x7f24ab5531d0":[],"0x7f24ab553588":[],"0x7f24ab553d30":[],"0x7f24ab553e80":[],"0x7f24ab68bf60":[],"0x7f2f79dbe278":[],"0x7f2f79dbe390":[],"0x7f2f79dbe940":[],"0x7f2f79dc06a0":[],"0x7f2f79dc0d68":[],"0x7f2f79dc0da0":[],"0x7f2f79dc0f98":[],"0x7f2f79fd4860":[],"0x7f2f79fd4940":[],"0x7f2f7a099e10":[],"0x7f2f7a0a3358":[],"0x7f2f7a0a3470":[],"0x7f2f7a10d048":[],"0x7f2f7a10ddd8":[],"0x7f2f7a153438":[],"0x7f2f7a1537f0":[],"0x7f2f7a1542b0":[],"0x7f2f7a1580f0":[],"0x7f2f7a158278":[],"0x7f2f7a1582e8":[],"0x7f2f7a158400":[],"0x7f2f7a158438":[],"0x7f2f7a158550":[],"0x7f2f7a158d30":[],"0x7f2f7a158f98":[],"0x7f2f7a16d2e8":[],"0x7f2f7a16d550":[],"0x7f2f7a16d5c0":[],"0x7f2f7a16db38":[],"0x7f2f7a16dd68":[],"0x7f2f7a17eda0":[],"0x7f2f7a268748":[],"0x7f2f7a2688d0":[],"0x7f2f7a268940":[],"0x7f30c1167278":[],"0x7f30c1167390":[],"0x7f30c1167940":[],"0x7f30c13b72e8":[],"0x7f30c13b7320":[],"0x7f30c13d68d0":[],"0x7f30c13d6978":[],"0x7f30c144f5c0":[],"0x7f30c14ff630":[],"0x7f30c14ff8d0":[],"0x7f30c14ffb38":[],"0x7f30c14ffc88":[],"0x7f30c151c198":[],"0x7f30c151c208":[],"0x7f30c151c2e8":[],"0x7f30c151c4a8":[],"0x7f30c151c518":[],"0x7f30c151cc88":[],"0x7f30c151ccc0":[],"0x7f30c151cf28":[],"0x7f30c151cf60":[],"0x7f30c152a128":[],"0x7f30c152a1d0":[],"0x7f30c152a3c8":[],"0x7f30c152a588":[],"0x7f30c152ada0":[],"0x7f30c1586550":[],"0x7f30c1586588":[],"0x7f30c1586630":[],"0x7f30c15866d8":[],"0x7f30c1586c50":[],"0x7f30c1615710":[],"0x7f30c1615748":[],"0x7f30c1615ba8":[],"0x7f447765c438":[],"0x7f447765c4a8":[],"0x7f4477660978":[],"0x7f4477660a58":[],"0x7f4477660a90":[],"0x7f4477660ac8":[],"0x7f4477874080":[],"0x7f44778747b8":[],"0x7f44779a7a58":[],"0x7f44779f26d8":[],"0x7f44779f2978":[],"0x7f44779f2be0":[],"0x7f44779f2d30":[],"0x7f44779f3748":[],"0x7f44779f3828":[],"0x7f44779f3be0":[],"0x7f44779f3cc0":[],"0x7f44779f3da0":[],"0x7f44779f8240":[],"0x7f44779f82b0":[],"0x7f44779f8390":[],"0x7f44779f8438":[],"0x7f44779f8470":[],"0x7f44779f8588":[],"0x7f4477a0d588":[],"0x7f4477a0d5f8":[],"0x7f4477a0def0":[],"0x7f4477a18e10":[],"0x7f4477b08748":[],"0x7f4477b089b0":[],"0x7f4477b08a90":[],"0x7f4477e3d470":[],"0x7f4477e3d6a0":[],"0x7f4477e3de80":[],"0x7f4cc4808588":[],"0x7f4cc48085f8":[],"0x7f4cc4828c50":[],"0x7f4cc4828cf8":[],"0x7f4cc4828d30":[],"0x7f4cc4828d68":[],"0x7f4cc48d0be0":[],"0x7f4cc4900978":[],"0x7f4cc49009e8":[],"0x7f4cc4900b00":[],"0x7f4cc4957c18":[],"0x7f4cc4961828":[],"0x7f4cc4961860":[],"0x7f4cc49618d0":[],"0x7f4cc4961940":[],"0x7f4cc4961978":[],"0x7f4cc49619b0":[],"0x7f4cc49701d0":[],"0x7f4cc49705f8":[],"0x7f4cc4970a58":[],"0x7f4cc4970a90":[],"0x7f4cc49804a8":[],"0x7f4cc49b86d8":[],"0x7f4cc49b8710":[],"0x7f4cc49bb8d0":[],"0x7f4cc49bbb70":[],"0x7f4cc49bbda0":[],"0x7f4cc49bcac8":[],"0x7f4cc4a04278":[],"0x7f4cc4a04320":[],"0x7f4cc4a044a8":[],"0x7f4cc4a044e0":[],"0x7f4cc4a04588":[],"0x7f4cc4aeaa20":[],"0x7f4cc4aeaa58":[],"0x7f4cc4aeae10":[],"0x7f4cc4aeaeb8":[],"0x7f4cc4e09e10":[],"0x7f4d49253240":[],"0x7f4d49253358":[],"0x7f4d49253908":[],"0x7f4d49255320":[],"0x7f4d49255358":[],"0x7f4d492553c8":[],"0x7f4d492556a0":[],"0x7f4d4947fe80":[],"0x7f4d4952b780":[],"0x7f4d4952bdd8":[],"0x7f4d495b4160":[],"0x7f4d495b4240":[],"0x7f4d495b4358":[],"0x7f4d495b4518":[],"0x7f4d495b4630":[],"0x7f4d495b4668":[],"0x7f4d495b4710":[],"0x7f4d495b4860":[],"0x7f4d495b48d0":[],"0x7f4d495b4908":[],"0x7f4d495b4be0":[],"0x7f4d495b4c88":[],"0x7f4d495b4cf8":[],"0x7f4d495b4da0":[],"0x7f4d495e7400":[],"0x7f4d495e77f0":[],"0x7f4d495e80f0":[],"0x7f4d495e8b70":[],"0x7f4d49603518":[],"0x7f4d49603588":[],"0x7f4d49612dd8":[],"0x7f4d496fd320":[],"0x7f4d496fd5f8":[],"0x7f4d496fdd30":[],"0x7f54bfdce1d0":[],"0x7f54bfdce470":[],"0x7f54bfdce828":[],"0x7f54bfdd7080":[],"0x7f54bfdd7390":[],"0x7f54bfdd7780":[],"0x7f54bfdd7c18":[],"0x7f54c00af6d8":[],"0x7f54c00af9e8":[],"0x7f54c0124940":[],"0x7f54c0124cc0":[],"0x7f54c0124d30":[],"0x7f54c0124e48":[],"0x7f54c0137dd8":[],"0x7f54c0137e48":[],"0x7f54c01696d8":[],"0x7f54c0169908":[],"0x7f54c016a710":[],"0x7f54c016cc50":[],"0x7f54c016cc88":[],"0x7f54c0174048":[],"0x7f54c01742b0":[],"0x7f54c0174390":[],"0x7f54c0184470":[],"0x7f54c01844e0":[],"0x7f54c0184898":[],"0x7f54c0192d68":[],"0x7f54c027e6a0":[],"0x7f54c027eb38":[],"0x7f54c027ef60":[],"0x7f54c0294278":[],"0x7f54c0294860":[],"0x7f54c0294d68":[],"0x7f54c0294da0":[],"0x7f55213342b0":[],"0x7f55213343c8":[],"0x7f5521334978":[],"0x7f5521336208":[],"0x7f55213364e0":[],"0x7f5521336668":[],"0x7f5521336be0":[],"0x7f552160f4a8":[],"0x7f552160f780":[],"0x7f552160f978":[],"0x7f5521696240":[],"0x7f55216962e8":[],"0x7f5521696470":[],"0x7f5521696898":[],"0x7f55216968d0":[],"0x7f5521696c18":[],"0x7f55216c6c88":[],"0x7f55216c6e48":[],"0x7f55216c6f60":[],"0x7f55216c7470":[],"0x7f55216c7860":[],"0x7f55216cb550":[],"0x7f55216cbe80":[],"0x7f55216d4d30":[],"0x7f55216d4e48":[],"0x7f55216d4f98":[],"0x7f55216e4518":[],"0x7f55216e4588":[],"0x7f55216f1da0":[],"0x7f5521700128":[],"0x7f55217de908":[],"0x7f55217de9e8":[],"0x7f55217dea58":[],"0x7f552181de80":[],"0x7f5aa8bb9b00":[],"0x7f5aa8bb9ba8":[],"0x7f5aa8bb9be0":[],"0x7f5aa8bb9c18":[],"0x7f5aa8c5cb38":[],"0x7f5aa8c8d860":[],"0x7f5aa8c8d8d0":[],"0x7f5aa8c8d9e8":[],"0x7f5aa8ce4ac8":[],"0x7f5aa8ced470":[],"0x7f5aa8ced6d8":[],"0x7f5aa8ced710":[],"0x7f5aa8ced780":[],"0x7f5aa8ced7f0":[],"0x7f5aa8ced828":[],"0x7f5aa8ced860":[],"0x7f5aa8ced940":[],"0x7f5aa8d01358":[],"0x7f5aa8d016d8":[],"0x7f5aa8d0dac8":[],"0x7f5aa8d0df28":[],"0x7f5aa8d45a90":[],"0x7f5aa8d45be0":[],"0x7f5aa8d45cc0":[],"0x7f5aa8d60780":[],"0x7f5aa8d60c18":[],"0x7f5aa8d6fd68":[],"0x7f5aa8df2a58":[],"0x7f5aa8df2ac8":[],"0x7f5aa8df2e80":[],"0x7f5aa8e097f0":[],"0x7f5aa8e09c50":[],"0x7f5aa8e09da0":[],"0x7f5aa8e09e80":[],"0x7f5aa8e768d0":[],"0x7f5aa8e76d68":[],"0x7f5aa8e76eb8":[],"0x7f5aa8e76f98":[],"0x7f61d927c5c0":[],"0x7f61d927c860":[],"0x7f61d927c908":[],"0x7f61d929ee10":[],"0x7f61d929eeb8":[],"0x7f61d929eef0":[],"0x7f61d929ef28":[],"0x7f61d9334b70":[],"0x7f61d9334be0":[],"0x7f61d9334cf8":[],"0x7f61d9382da0":[],"0x7f61d93caef0":[],"0x7f61d93d6048":[],"0x7f61d93d6a90":[],"0x7f61d93d6b00":[],"0x7f61d93d6b38":[],"0x7f61d93d6b70":[],"0x7f61d93d6c18":[],"0x7f61d93e3630":[],"0x7f61d93e3d68":[],"0x7f61d94287b8":[],"0x7f61d9428a90":[],"0x7f61d9428b00":[],"0x7f61d94361d0":[],"0x7f61d9436278":[],"0x7f61d94366a0":[],"0x7f61d9436d30":[],"0x7f61d9452860":[],"0x7f61d9452c88":[],"0x7f61d94632b0":[],"0x7f61d9463710":[],"0x7f61d9478550":[],"0x7f61d9478630":[],"0x7f61d94786d8":[],"0x7f61d9527860":[],"0x7f61d9527908":[],"0x7f61d9527c50":[],"0x7f61d9527c88":[],"0x7f686114ba20":[],"0x7f686114bac8":[],"0x7f686114bb00":[],"0x7f686114bb38":[],"0x7f68611eeb38":[],"0x7f686121f6d8":[],"0x7f686121f748":[],"0x7f686121f860":[],"0x7f68612744e0":[],"0x7f6861274668":[],"0x7f6861274a20":[],"0x7f686127d630":[],"0x7f686127d668":[],"0x7f686127d6d8":[],"0x7f686127d748":[],"0x7f686127d780":[],"0x7f686127d7b8":[],"0x7f68612915f8":[],"0x7f6861291668":[],"0x7f686129ea20":[],"0x7f68612c2ef0":[],"0x7f68612d90b8":[],"0x7f68612d9160":[],"0x7f68612d9ac8":[],"0x7f68612d9c50":[],"0x7f68612d9c88":[],"0x7f68612ffd30":[],"0x7f686139b828":[],"0x7f686139bba8":[],"0x7f686139bd30":[],"0x7f68613b32b0":[],"0x7f68613b3a90":[],"0x7f68613b3f98":[],"0x7f68613f1b00":[],"0x7f6861408208":[],"0x7f6861408908":[],"0x7f6861408940":[],"0x7f6861408da0":[],"0x7f6e46a2d4a8":7,"0x7f6e46a2d5c0":7,"0x7f6e46a2db70":7,"0x7f6e46a34518":7,"0x7f6e46a34550":7,"0x7f6e46a34978":7,"0x7f6e46a349b0":7,"0x7f6e46d92278":6,"0x7f6e46d922e8":6,"0x7f6e46d92400":6,"0x7f6e46d92438":6,"0x7f6e46d92c50":6,"0x7f6e46d92da0":6,"0x7f6e46d92dd8":6,"0x7f6e46dc57b8":5,"0x7f6e46dc5b70":5,"0x7f6e46dc9240":7,"0x7f6e46dc9be0":7,"0x7f6e46dd0390":6,"0x7f6e46dd04a8":6,"0x7f6e46dd0550":6,"0x7f6e46dd0c88":6,"0x7f6e46dd0e48":6,"0x7f6e46dd0e80":6,"0x7f6e46dd0f28":6,"0x7f6e46de1630":5,"0x7f6e46de16a0":5,"0x7f6e46deeef0":5,"0x7f6e46ed96d8":4,"0x7f6e46ed9780":4,"0x7f6e46ed9908":4,"0x7f6e46faf978":7,"0x7f6e472110b8":7,"0x7f6e472114e0":7,"0x7f7b668271d0":[],"0x7f7b668272e8":[],"0x7f7b668274e0":[],"0x7f7b66828048":[],"0x7f7b668280b8":[],"0x7f7b66828780":[],"0x7f7b668288d0":[],"0x7f7b66828e10":[],"0x7f7b66af96d8":[],"0x7f7b66af9c18":[],"0x7f7b66b74908":[],"0x7f7b66b74ba8":[],"0x7f7b66b74c18":[],"0x7f7b66b74e80":[],"0x7f7b66bb8630":[],"0x7f7b66bb87b8":[],"0x7f7b66bb8a58":[],"0x7f7b66bb8ac8":[],"0x7f7b66bb8ba8":[],"0x7f7b66bb9630":[],"0x7f7b66bb9898":[],"0x7f7b66bbc9e8":[],"0x7f7b66bbcda0":[],"0x7f7b66bc62b0":[],"0x7f7b66bc6c18":[],"0x7f7b66bc6eb8":[],"0x7f7b66bd5400":[],"0x7f7b66bd5470":[],"0x7f7b66be3eb8":[],"0x7f7b66c28f60":[],"0x7f7b66cce8d0":[],"0x7f7b66cceac8":[],"0x7f7b66cceef0":[],"0x7f7b66ce4588":[],"0x7f81618354a8":[],"0x7f8161848160":[],"0x7f816186ca58":[],"0x7f816186cb00":[],"0x7f816186cb38":[],"0x7f816186cb70":[],"0x7f816190fac8":[],"0x7f8161940710":[],"0x7f8161940748":[],"0x7f8161940860":[],"0x7f8161997a90":[],"0x7f81619a06a0":[],"0x7f81619a06d8":[],"0x7f81619a0748":[],"0x7f81619a07b8":[],"0x7f81619a07f0":[],"0x7f81619a0828":[],"0x7f81619b4048":[],"0x7f81619b4908":[],"0x7f81619c1ac8":[],"0x7f81619e2128":[],"0x7f81619e2860":[],"0x7f81619e2eb8":[],"0x7f81619fab00":[],"0x7f81619fac88":[],"0x7f81619fb278":[],"0x7f8161a22d68":[],"0x7f8161a43048":[],"0x7f8161a43160":[],"0x7f8161a432e8":[],"0x7f8161a43320":[],"0x7f8161aa4ba8":[],"0x7f8161aa4f28":[],"0x7f8161b13198":[],"0x7f8161b29278":[],"0x7f8161b299b0":[],"0x7f8161b299e8":[],"0x7f8161b29e48":[],"0x7fa4b4c42ac8":[],"0x7fa4b4c42b70":[],"0x7fa4b4c42ba8":[],"0x7fa4b4c42be0":[],"0x7fa4b4ce4a58":[],"0x7fa4b4d157f0":[],"0x7fa4b4d15860":[],"0x7fa4b4d15978":[],"0x7fa4b4d6cb00":[],"0x7fa4b4d75710":[],"0x7fa4b4d75748":[],"0x7fa4b4d757b8":[],"0x7fa4b4d75828":[],"0x7fa4b4d75860":[],"0x7fa4b4d75898":[],"0x7fa4b4d89668":[],"0x7fa4b4d896d8":[],"0x7fa4b4d96048":[],"0x7fa4b4d96a58":[],"0x7fa4b4dcfac8":[],"0x7fa4b4dcfb70":[],"0x7fa4b4dcfc50":[],"0x7fa4b4dcfc88":[],"0x7fa4b4dcfe80":[],"0x7fa4b4df7cf8":[],"0x7fa4b4e7be10":[],"0x7fa4b4e7be48":[],"0x7fa4b4e7be80":[],"0x7fa4b4e7bf28":[],"0x7fa4b4e926d8":[],"0x7fa4b4e92ac8":[],"0x7fa4b4e92c18":[],"0x7fa4b4efe048":[],"0x7fa4b4efee48":[],"0x7fa4b4efef28":[],"0x7fa4b4efef60":[],"0x7fa4b4fda898":[],"0x7fa4b4fda9b0":[],"0x7fa93f65bf60":[],"0x7fa93f67fa20":[],"0x7fa93f67fac8":[],"0x7fa93f67fb00":[],"0x7fa93f67fb38":[],"0x7fa93f7239b0":[],"0x7fa93f753710":[],"0x7fa93f753780":[],"0x7fa93f753898":[],"0x7fa93f7aba58":[],"0x7fa93f7b33c8":[],"0x7fa93f7b3630":[],"0x7fa93f7b3668":[],"0x7fa93f7b36d8":[],"0x7fa93f7b3748":[],"0x7fa93f7b3780":[],"0x7fa93f7b37b8":[],"0x7fa93f7b3a58":[],"0x7fa93f7c7278":[],"0x7fa93f7c75f8":[],"0x7fa93f7d49b0":[],"0x7fa93f7e1da0":[],"0x7fa93f7f7ef0":[],"0x7fa93f80ea20":[],"0x7fa93f80eb70":[],"0x7fa93f80ec50":[],"0x7fa93f823048":[],"0x7fa93f835cc0":[],"0x7fa93f8b86a0":[],"0x7fa93f8b8860":[],"0x7fa93f8b89b0":[],"0x7fa93f8d06d8":[],"0x7fa93f8d07b8":[],"0x7fa93f8d0e48":[],"0x7fa93f93c2e8":[],"0x7fa93f93cd30":[],"0x7fa93f93ce80":[],"0x7fa93f93cf60":[],"0x7fbb1d528080":[],"0x7fbb1d52e320":[],"0x7fbb1d52e390":[],"0x7fbb1d52ec88":[],"0x7fbb1d52ecf8":[],"0x7fbb1d52ed68":[],"0x7fbb1d52eda0":[],"0x7fbb1d56ad68":[],"0x7fbb1d7473c8":[],"0x7fbb1d747400":[],"0x7fbb1d747550":[],"0x7fbb1d891400":[],"0x7fbb1d891550":[],"0x7fbb1d891780":[],"0x7fbb1d8917b8":[],"0x7fbb1d891ba8":[],"0x7fbb1d8c7128":[],"0x7fbb1d8f1940":[],"0x7fbb1d8f1978":[],"0x7fbb1d9432b0":[],"0x7fbb1d94be10":[],"0x7fbb1d9a4978":[],"0x7fbb1d9f7278":[],"0x7fbb1da1dba8":[],"0x7fbc6df2b2e8":[],"0x7fbc6df2b400":[],"0x7fbc6df2b9b0":[],"0x7fbc6df35ac8":[],"0x7fbc6df35b00":[],"0x7fbc6e292240":[],"0x7fbc6e292278":[],"0x7fbc6e2922b0":[],"0x7fbc6e292358":[],"0x7fbc6e2929b0":[],"0x7fbc6e292c18":[],"0x7fbc6e292c50":[],"0x7fbc6e292cf8":[],"0x7fbc6e2c5470":[],"0x7fbc6e2c5828":[],"0x7fbc6e2c6860":[],"0x7fbc6e2cb278":[],"0x7fbc6e2cb3c8":[],"0x7fbc6e2cb400":[],"0x7fbc6e2cb4a8":[],"0x7fbc6e2cb5c0":[],"0x7fbc6e2e05c0":[],"0x7fbc6e2e0630":[],"0x7fbc6e2ed358":[],"0x7fbc6e2ed588":[],"0x7fbc6e2ede80":[],"0x7fbc6e348940":[],"0x7fbc6e348da0":[],"0x7fbc6e3db7b8":[],"0x7fbc6e3db908":[],"0x7fbc6e3db978":[],"0x7fbc6e423fd0":[],"0x7fbc6e773c18":[],"0x7fbc6e773c88":[],"0x7fdd9f7a4400":[],"0x7fdd9f7a4518":[],"0x7fdd9f7a4a90":[],"0x7fdd9f7a66a0":[],"0x7fdd9f7a6b00":[],"0x7fdd9f7a6b38":[],"0x7fdd9f7a6b70":[],"0x7fdd9fb04278":[],"0x7fdd9fb042b0":[],"0x7fdd9fb043c8":[],"0x7fdd9fb04c18":[],"0x7fdd9fb04c50":[],"0x7fdd9fb04c88":[],"0x7fdd9fb04cf8":[],"0x7fdd9fb04d30":[],"0x7fdd9fb34be0":[],"0x7fdd9fb37710":[],"0x7fdd9fb37b38":[],"0x7fdd9fb3b278":[],"0x7fdd9fb3bf28":[],"0x7fdd9fb422b0":[],"0x7fdd9fb42400":[],"0x7fdd9fb42438":[],"0x7fdd9fb424e0":[],"0x7fdd9fb425f8":[],"0x7fdd9fb535c0":[],"0x7fdd9fb53630":[],"0x7fdd9fb60f28":[],"0x7fdd9fc4c748":[],"0x7fdd9fc4c780":[],"0x7fdd9fc4cba8":[],"0x7fdd9ff7dc88":[],"0x7fdd9ffe6780":[],"0x7fdd9ffe6ac8":[],"0x7fe2b9ea35f8":[],"0x7fe2b9ea3630":[],"0x7fe2b9edba90":[],"0x7fe2b9edbb38":[],"0x7fe2b9edbb70":[],"0x7fe2b9edbba8":[],"0x7fe2b9f7da20":[],"0x7fe2b9fae828":[],"0x7fe2b9fae898":[],"0x7fe2b9fae9b0":[],"0x7fe2ba005b00":[],"0x7fe2ba00e160":[],"0x7fe2ba00e748":[],"0x7fe2ba00e7b8":[],"0x7fe2ba00e828":[],"0x7fe2ba00e860":[],"0x7fe2ba00e898":[],"0x7fe2ba022630":[],"0x7fe2ba0226a0":[],"0x7fe2ba02f048":[],"0x7fe2ba02fb00":[],"0x7fe2ba0506d8":[],"0x7fe2ba0509e8":[],"0x7fe2ba067a90":[],"0x7fe2ba067be0":[],"0x7fe2ba067cc0":[],"0x7fe2ba090d68":[],"0x7fe2ba0b2400":[],"0x7fe2ba12aac8":[],"0x7fe2ba12ab00":[],"0x7fe2ba12ae48":[],"0x7fe2ba1449b0":[],"0x7fe2ba144da0":[],"0x7fe2ba144e10":[],"0x7fe2ba197940":[],"0x7fe2ba197ef0":[],"0x7fe2ba197f60":[],"0x7fe2ba197fd0":[],"0x7fecd84a3320":[],"0x7fecd84a3438":[],"0x7fecd84a39e8":[],"0x7fecd84a64e0":[],"0x7fecd84a6630":[],"0x7fecd84a6be0":[],"0x7fecd84a6c50":[],"0x7fecd84a6c88":[],"0x7fecd877f630":[],"0x7fecd877fe80":[],"0x7fecd8805198":[],"0x7fecd8805278":[],"0x7fecd88052e8":[],"0x7fecd8805320":[],"0x7fecd8805358":[],"0x7fecd88054a8":[],"0x7fecd8805c50":[],"0x7fecd8805c88":[],"0x7fecd8836898":[],"0x7fecd8837470":[],"0x7fecd8837860":[],"0x7fecd883b208":[],"0x7fecd883be80":[],"0x7fecd8842358":[],"0x7fecd8842390":[],"0x7fecd8842438":[],"0x7fecd88424a8":[],"0x7fecd8842550":[],"0x7fecd8853550":[],"0x7fecd88535c0":[],"0x7fecd8863cc0":[],"0x7fecd894e748":[],"0x7fecd894e908":[],"0x7fecd894e978":[],"2020_12_11":[],"2020_12_15":[],"2020_12_16":[],"2020_12_17":[],"2020_12_30":[],"2021_01_06":[],"2021_01_13":[],"2021_01_15":[],"2021_01_25":[],"2021_02_16":[],"2021_02_17":[],"2021_03_04":[],"2021_03_09":6,"234_border_closur":5,"234_border_in":5,"234_border_out":5,"333_school_closur":5,"333_school_nurseri":5,"333_school_primari":5,"333_school_secondari":5,"break":6,"default":7,"function":[6,7],"import":[4,5,6,7],"int":7,"new":[4,7],"null":7,"return":[4,5,6,7],"throw":7,"true":6,"try":6,AND:7,For:7,IDs:[6,7],Not:7,The:[0,6],These:6,Used:2,Useful:7,Will:6,Yes:[],_mockobject:[4,5,6,7],a1_:6,acap:2,acaps_1234:7,accept:[6,7],accpet:6,add:[5,7],add_admin_level:7,add_date_end:7,added:7,addit:6,adjust:[],adjust_manually_clean:[],admin:7,admin_level:7,administr:7,agre:6,all:6,also:[6,7],alter:7,america_2020:4,ani:[4,6],anoth:[],appi:5,appli:[5,7],appliu:7,apply_key_map:7,apply_prov_measure_filt:7,arbitrari:[5,7],area:7,area_cov:7,area_covered_n:7,area_nam:7,around:0,ascii:[],assign:7,assign_id:7,assign_who_cod:7,assign_who_country_nam:7,attribut:[],autodoc:[4,5,6,7],autodoc_mock_import:2,base64:6,base:[4,7],becaus:6,been:[],begin:[6,7],behaviour:7,between:7,blank:[6,7],blank_record:7,blank_record_and_url:7,bool:6,both:7,call:6,cdc:[],cdc_itf:2,certain:7,challeng:6,chang:[5,7],charact:7,check:2,check_column_nam:6,check_date_format:6,check_input:6,check_missing_iso:7,check_missing_who_cod:7,check_record_keys_agre:7,clean:[],closest:[],code:[0,7],col:4,column1:7,column2:7,column:[4,6,7],column_config:6,columns_to_low:[],com:[],combin:[5,7],combine_measur:5,combined_record:6,combo:4,comment:7,commonli:7,comprehens:7,concis:7,condition:7,config:[6,7],conflict:[],consid:4,contain:[0,6],convent:7,convers:[],convert:[6,7],copi:[],correct:7,correspond:7,countri:7,country_nam:7,country_ref:7,country_territory_area:[4,7],covid:[],creat:7,create_id:7,csv:[],current:[6,7],dai:6,data:[0,4,5,6],datafram:[4,5,6,7],dataset:[0,4,5,6,7],dataset_numb:7,date:[6,7],date_config:6,date_end:7,date_entri:[],date_now:6,date_start:[4,7],defin:[5,7],definit:7,demot:7,deprac:7,depract:7,descend:7,descript:[6,7],df_to_record:6,dict:[6,7],dictionari:6,differ:7,dir:6,directori:[6,7],displai:7,document:7,doe:6,drop:[6,7],drop_column:6,duplic:5,dure:[],each:[6,7],els:7,empti:7,enclos:7,encod:6,enforc:7,enough:7,equal:7,equival:[],error:7,etc:[5,6,7],exact:[],exampl:[4,5,7],except:6,exist:7,existing_id:7,expect:6,ext:[4,5,6,7],extens:[],extract:[6,7],fail:7,failur:6,fals:6,field:7,file:[6,7],filenam:7,fill_not_enough_to_cod:7,filter:[6,7],filter_new_hash:6,finish:[],follow:[],following_measure_numb:[],form:4,format:[6,7],from:[6,7],full:6,full_value_nam:6,futur:7,gener:7,generate_blank_record:7,get:6,get_combo_str:4,get_measure_record:6,get_min_id:7,get_nam:6,get_new_record:4,get_row_hash:6,github:[],given:[4,6,7],gov:[],govern:[],group:[5,6],handl:7,harmonis:0,has:[],hash:6,have:7,here:[0,7],hit:[],hold:6,hopkinsidd:[],htm:[],html:7,http:[],id_column:[6,7],id_stub:5,idea:[],ident:5,identifi:[4,7],ids:7,implement:7,includ:7,increment:7,index:0,individu:[6,7],inform:[6,7],ingest:6,ingested_path:6,inlin:[],input:[4,5,6,7],insert:7,insid:7,intervent:[0,7],iso:7,iso_3166_1_numer:7,issu:[0,7],jh_hit:2,join:[],join_com:7,kei:7,key_map:7,key_ref:7,known:[],label:7,later:7,length:7,level:[5,7],lift:7,list:[4,6,7],local:[],log:[6,7],lookup:[],lowercas:[],lowercase_column:[],main:2,make:7,manual:5,map:7,match:[4,7],maximum:7,mean:4,measur:6,measure_stag:[5,7],merg:[4,7],method:7,min:7,min_id:7,miss:7,missing_valu:7,mmwr:[],mmwrhtml:[],modul:0,more:7,move:7,much:7,must:7,name:[5,6,7],nation:7,need:[6,7],new_id:7,new_kei:7,new_nam:7,new_record:7,newli:4,no_update_phras:7,non:0,non_compli:7,non_compliance_penalti:[],none:[6,7],none_to_empty_str:7,not_enough_to_cod:[],note:[6,7],number:[5,6,7],numer:[5,7],object:[4,5,6,7],occur:7,old:[],old_kei:7,old_record:7,one:[],onli:[6,7],open:[0,7],option:7,org:[],orient:6,origin:7,original_nam:7,other:[6,7],otherwis:7,output:[6,7],outut:7,over:0,oxcgrt:6,oxcgrt_record:6,oxford:[],page:0,panda:7,paramet:[4,5,6,7],pars:[6,7],parse_d:7,past:4,path:6,pharmaceut:0,phrase:7,phsm:7,pickl:6,pleas:0,possibl:6,prefix:6,present:[4,6],preview:[],previou:4,previous:4,previous_upd:4,problem:0,process:6,project:0,promot:7,prop_id:5,prov_categori:7,prov_measur:7,prov_measure_filt:7,prov_subcategori:[],provid:[0,6,7],put:7,rais:6,random:7,reason_end:[],recogn:7,recognis:[4,7],record:[4,5,6,7],reduc:6,ref_col:5,refer:[4,6,7],region:7,releas:0,reli:7,remov:[5,7],remove_id_dupl:5,remove_tag:7,repeat:6,replac:7,replace_condit:7,replace_countri:7,replace_sensitive_region:7,repositori:0,requir:7,result:6,retain:6,routin:0,row:6,same:[6,7],save:6,save_ingestion_hash:6,school_clos:[],search:0,see:[0,7],select:7,sensit:7,separ:4,sequenc:7,set:7,share:7,shift:[],shift_sensitive_region:7,should:[6,7],singl:6,slice:6,smooth:7,some:7,sourc:[4,5,6,7],specif:[5,7],specifi:7,sphinx:[4,5,6,7],split:6,split_df_by_group:6,stage:[],standard:7,state:4,step:[],store:7,str:[5,6,7],string:[4,6,7],stub:[5,6],stub_nam:6,subset:6,success:6,sum:6,tag:7,tage:7,target:7,test:7,thi:[0,6,7],to_datetim:7,togeth:4,transform:[5,7],two:7,type:[4,5,6,7],unifi:[0,5,6,7],uniqu:7,unit:4,unknown:7,updat:[4,7],update_following_measur:[],update_measure_stage_d:[],url:7,usa:7,usa_counti:[],used:[0,6],using:[],util:2,valeu:7,validate_date_format:6,valu:[4,5,6,7],value_nam:6,vector:7,volunt:0,vulner:7,web:7,weekli:0,were:6,when:[4,7],where:[6,7],whether:6,which:[6,7],who:7,who_categori:7,who_cod:[5,7],who_id:7,who_measur:7,who_region:7,who_subcategori:7,wide:6,wise:6,world:0,write:6,write_record:6,www:[]},titles:["WHO PHSM Cleaning\u2019s documentation","tests","src package","src.manually_cleaned package","src.master package","src.postprocess package","src.preprocess package","src.processing package"],titleterms:{acap:7,cdc_itf:[5,7],check:[6,7],clean:0,content:[2,3,4,5,6,7],document:0,indic:0,jh_hit:[5,7],main:[3,4,5,7],manually_clean:3,master:4,modul:[2,3,4,5,6,7],packag:[2,3,4,5,6,7],phsm:0,postprocess:5,preprocess:[2,6],process:[2,7],src:[2,3,4,5,6,7],submodul:[2,3,4,5,6,7],subpackag:2,tabl:0,test:1,util:[6,7],who:0}})