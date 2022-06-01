/*
 This script is for adding Unit Test data to an existing database.
 Should be run after db_update_2.4.0.sql
 */


LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users`
    DISABLE KEYS */;
INSERT IGNORE INTO `users` (`username`, `password`, `first_name`, `last_name`, `organization`, `department`, `title`,
                            `phone_number`, `email_id`, `enabled`)
VALUES ('canano_admin', '$2a$10$c5XRfWd.OcuIEG3clJntF.EKrF8RBB4vhKStkVirxpqC9B0ryyakS', 'caNanoLab', 'Guest', '', '',
        '', '', '', '1'),
       ('canano_curator', '$2a$10$YS6y4fhLRH4uGq7mo2mjBOEu1Lsf3O90DUpnnxChBtcLE8Co0ICqq', 'caNanoLab', 'Guest', '', '',
        '', '', '', '1'),
       ('canano_guest', '$2a$10$2uNpjCXSrSFL2HhSHlsvhu2aFFj69/aCiHJ5Ka6KHn/2shNpIC2dW', 'caNanoLab', 'Guest', '', '',
        '', '', '', '1'),
       ('canano_res1', '$2a$10$4zZmhs.mF.b7LrjkpZqCFuANJt1UNpOeI8feAJIRwiN03YWlIRedm', 'caNanoLab', 'Guest', '', '', '',
        '', '', '1'),
       ('canano_res2', '$2a$10$MG1GG3rYlHFsB/fVnNOG3.c6N4x7sa9cCdcWaPg2TuRuFtBOhkDba', 'caNanoLab', 'Guest', '', '', '',
        '', '', '1'),
       ('guest1', '$2a$10$k/2Zg9sTcZvzMqUco1JI5O9qyfyA0QeQfgEYTvNAH8fFaaKLHFBFW', 'caNanoLab', 'Guest', '', '', '', '',
        '', '1'),
       ('guest2', '$2a$10$efSvHYCMRUf3rBxiGCz.5uX8X80g.VtzGPe84p6OiD7ZKbCXhCz0m', 'caNanoLab', 'Guest', '', '', '', '',
        '', '1'),
       ('guest3', '$2a$10$CGQ4cs.bzV5i6GSzn8wF3uCP2sdL5sIZsPlXAG5uW4Fl0GUrhkq5.', 'caNanoLab', 'Guest', '', '', '', '',
        '', '1'),
       ('guest4', '$2a$10$bbf0gBxkz6sZ85VRDTG.XOMTUmrKX6qNHhsj2C4wK.B/N9p5jhiWK', 'caNanoLab', 'Guest', '', '', '', '',
        '', '1'),
       ('guest5', '$2a$10$avCA1Z0vSJvGPWpuiNCnUu0iQDR1muwacsOttckeCWQ7vOilOnK.2', 'caNanoLab', 'Guest', '', '', '', '',
        '', '1');
/*!40000 ALTER TABLE `users`
    ENABLE KEYS */;
UNLOCK TABLES;

LOCK TABLES `authorities` WRITE;
/*!40000 ALTER TABLE `authorities`
    DISABLE KEYS */;
INSERT IGNORE INTO `authorities` (`username`, `authority`)
VALUES ('canano_admin', 'ROLE_ADMIN'),
       ('canano_admin', 'ROLE_ANONYMOUS'),
       ('canano_curator', 'ROLE_CURATOR'),
       ('canano_guest', 'ROLE_ANONYMOUS'),
       ('canano_res1', 'ROLE_RESEARCHER'),
       ('canano_res2', 'ROLE_RESEARCHER'),
       ('guest1', 'ROLE_RESEARCHER'),
       ('guest2', 'ROLE_RESEARCHER'),
       ('guest3', 'ROLE_RESEARCHER'),
       ('guest4', 'ROLE_RESEARCHER'),
       ('guest5', 'ROLE_RESEARCHER');
/*!40000 ALTER TABLE `authorities`
    ENABLE KEYS */;
UNLOCK TABLES;




LOCK TABLES `common_lookup` WRITE;
/*!40000 ALTER TABLE `common_lookup`
    DISABLE KEYS */;
INSERT IGNORE INTO `common_lookup` (`common_lookup_pk_id`, `name`, `attribute`, `value`)
VALUES        (1013, 'synthesis', 'purityType', 'Final Purification'),
              (1014, 'synthesis', 'purityType', 'Interim Purification'),
              (1015, 'synthesis', 'materialType', 'coat'),
              (1016, 'synthesis', 'materialType', 'core'),
              (1017, 'synthesis', 'materialType', 'excipient'),
              (1018, 'synthesis', 'materialType', 'internal buffer'),
              (1019, 'synthesis', 'materialType', 'lipid'),
              (1020, 'synthesis', 'materialType', 'modifier'),
              (1021, 'synthesis', 'materialType', 'monomer'),
              (1022, 'synthesis', 'materialType', 'polymer'),
              (1023, 'synthesis', 'materialType', 'repeat unit'),
              (1024, 'synthesis', 'materialType', 'RNA'),
              (1025, 'synthesis', 'materialType', 'shell'),
              (1026, 'synthesis', 'materialType', 'terminal group'),
              (1027, 'material', 'value_unit', '%'),
              (1028, 'material', 'value_unit', '%mol'),
              (1029, 'material', 'value_unit', '%mole'),
              (1030, 'material', 'value_unit', '%wt'),
              (1031, 'material', 'value_unit', '%wt/vol'),
              (1032, 'material', 'value_unit', '%wt/wt'),
              (1033, 'material', 'value_unit', 'g'),
              (1034, 'material', 'value_unit', 'g/cm3'),
              (1035, 'material', 'value_unit', 'g/mL'),
              (1036, 'material', 'value_unit', 'Gy'),
              (1037, 'material', 'value_unit', 'L'),
              (1038, 'material', 'value_unit', 'M'),
              (1039, 'material', 'value_unit', 'mCi'),
              (1040, 'material', 'value_unit', 'mg'),
              (1041, 'material', 'value_unit', 'mg/mL'),
              (1042, 'material', 'value_unit', 'microCi'),
              (1043, 'material', 'value_unit', 'microCi/mg'),
              (1044, 'material', 'value_unit', 'mL'),
              (1045, 'material', 'value_unit', 'mM'),
              (1046, 'material', 'value_unit', 'mmol'),
              (1047, 'material', 'value_unit', 'mmol/L'),
              (1048, 'material', 'value_unit', 'mol'),
              (1049, 'material', 'value_unit', 'mol%'),
              (1050, 'material', 'value_unit', 'mole%'),
              (1051, 'material', 'value_unit', 'ng'),
              (1052, 'material', 'value_unit', 'nM'),
              (1053, 'material', 'value_unit', 'nmol'),
              (1054, 'material', 'value_unit', 'pmol'),
              (1055, 'material', 'value_unit', 'uCi/mg'),
              (1056, 'material', 'value_unit', 'ug'),
              (1057, 'material', 'value_unit', 'ug/mL'),
              (1058, 'material', 'value_unit', 'ug/uL'),
              (1059, 'material', 'value_unit', 'uL'),
              (1060, 'material', 'value_unit', 'uL/mL'),
              (1061, 'material', 'value_unit', 'uM'),
              (1062, 'material', 'value_unit', 'umol'),
              (1063, 'material', 'value_unit', 'wt%'),
              (1064, 'material', 'value_unit', 'wt/wt'),
              (1065, 'function', 'type', 'transfection'),
              (1066, 'function', 'type', 'therapeutic function'),
              (1067, 'function', 'type', 'therapeutic'),
              (1068, 'function', 'type', 'targeting function'),
              (1069, 'function', 'type', 'targeting'),
              (1070, 'function', 'type', 'magnetic hyperthermia'),
              (1071, 'function', 'type', 'magnetic'),
              (1072, 'function', 'type', 'Linker'),
              (1073, 'function', 'type', 'imaging function'),
              (1074, 'function', 'type', 'imaging'),
              (1075, 'function', 'type', 'Fluorescence'),
              (1076, 'function', 'type', 'endosomolysis'),
              (1077, 'function', 'type', 'Drug nanocarrier'),
              (1078, 'function', 'type', 'Drug carrier'),
              (1079, 'function', 'type', 'Adjuvant'),
              (1080, 'functionalization', 'type', 'Polymer'),
              (1081, 'functionalization', 'type', 'Quantum Dot'),
              (1082, 'functionalization', 'type', 'Magnetic Particle'),
              (1083, 'functionalization', 'type', 'radioisotope'),
              (1084, 'functionalization', 'type', 'Monomer'),
              (1085, 'functionalization', 'type', 'cell membrane'),
              (1086, 'functionalization', 'type', 'surface coated porous nanoparticles'),
              (1087, 'functionalization', 'type', 'porous nanoparticle'),
              (1088, 'functionalization', 'type', 'RNA'),
              (1089, 'functionalization', 'type', 'Fluorophore'),
              (1090, 'functionalization', 'type', 'modifier'),
              (1091, 'functionalization', 'type', 'antibody'),
              (1092, 'functionalization', 'type', 'biopolymer'),
              (1093, 'functionalization', 'type', 'small molecule'),
              (1094, 'synthesis', 'otherMaterialType', 'reagent'),
              (1096, 'protocol', 'type', 'purification'),
              (1097, 'percent purity', 'otherUnit', '%');
/*!40000 ALTER TABLE `common_lookup`
    ENABLE KEYS */;
UNLOCK TABLES;


LOCK TABLES `organization` WRITE;
/*!40000 ALTER TABLE `organization`
    DISABLE KEYS */;
INSERT IGNORE INTO `organization` (`organization_pk_id`, `name`, `streetAddress1`, `streetAddress2`, `city`, `state`,
                                   `postal_code`, `country`, `created_date`, `created_by`)
VALUES (1000, 'Synthesis test organization', NULL, NULL, NULL, NULL, NULL, NULL, '2019-12-06 12:15:00',
        'canano_curator'),
       (1005, 'Synthesis demo organization', NULL, NULL, NULL, NULL, NULL, NULL, '2019-12-06 12:15:00',
        'canano_curator'),
       (65601536, 'caNanoLab', '', '', '', '', '', '', '2020-01-08 19:07:58', 'canano_curator');
/*!40000 ALTER TABLE `organization`
    ENABLE KEYS */;
UNLOCK TABLES;


LOCK TABLES `point_of_contact` WRITE;
/*!40000 ALTER TABLE `point_of_contact`
    DISABLE KEYS */;
INSERT IGNORE INTO `point_of_contact` (`poc_pk_id`, `role`, `first_name`, `last_name`, `middle_initial`, `phone`,
                                       `email`, `created_date`, `updated_date`, `created_by`, `organization_pk_id`)
VALUES (1000, 'investigator', 'canano', 'curator', NULL, NULL, NULL, '2019-12-06 12:15:00', 'canano_curator', 1000),
       (1005, 'investigator', 'canano', 'curator', NULL, NULL, NULL, '2019-12-06 12:15:00', 'canano_curator', 1005),
       (65568768, '', 'Canano', 'Curator', '', '', '', '2020-01-08 19:07:58', 'canano_curator', 65601536);
/*!40000 ALTER TABLE `point_of_contact`
    ENABLE KEYS */;
UNLOCK TABLES;


LOCK TABLES `sample` WRITE;
/*!40000 ALTER TABLE `sample`
    DISABLE KEYS */;
INSERT IGNORE INTO `sample` (`sample_pk_id`, `sample_name`, `created_date`, `created_by`, `primary_contact_pk_id`)
VALUES (1000, 'Synthesis sample', '2019-12-06 12:15:00', 'canano_curator', 1000),
       (1005, 'Synthesis Demo Sample', '2019-12-06 12:15:00', 'canano_curator', 1005),
       (65634304, 'Synthesis Sample Jan82020 1', '2020-01-08 19:07:58', 'canano_curator', 65568768),
       (65634305, 'Synthesis Sample Jan82020 2', '2020-01-08 19:09:25', 'canano_curator', 65568768),
       (65634306, 'Synthesis Sample Jan82020 3', '2020-01-08 19:10:05', 'canano_curator', 65568768);
/*!40000 ALTER TABLE `sample`
    ENABLE KEYS */;
UNLOCK TABLES;

LOCK TABLES `file` WRITE;
/*!40000 ALTER TABLE `file`
    DISABLE KEYS */;
INSERT IGNORE INTO `file` (`file_pk_id`, `file_name`, `file_uri`, `file_extension`, `created_by`, `created_date`,
                           `title`, `description`, `comments`, `file_type`, `is_uri_external`)
VALUES (1000, 'NCIt_CTCAE_5.0', 'https://evs.nci.nih.gov/ftp1/CTCAE/CTCAE_5.0/NCIt_CTCAE_5.0.xlsx', 'xlsx',
        'canano_curator', '2019-12-06 12:15:00', 'Synthesis File', 'dummy row for testing of synthesis', NULL, 'Excel',
        0),
       (1005, 'NCIt_CTCAE_5.0', 'https://evs.nci.nih.gov/ftp1/CTCAE/CTCAE_5.0/NCIt_CTCAE_5.0.xlsx', 'xlsx',
        'canano_curator', '2019-08-28 00:00:00', 'Synthesis File', 'dummy row for testing of synthesis', NULL, 'Excel',
        0),
       (1111, 'NCIt_CTCAE_5.0', 'https://evs.nci.nih.gov/ftp1/CTCAE/CTCAE_5.0/NCIt_CTCAE_5.0.xlsx', 'xlsx',
        'canano_curator', '2019-12-06 12:15:00', 'Synthesis File', 'dummy row for testing of synthesis', NULL, 'Excel',
        0),
       (1222, 'NCIt_CTCAE_5.0', 'https://evs.nci.nih.gov/ftp1/CTCAE/CTCAE_5.0/NCIt_CTCAE_5.0.xlsx', 'xlsx',
        'canano_curator', '2019-08-28 00:00:00', 'Synthesis File', 'Sample 2 test file', NULL, 'Excel', 0),
       (1333, 'NCIt_CTCAE_5.0', 'https://evs.nci.nih.gov/ftp1/CTCAE/CTCAE_5.0/NCIt_CTCAE_5.0.xlsx', 'xlsx',
        'canano_curator', '2019-12-06 12:15:00', 'Synthesis File', 'dummy row for testing of synthesis', NULL, 'Excel',
        0),
       (1444, 'NCIt_CTCAE_5.0', 'https://evs.nci.nih.gov/ftp1/CTCAE/CTCAE_5.0/NCIt_CTCAE_5.0.xlsx', 'xlsx',
        'canano_curator', '2019-12-06 12:15:00', 'Synthesis File', 'dummy row for testing of synthesis', NULL, 'Excel',
        0),
       (1555, 'NCIt_CTCAE_5.0', 'https://evs.nci.nih.gov/ftp1/CTCAE/CTCAE_5.0/NCIt_CTCAE_5.0.xlsx', 'xlsx',
        'canano_curator', '2019-12-06 12:15:00', 'Synthesis File', 'dummy row for testing of synthesis', NULL, 'Excel',
        0),
       (66289664, '2020 Holiday & Pay Calendar.pdf', 'protocols/20200110_12-52-36-363_2020 Holiday & Pay Calendar.pdf',
        NULL, 'canano_curator', '2020-01-10 12:52:34', 'Synthesis Test Protocol and Holiday Calendar',
        'Uploaded pdf of holiday calendar as a stand-in file for a protocol', NULL, NULL, 0),
       (66715648, 'Finding.png',
        'particles/Synthesis Sample Jan82020 2/metabolicstability/20200110_20-49-52-093_Finding.png', NULL,
        'canano_curator', '2020-01-10 20:49:52', 'jpg', 'finding', NULL, 'image', 0);
/*!40000 ALTER TABLE `file`
    ENABLE KEYS */;
UNLOCK TABLES;




LOCK TABLES `protocol` WRITE;
/*!40000 ALTER TABLE `protocol`
    DISABLE KEYS */;
INSERT IGNORE INTO `protocol` (`protocol_pk_id`, `protocol_name`, `protocol_type`, `created_by`, `created_date`,
                               `protocol_abbreviation`, `protocol_version`, `file_pk_id`)
VALUES (66256896, 'Synthesis Test Protocol', 'synthesis', 'canano_curator', '2020-01-10 12:52:34', 'STP', '1.0',
        66289664),
       (66584576, 'Test Characterization Protocol', 'in vivo assay', 'canano_curator', '2020-01-10 20:03:01', 'TCP',
        '1', NULL),
       (66584577, 'Test In Vitro Characterization Protocol', 'in vitro assay', 'canano_curator', '2020-01-10 20:04:41',
        'TiVCP', '1.1', NULL),
       (66945024, 'Test Synthesis Purification Protocol', 'purification', 'canano_curator', '2020-04-21 16:02:41',
        'Sypur', '1.0', NULL),
       (1111, 'Test Protocol for Purification 2', 'purification', 'canano_curator', '2020-05-26 18:00:00','Pure2','1.0',NULL),
       (66945025,'Test Purification Protocol 1','purification','canano_curator','2020-07-07 12:43:59','TPP 1','1.0',1555),
       (66945026,'Test Purification Protocol 2','purification','canano_curator','2020-07-07 12:48:28','TPP2','1.0',66289664);
/*!40000 ALTER TABLE `protocol`
    ENABLE KEYS */;
UNLOCK TABLES;










LOCK TABLES `supplier` WRITE;
/*!40000 ALTER TABLE `supplier`
    DISABLE KEYS */;
INSERT IGNORE INTO `supplier` (`supplier_pk_id`, `supplier_name`, `lot`)
VALUES (1000, 'Synthesis supplier 1000', 'ABC123xyz'),
       (1005, 'Synthesis supplier 1005', 'ABC456xyz'),
       (1111, 'Synthesis supplier 1111', 'ABC789xyz');
/*!40000 ALTER TABLE `supplier`
    ENABLE KEYS */;
UNLOCK TABLES;


LOCK TABLES `synthesis` WRITE;
/*!40000 ALTER TABLE `synthesis`
    DISABLE KEYS */;
INSERT IGNORE INTO `synthesis` (`synthesis_pk_id`, `sample_pk_id`)
VALUES (1000, 1000),
       (1005, 1005),
       (1111, 65634304),
       (1222, 65634306);
/*!40000 ALTER TABLE `synthesis`
    ENABLE KEYS */;
UNLOCK TABLES;



LOCK TABLES `synthesis_functionalization` WRITE;
/*!40000 ALTER TABLE `synthesis_functionalization`
    DISABLE KEYS */;
INSERT IGNORE INTO `synthesis_functionalization` (`synthesis_functionalization_pk_id`, `synthesis_pk_id`,
                                                  `protocol_pk_id`, `description`, `created_date`, `created_by`)
VALUES (1000, 1000, 66256896, 'Synthesis Functionalization Test 1', '2019-12-06 12:15:00', 'canano_curator'),
       (1005, 1005, 66256896,
        'In order to produce PEG-capped AuNPs, various concentrations (3.6, 8.4, 16.8 and 25.2 ug per ml of as synthesized AuNP suspension) of 5,000 Mw PEG were added to the ‘as synthesized’ AuNP solutions at room temperature. After the required amount of PEG was added, the solution was stirred at room temperature for 2 h to allow for complete exchange of the citrate molecules with PEG.',
        '2019-08-29 00:00:00', 'canano_curator'),
       (1111, 1111, 66256896, 'Synthesis Functionalization Test 1', '2019-12-06 12:15:00', 'canano_curator'),
       (1222, 1222, NULL,
        'In order to produce PEG-capped AuNPs, various concentrations (3.6, 8.4, 16.8 and 25.2 ug per ml of as synthesized AuNP suspension) of 5,000 Mw PEG were added to the ‘as synthesized’ AuNP solutions at room temperature. After the required amount of PEG was added, the solution was stirred at room temperature for 2 h to allow for complete exchange of the citrate molecules with PEG.',
        '2019-08-29 00:00:00', 'canano_curator');
/*!40000 ALTER TABLE `synthesis_functionalization`
    ENABLE KEYS */;
UNLOCK TABLES;


LOCK TABLES `synthesis_functionalization_element` WRITE;
/*!40000 ALTER TABLE `synthesis_functionalization_element`
    DISABLE KEYS */;
INSERT IGNORE INTO `synthesis_functionalization_element` (`synthesis_functionalization_element_pk_id`,
                                                          `synthesis_functionalization_pk_id`, `molecular_formula`,
                                                          `molecular_formula_type`, `description`, `created_by`,
                                                          `created_date`, `chemical_name`, `value`, `value_unit`,
                                                          `pub_chem_datasource_name`, `pub_chem_id`, `type`,
                                                          `activation_method`, `activation_effect`)
VALUES (1000, 1000, 'kK-N12-C4-L', 'Hill', 'Synthesis Functionalization Material Element 1', 'canano_curator',
        '2019-12-06 12:15:00', 'SynFuncMat Element1', 84.000, 'pg', NULL, NULL, 'material', 'Lightning', 'Animation'),
       (1001, 1000, 'AbCdEfG', 'Hill', 'Synthesis Functionalization Material Element 2', 'canano_curator',
        '2019-12-06 12:15:00', 'McNuggets', 10.000, 'piece', NULL, NULL, 'material', 'Does not require activation',
        NULL),
       (1005, 1005, 'CH3(OCH2CH2)nOH', 'Hill',
        'Added to the as-synthesized AuNP solution to a concentration of 3.6 ug/mL', 'canano_curator',
        '2019-08-28 00:00:00', 'polyethylene glycol, 5000 MW', 3.600, 'ug', 'Compound', 24887753, 'material',
        'Does not require activation', NULL),
       (1111, 1111, 'kK-N12-C4-L', 'Hill', 'Synthesis Functionalization Material Element 1', 'canano_curator',
        '2019-12-06 12:15:00', 'SynFuncMat Element1', 84.000, 'pg', NULL, NULL, 'material', NULL, NULL),
       (1222, 1222, 'CH3(OCH2CH2)nOH', 'Hill',
        'Added to the as-synthesized AuNP solution to a concentration of 3.6 ug/mL', 'canano_curator',
        '2019-08-28 00:00:00', 'polyethylene glycol, 5000 MW', 3.600, 'ug', 'Compound', 24887753, 'material', NULL,
        NULL);
/*!40000 ALTER TABLE `synthesis_functionalization_element`
    ENABLE KEYS */;
UNLOCK TABLES;


LOCK TABLES `sfe_inherent_function` WRITE;
/*!40000 ALTER TABLE `sfe_inherent_function`
    DISABLE KEYS */;
INSERT IGNORE INTO `sfe_inherent_function` (`sfe_inherent_function_pk_id`, `synthesis_functionalization_element_pk_id`,
                                            `type`, `description`)
VALUES (1000, 1000, 'biocompatibility', 'Synthesis Functionalization Material Inherent Function 1'),
       (1001, 1000, 'activation', 'Inherent Function 2'),
       (1005, 1005, 'biocompatibility', ''),
       (1111, 1111, 'biocompatibility', 'Synthesis Functionalization Material Inherent Function 1'),
       (1222, 1222, 'biocompatibility', '');
/*!40000 ALTER TABLE `sfe_inherent_function`
    ENABLE KEYS */;
UNLOCK TABLES;



LOCK TABLES `synthesis_functionalization_element_file` WRITE;
/*!40000 ALTER TABLE `synthesis_functionalization_element_file`
    DISABLE KEYS */;
INSERT IGNORE INTO `synthesis_functionalization_element_file` (`synthesis_functionalization_element_pk_id`, `file_pk_id`)
VALUES (1005, 1005);
/*!40000 ALTER TABLE `synthesis_functionalization_element_file`
    ENABLE KEYS */;
UNLOCK TABLES;






LOCK TABLES `synthesis_material` WRITE;
/*!40000 ALTER TABLE `synthesis_material`
    DISABLE KEYS */;
INSERT IGNORE INTO `synthesis_material` (`synthesis_material_pk_id`, `synthesis_pk_id`, `protocol_pk_id`, `description`,
                                         `created_date`, `created_by`)
VALUES (1000, 1000, 66256896, 'Synthesis test sample 1', '2019-12-06 12:15:00', 'canano_curator'),
       (1005, 1005, NULL,
        'Chloroauric acid solution (200 ml of 0.01wt.%) was heated to a rolling boil and refluxed in a 500-ml-round-bottom flask using a temperature-controlled hot plate with continuous stirring [4]. A 4.5-ml aliquot of 1 wt.% sodium citrate solution was then added to the boiling chloroauric acid solution, and the heating was continued under reflux for 15 min to enable complete reaction. The solution was then allowed to cool to room temperature with continuous stirring yielding citrate-capped AuNPs.',
        '2019-08-28 00:00:00', 'canano_curator'),
       (1111, 1111, 66256896, 'Synthesis test sample 1', '2019-12-06 12:15:00', 'canano_curator'),
       (1222, 1222, NULL,
        'Chloroauric acid solution (200 ml of 0.01wt.%) was heated to a rolling boil and refluxed in a 500-ml-round-bottom flask using a temperature-controlled hot plate with continuous stirring [4]. A 4.5-ml aliquot of 1 wt.% sodium citrate solution was then added to the boiling chloroauric acid solution, and the heating was continued under reflux for 15 min to enable complete reaction. The solution was then allowed to cool to room temperature with continuous stirring yielding citrate-capped AuNPs.',
        '2019-08-28 00:00:00', 'canano_curator');
/*!40000 ALTER TABLE `synthesis_material`
    ENABLE KEYS */;
UNLOCK TABLES;



LOCK TABLES `synthesis_material_element` WRITE;
/*!40000 ALTER TABLE `synthesis_material_element`
    DISABLE KEYS */;
INSERT IGNORE INTO `synthesis_material_element` (`synthesis_material_element_pk_id`, `synthesis_material_pk_id`,
                                                 `molecular_formula`, `molecular_formula_type`, `description`,
                                                 `created_by`, `created_date`, `chemical_name`, `value`, `value_unit`,
                                                 `pub_chem_datasource_name`, `pub_chem_id`, `supplier_pk_id`, `type`)
VALUES (1000, 1000, 'AA-2x-zZ', 'Hill', 'Synthesis Material Element 1', 'canano_curator', '2019-12-06 12:15:00',
        'Synthesis Chemical 1', 12.000, 'mg', 'Compound', 6224, 1000, 'reagent'),
       (1051, 1005, 'HAuCl4 . 3H2O', 'Hill', '200 mL of 0.01 wt% gold precursor', 'canano_curator',
        '2019-08-28 00:00:00', 'chloroauric acid', 0.010, '%wt', 'Compound', 44134746, 1005, 'composing element'),
       (1052, 1222, 'C6H5Na3O7', 'Hill', '4.5 mL of 1 wt% sodium citrate solution', 'canano_curator',
        '2019-08-28 00:00:00', 'sodium citrate', 1.000, '%wt', 'Compound', 6224, 1111, 'reagent'),
       (1053, 1222, 'H2O', 'Hill', 'Solutions of chloroauric acid and sodium citrate were created with deionized water',
        'canano_curator', '2019-08-28 00:00:00', 'deionized water', 204.500, 'mL', 'substance', 962, NULL, 'solvent');
/*!40000 ALTER TABLE `synthesis_material_element`
    ENABLE KEYS */;
UNLOCK TABLES;


LOCK TABLES `sme_inherent_function` WRITE;
/*!40000 ALTER TABLE `sme_inherent_function`
    DISABLE KEYS */;
INSERT IGNORE INTO `sme_inherent_function` (`sme_inherent_function_pk_id`, `synthesis_material_element_pk_id`, `type`,
                                            `description`)
VALUES (1000, 1000, 'targeting function', 'SME test function'),
       (1001, 1000, 'Function Type', 'SME test function 2'),
       (1005, 1053, 'Function Type', 'SME Function description'),
       (1006, 1053, 'Function Type 2', 'SME Function description 2');
/*!40000 ALTER TABLE `sme_inherent_function`
    ENABLE KEYS */;
UNLOCK TABLES;

LOCK TABLES `synthesis_material_element_file` WRITE;
/*!40000 ALTER TABLE `synthesis_material_element_file`
    DISABLE KEYS */;
INSERT IGNORE INTO `synthesis_material_element_file` (`synthesis_material_element_pk_id`, `file_pk_id`)
VALUES (1000, 1555);
/*!40000 ALTER TABLE `synthesis_material_element_file`
    ENABLE KEYS */;
UNLOCK TABLES;



LOCK TABLES `synthesis_material_file` WRITE;
/*!40000 ALTER TABLE `synthesis_material_file`
    DISABLE KEYS */;
INSERT IGNORE INTO `synthesis_material_file` (`synthesis_material_pk_id`, `file_pk_id`)
VALUES (1000, 1000),
       (1005, 1005);
/*!40000 ALTER TABLE `synthesis_material_file`
    ENABLE KEYS */;
UNLOCK TABLES;



LOCK TABLES `synthesis_purification` WRITE;
/*!40000 ALTER TABLE `synthesis_purification`
    DISABLE KEYS */;
INSERT IGNORE INTO `synthesis_purification` (`synthesis_purification_pk_id`, `synthesis_pk_id`, `protocol_pk_id`,
                                             `type`, `method_name`, `design_method_description`, `created_by`,
                                             `created_date`, `yield`, `analysis`)
VALUES (1000, 1000, 66945024, 'Interim Purification', 'Synthesis Purification Method 1',
        'Test entry for synthesis purification', 'canano_user', '2019-12-06 12:15:00', 84.700, 'Analysis for synth 1'),
       (1001, 1000, 66945024, 'Final Purification', 'Synthesis Purification Method 2',
        'Test entry for final purification', 'canano_user', '2019-12-06 12:15:00', 99.540,
        'Analysis for final purification'),
       (1005, 1005, 66945024, 'Interim Purification', 'Synthesis Purification Method 1',
        'The AuNP solutions were then centrifuged using a Contifuge 17RS, Heraeus SEPATECH at 10,000 rpm for 90 min in 10 ml batches [28]. Of the supernatant, 9.9 ml was then decanted, leaving the AuNP pellet at the bottom of the centrifuge tube. The volume was then made back up to 10 ml by adding 9.9 ml of DI water and agitated. This centrifugal washing process was repeated again to remove any unattached PEG or other reactants.',
        'canano_user', '2019-08-28 00:00:00', NULL, NULL),
       (1111, 1111, 66945026, 'Interim Purification', 'Synthesis Purification Method 1',
        'Test entry for synthesis purification', 'canano_user', '2019-12-06 12:15:00', 84.700, NULL),
       (1222, 1222, 66945025, 'Interim Purification', 'Synthesis Purification Method 1',
        'The AuNP solutions were then centrifuged using a Contifuge 17RS, Heraeus SEPATECH at 10,000 rpm for 90 min in 10 ml batches [28]. Of the supernatant, 9.9 ml was then decanted, leaving the AuNP pellet at the bottom of the centrifuge tube. The volume was then made back up to 10 ml by adding 9.9 ml of DI water and agitated. This centrifugal washing process was repeated again to remove any unattached PEG or other reactants.',
        'canano_user', '2019-08-28 00:00:00', NULL, NULL);
/*!40000 ALTER TABLE `synthesis_purification`
    ENABLE KEYS */;
UNLOCK TABLES;



LOCK TABLES `synthesis_purity` WRITE;
/*!40000 ALTER TABLE `synthesis_purity`
    DISABLE KEYS */;
INSERT IGNORE INTO `synthesis_purity` (`purity_pk_id`, `synthesis_purification_pk_id`, `created_by`, `created_date`)
VALUES (1000, 1000, 'canano_curator', '2019-12-06 12:15:00'),
       (1005, 1005, 'canano_curator', '2019-08-28 00:00:00'),
       (1100, 1000, 'canano_curator', '2021-02-05 15:50:00'),
       (1111, 1111, 'canano_curator', '2019-12-06 12:15:00');
/*!40000 ALTER TABLE `synthesis_purity`
    ENABLE KEYS */;
UNLOCK TABLES;

LOCK TABLES `purity_file` WRITE;
/*!40000 ALTER TABLE `purity_file`
    DISABLE KEYS */;
INSERT IGNORE INTO `purity_file` (`purity_pk_id`, `file_pk_id`)
VALUES (1005, 1333);
/*!40000 ALTER TABLE `purity_file`
    ENABLE KEYS */;
UNLOCK TABLES;

LOCK TABLES `purity_column_header` WRITE;
/*!40000 ALTER TABLE `purity_column_header`
    DISABLE KEYS */;
INSERT IGNORE INTO `canano`.`purity_column_header` (
    `column_pk_id`,
    `name`, `value_type`,
    `value_unit`,
    `created_by`,
    `created_date`,
    `column_order`,
    `column_type`)
VALUES (2000, 'Purity datum 1', 'purity', '%', 'canano_curator', '2020-07-20 16:08:15',1,'datum'),
       (2010, 'Synthesis condition 1', 'observed', 'g', 'canano_curator', '2020-07-20 16:08:15',2,'condition'),
       (1010, 'datum test', 'observed', 'mg', 'canano_curator', '2020-07-20 16:08:15',1,'datum'),
       (2030, 'datum test 2', 'observed', 'mg', 'canano_curator', '2020-07-20 16:08:15',2,'condition'),
       (2040,'Purity datum 2','purity','%','canano_curator','2021-02-05 15:50:00',1,'datum'),
       (2050,'Purity condition 2-1','mean','%','canano_curator','2021-02-05 15:50:00',2,'condition'),
       (2060,'Purity condition 2-2','standard deviation','%','canano_curator','2021-02-05 15:50:00',3,'condition');
/*!40000 ALTER TABLE `purity_column_header`
    ENABLE KEYS */;
UNLOCK TABLES;


LOCK TABLES `purity_datum_condition` WRITE;
/*!40000 ALTER TABLE `purity_datum_condition`
    DISABLE KEYS */;
INSERT IGNORE INTO `purity_datum_condition` (`condition_pk_id`,`row_number`,`purity_pk_id`, `name`, `property`, `value`,
                                             `value_unit`, `value_type`, `created_by`, `created_date`,`type`,`column_pk_id`)
VALUES (1000, 1,1000,'Synthesis condition 1', NULL, '42', 'g', 'observed', 'canano_user', '2019-12-06 12:15:00','condition',2010),
       (1100,2,1000, 'Synthesis condition 2', NULL, '43', 'g', 'observed', 'canano_user', '2019-12-06 12:17:00','condition',2010),
       (1010,1,1000,'Purity datum 1',NULL, '55', '%',NULL,'canano_user', '2019-12-06 12:15:00','datum',2000),
       (1020, 2,1000,'Purity datum 2', NULL, '57.1','%',NULL,'canano_curator', '2019-12-06 12:15:00','datum',2000),
       (1111, 1,1111,'datum_test', NULL, '84', 'mg', 'observed', 'canano_curator', '2019-12-06 12:15:00','condition',2030),
       (1120,1,1111,'Purity datum',NULL,'123.00','%',NULL,'canano_curator', '2019-12-06 12:15:00','datum',1010),
       (1130,1,1100,'datum test1',NULL,'98','%',NULL,'canano_curator','2021-02-05 14:50:00','datum',2040),
       (1140,1,1100,'condition 1-1',NULL,'98','%',NULL,'canano_curator','2021-02-05 14:50:00','condition',2050),
       (1150,1,1100,'condition 1-2',NULL,'0.5','%',NULL,'canano_curator','2021-02-05 14:50:00','condition',2060),
       (1160,2,1100,'datum test2',NULL,'97','%',NULL,'canano_curator','2021-02-05 15:10:00','datum',2040),
       (1170,2,1100,'condition 2-1',NULL,'96.5','%',NULL,'canano_curator','2021-02-05 15:10:00','condition',2050),
       (1180,2,1100,'condition 2-2',NULL,'0.7','%',NULL,'canano_curator','2021-02-05 15:10:00','condition',2060),
       (1190,3,1100,'datum test3',NULL,'98','%',NULL,'canano_curator','2021-02-05 15:15:00','datum',2040),
       (1200,3,1100,'condition 3-1',NULL,'98.4','%',NULL,'canano_curator','2021-02-05 15:15:00','condition',2050),
       (1210,3,1100,'condition 3-2',NULL,'0.6','%',NULL,'canano_curator','2021-02-05 15:15:00','condition',2060);
/*!40000 ALTER TABLE `purity_datum_condition`
    ENABLE KEYS */;
UNLOCK TABLES;

LOCK TABLES `purification_config` WRITE;
/*!40000 ALTER TABLE `purification_config`
    DISABLE KEYS */;
INSERT IGNORE INTO `purification_config` (`purification_config_pk_id`, `synthesis_purification_pk_id`,
                                          `technique_pk_id`, `description`, `created_by`, `created_date`)
VALUES (1000, 1000, 75431936, 'Configuration for synthesis purification', 'canano_curator', '2019-12-06 12:15:00'),
       (1001, 1000, 82903040, 'Configuration for purification 2', 'canano_curator', '2019-12-06 12:15:00'),
       (1002, 1001, 65241092, 'Coulter configuration', 'canano_curator', '2019-12-06 12:15:00'),
       (1005, 1005, 50429952, NULL, 'canano_curator', '2019-08-28 00:00:00'),
       (1111, 1111, 33030144, 'Configuration for synthesis purification', 'canano_curator', '2019-12-06 12:15:00'),
       (1222, 1222, 15630347, NULL, 'canano_curator', '2019-08-28 00:00:00');
/*!40000 ALTER TABLE `purification_config`
    ENABLE KEYS */;
UNLOCK TABLES;



LOCK TABLES `purification_config_instrument` WRITE;
/*!40000 ALTER TABLE `purification_config_instrument`
    DISABLE KEYS */;
INSERT IGNORE INTO `purification_config_instrument` (`purification_config_pk_id`, `instrument_pk_id`)
VALUES (1000, 26804229),
       (1005, 28213251),
       (1111, 26804229),
       (1222, 28213253),
       (1002, 28475412),
       (1001, 44793856),
       (1001, 62914561);
/*!40000 ALTER TABLE `purification_config_instrument`
    ENABLE KEYS */;
UNLOCK TABLES;



LOCK TABLES `acl_object_identity` WRITE;
/*!40000 ALTER TABLE `acl_object_identity`
    DISABLE KEYS */;
INSERT IGNORE INTO `acl_object_identity` (`id`, `object_id_class`, `object_id_identity`, `parent_object`, `owner_sid`,
                                          `entries_inheriting`)
VALUES (20001, 1, 1000, NULL, 3, 1),
       (20002, 16, 1000, NULL, 3, 1),
       (20003, 17, 1000, 2, 3, 1),
       (20004, 1, 1005, NULL, 3, 1),
       (20005, 16, 1005, NULL, 3, 1),
       (20006, 17, 1005, 5, 3, 1),
       (29008, 15, 65601536, NULL, 3, 1),
       (29009, 16, 65568768, 9008, 3, 1),
       (29010, 1, 65634304, NULL, 3, 1),
       (29011, 1, 65634305, NULL, 3, 1),
       (29012, 1, 65634306, NULL, 3, 1),
       (29013, 8, 65961984, 9011, 3, 1),
       (29014, 8, 65961985, 9012, 3, 1),
       (29015, 11, 66256896, NULL, 3, 1),
       (29016, 8, 66420736, 1, 3, 1),
       (29017, 11, 66584576, NULL, 3, 1),
       (29018, 11, 66584577, NULL, 3, 1),
       (29019, 11, 1111, NULL, 3, 1),
       (29020, 11, 66945024, NULL, 3, 1),
       (29021,11,66945025,NULL,3,1),
       (29022,11,66945026,NULL,3,1);
/*!40000 ALTER TABLE `acl_object_identity`
    ENABLE KEYS */;
UNLOCK TABLES;

LOCK TABLES `acl_entry` WRITE;
/*!40000 ALTER TABLE `acl_entry`
    DISABLE KEYS */;
INSERT IGNORE INTO `acl_entry` (`id`, `acl_object_identity`, `ace_order`, `sid`, `mask`, `granting`, `audit_success`,
                                `audit_failure`)
VALUES (1, 20001, 0, 3, 1, 1, 0, 0),
       (2, 20001, 1, 3, 2, 1, 0, 0),
       (3, 20001, 2, 3, 8, 1, 0, 0),
       (4, 20001, 3, 13, 1, 1, 0, 0),
       (5, 20001, 4, 13, 2, 1, 0, 0),
       (6, 20001, 5, 13, 8, 1, 0, 0),
       (7, 20001, 6, 14, 1, 1, 0, 0),
       (15, 20001, 7, 12, 1, 1, 0, 0),
       (189281, 29008, 0, 12, 1, 1, 0, 0),
       (189291, 29010, 0, 3, 1, 1, 0, 0),
       (189292, 29010, 1, 3, 2, 1, 0, 0),
       (189293, 29010, 2, 3, 8, 1, 0, 0),
       (189294, 29010, 3, 13, 1, 1, 0, 0),
       (189295, 29010, 4, 13, 2, 1, 0, 0),
       (189296, 29010, 5, 13, 8, 1, 0, 0),
       (189297, 29010, 6, 14, 1, 1, 0, 0),
       (189307, 29011, 0, 3, 1, 1, 0, 0),
       (189308, 29011, 1, 3, 2, 1, 0, 0),
       (189309, 29011, 2, 3, 8, 1, 0, 0),
       (189310, 29011, 3, 13, 1, 1, 0, 0),
       (189311, 29011, 4, 13, 2, 1, 0, 0),
       (189312, 29011, 5, 13, 8, 1, 0, 0),
       (189313, 29011, 6, 14, 1, 1, 0, 0),
       (189323, 29012, 0, 3, 1, 1, 0, 0),
       (189324, 29012, 1, 3, 2, 1, 0, 0),
       (189325, 29012, 2, 3, 8, 1, 0, 0),
       (189326, 29012, 3, 13, 1, 1, 0, 0),
       (189327, 29012, 4, 13, 2, 1, 0, 0),
       (189328, 29012, 5, 13, 8, 1, 0, 0),
       (189329, 29012, 6, 14, 1, 1, 0, 0),
       (189353, 29015, 0, 3, 1, 1, 0, 0),
       (189354, 29015, 1, 3, 2, 1, 0, 0),
       (189355, 29015, 2, 3, 8, 1, 0, 0),
       (189356, 29015, 3, 13, 1, 1, 0, 0),
       (189357, 29015, 4, 13, 2, 1, 0, 0),
       (189358, 29015, 5, 13, 8, 1, 0, 0),
       (189359, 29015, 6, 14, 1, 1, 0, 0),
       (189360, 29015, 7, 12, 1, 1, 0, 0),
       (189370, 29017, 0, 3, 1, 1, 0, 0),
       (189371, 29017, 1, 3, 2, 1, 0, 0),
       (189372, 29017, 2, 3, 8, 1, 0, 0),
       (189373, 29017, 3, 13, 1, 1, 0, 0),
       (189374, 29017, 4, 13, 2, 1, 0, 0),
       (189375, 29017, 5, 13, 8, 1, 0, 0),
       (189376, 29017, 6, 14, 1, 1, 0, 0),
       (189386, 29018, 0, 3, 1, 1, 0, 0),
       (189387, 29018, 1, 3, 2, 1, 0, 0),
       (189388, 29018, 2, 3, 8, 1, 0, 0),
       (189389, 29018, 3, 13, 1, 1, 0, 0),
       (189390, 29018, 4, 13, 2, 1, 0, 0),
       (189391, 29018, 5, 13, 8, 1, 0, 0),
       (189392, 29018, 6, 14, 1, 1, 0, 0),
       (189400, 20004, 0, 3, 1, 1, 0, 0),
       (189401, 20004, 1, 3, 2, 1, 0, 0),
       (189402, 20004, 2, 3, 8, 1, 0, 0),
       (189403, 20004, 3, 13, 1, 1, 0, 0),
       (189404, 20004, 4, 13, 2, 1, 0, 0),
       (189405, 20004, 5, 13, 8, 1, 0, 0),
       (189406, 20004, 6, 14, 1, 1, 0, 0),
       (189407,20004, 7, 12, 1, 1, 0, 0),
       (189417,29021,0,3,1,1,0,0),
       (189418,29021,1,3,2,1,0,0),
       (189419,29021,2,3,8,1,0,0),
       (189420,29021,3,13,1,1,0,0),
       (189421,29021,4,13,2,1,0,0),
       (189422,29021,5,13,8,1,0,0),
       (189423,29021,6,14,1,1,0,0),
       (189433,29022,0,3,1,1,0,0),
       (189434,29022,1,3,2,1,0,0),
       (189435,29022,2,3,8,1,0,0),
       (189436,29022,3,13,1,1,0,0),
       (189437,29022,4,13,2,1,0,0),
       (189438,29022,5,13,8,1,0,0),
       (189439,29022,6,14,1,1,0,0),
       (189440,29019,0,3,1,1,0,0),
       (189441,29019,1,3,2,1,0,0),
       (189442,29019,2,3,8,1,0,0),
       (189443,29019,3,13,1,1,0,0),
       (189444,29019,4,13,2,1,0,0),
       (189445,29019,5,13,8,1,0,0),
       (189446,29019,6,14,1,1,0,0),
       (189447,29020,0,3,1,1,0,0),
       (189448,29020,1,3,2,1,0,0),
       (189449,29020,2,3,8,1,0,0),
       (189450,29020,3,13,1,1,0,0),
       (189451,29020,4,13,2,1,0,0),
       (189452,29020,5,13,8,1,0,0),
       (189453,29020,6,14,1,1,0,0);
/*!40000 ALTER TABLE `acl_entry`
    ENABLE KEYS */;
UNLOCK TABLES;