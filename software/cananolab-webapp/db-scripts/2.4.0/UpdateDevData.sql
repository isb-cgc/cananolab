/*
 One time script to add testing data to Dev
 */



--
-- Dumping data for table `file`
--



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



--
-- Dumping data for table `protocol`
--


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









INSERT IGNORE INTO `canano`.`purity_column_header` (
`column_pk_id`,
 `name`, `value_type`,
 `value_unit`,
 `created_by`,
 `created_date`,
 `column_order`) 
 VALUES ('1010', 'Purity datum 1', 'purity', '%', 'canano_curator', '2020-07-20 16:08:15',0),
 ('2000', 'Synthesis condition 1', 'observed', 'g', 'canano_curator', '2020-07-20 16:08:15',1),
 ('2010', 'datum test', 'observed', 'mg', 'canano_curator', '2020-07-20 16:08:15',0);



--
-- Dumping data for table `technique`
--


INSERT IGNORE INTO `technique` (`technique_pk_id`, `type`, `abbreviation`, `created_date`, `created_by`)
VALUES (1000, 'Interim purification technique', 'InP', '2019-12-06 12:15:00', 'safrant'),
       (1005, 'centrifugal filtration', NULL, '2018-08-28 00:00:00', 'safrant'),
       (1111, 'Interim purification technique', 'InP', '2019-12-06 12:15:00', 'canano_curator'),
       (1222, 'centrifugal filtration', NULL, '2018-08-28 00:00:00', 'canano_curator');










--
-- Dumping data for table `supplier`
--


INSERT IGNORE INTO `supplier` (`supplier_pk_id`, `supplier_name`, `lot`)
VALUES (1000, 'Synthesis supplier 1000', 'ABC123xyz'),
       (1005, 'Synthesis supplier 1005', 'ABC456xyz'),
       (1111, 'Synthesis supplier 1111', 'ABC789xyz');



--
-- Dumping data for table `synthesis`
--


INSERT IGNORE INTO `synthesis` (`synthesis_pk_id`, `sample_pk_id`)
VALUES (1000, 90439682),
       (1005, 90439683),
       (1111, 90439684),
       (1222, 90439685);


--
-- Dumping data for table `synthesis_functionalization`
--


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


--
-- Dumping data for table `synthesis_functionalization_element`
--


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


--

--
-- Dumping data for table `synthesis_functionalization_element_file`
--

INSERT IGNORE INTO `synthesis_functionalization_element_file` (`synthesis_functionalization_element_pk_id`, `file_pk_id`)
VALUES (1005, 1005);




--
-- Dumping data for table `synthesis_material`
--


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


--
-- Dumping data for table `synthesis_material_element`
--


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



--
-- Dumping data for table `sfe_inherent_function`
--


INSERT IGNORE INTO `sfe_inherent_function` (`sfe_inherent_function_pk_id`, `synthesis_functionalization_element_pk_id`,
                                            `type`, `description`)
VALUES (1000, 1000, 'biocompatibility', 'Synthesis Functionalization Material Inherent Function 1'),
       (1001, 1000, 'activation', 'Inherent Function 2'),
       (1005, 1005, 'biocompatibility', ''),
       (1111, 1111, 'biocompatibility', 'Synthesis Functionalization Material Inherent Function 1'),
       (1222, 1222, 'biocompatibility', '');



--
-- Dumping data for table `sme_inherent_function`
--


INSERT IGNORE INTO `sme_inherent_function` (`sme_inherent_function_pk_id`, `synthesis_material_element_pk_id`, `type`,
                                            `description`)
VALUES (1000, 1000, 'targeting function', 'SME test function'),
       (1001, 1000, 'Function Type', 'SME test function 2'),
       (1005, 1053, 'Function Type', 'SME Function description'),
       (1006, 1053, 'Function Type 2', 'SME Function description 2');



--
-- Dumping data for table `synthesis_material_element_file`
--


INSERT IGNORE INTO `synthesis_material_element_file` (`synthesis_material_element_pk_id`, `file_pk_id`)
VALUES (1000, 1555);



--
-- Dumping data for table `synthesis_material_file`
--


INSERT IGNORE INTO `synthesis_material_file` (`synthesis_material_pk_id`, `file_pk_id`)
VALUES (1000, 1000),
       (1005, 1005);



--
-- Dumping data for table `synthesis_purification`
--


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



--
-- Dumping data for table `purification_config`
--


INSERT IGNORE INTO `purification_config` (`purification_config_pk_id`, `synthesis_purification_pk_id`,
                                          `technique_pk_id`, `description`, `created_by`, `created_date`)
VALUES (1000, 1000, 1000, 'Configuration for synthesis purification', 'canano_curator', '2019-12-06 12:15:00'),
       (1001, 1000, 1005, 'Configuration for purification 2', 'canano_curator', '2019-12-06 12:15:00'),
       (1002, 1001, 28278786, 'Coulter configuration', 'canano_curator', '2019-12-06 12:15:00'),
       (1005, 1005, 1005, NULL, 'canano_curator', '2019-08-28 00:00:00'),
       (1111, 1111, 1111, 'Configuration for synthesis purification', 'canano_curator', '2019-12-06 12:15:00'),
       (1222, 1222, 1222, NULL, 'canano_curator', '2019-08-28 00:00:00');

--
-- Dumping data for table `purification_config_instrument`
--

INSERT IGNORE INTO `purification_config_instrument` (`purification_config_pk_id`, `instrument_pk_id`)
VALUES (1000, 13500436),
       (1005, 13500430),
       (1111, 13500419),
       (1222, 11304972),
       (1002, 28475412),
       (1001, 44793856),
       (1001, 62914561);
       
--
-- Dumping data for table `synthesis_purity`
--


INSERT IGNORE INTO `synthesis_purity` (`purity_pk_id`, `synthesis_purification_pk_id`, `created_by`, `created_date`)
VALUES (1000, 1000, 'canano_curator', '2019-12-06 12:15:00'),
       (1005, 1005, 'canano_curator', '2019-08-28 00:00:00'),
       (1111, 1111, 'canano_curator', '2019-12-06 12:15:00'),
       (1222, 1222, 'canano_curator', '2019-08-28 00:00:00');

--
-- Dumping data for table `purity_file`
--


INSERT IGNORE INTO `purity_file` (`purity_pk_id`, `file_pk_id`)
VALUES (1005, 1333);


--
-- Dumping data for table `purity_datum`
--

INSERT IGNORE INTO `purity_datum` (`purity_datum_pk_id`, `name`, `value`, `value_type`, `value_unit`, `created_by`,
                                   `created_date`, `numberMod`, `purity_pk_id`, `column_pk_id`)
VALUES (1000, 'Purity datum 1', 55.00, 'purity', '%', 'canano_curator', '2019-12-06 12:15:00', '=', 1000, 1010),
       (1111, 'Purity datum 2', 123.00, 'purity', '%', 'canano_curator', '2019-12-06 12:15:00', '=', 1111,1010);



--
-- Dumping data for table `purity_datum_condition`
--


INSERT IGNORE INTO `purity_datum_condition` (`purity_datum_pk_id`, `condition_pk_id`, `name`, `property`, `value`,
                                             `value_unit`, `value_type`, `created_by`, `created_date`,`column_pk_id`)
VALUES (1000, 1000, 'Synthesis condition 1', NULL, '42', 'g', 'observed', 'canano_user', '2019-12-06 12:15:00',2000),
       (1111, 1111, 'datum_test', NULL, '84', 'mg', 'observed', 'canano_curator', '2019-12-06 12:15:00',2000);

