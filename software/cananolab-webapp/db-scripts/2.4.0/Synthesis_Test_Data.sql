/*
This script is for adding Synthesis data to existing samples.
You will need to pick two samples and grab the sample Id for each
Then replace the <sample_pk_id1> and <sample_pk_id2> with those ids*/
INSERT INTO `canano`.`synthesis`
(`synthesis_pk_id`, `sample_pk_id`)
VALUES
(1111, <sample_pk_id1>),
(1222, <sample_pk_id2>);


INSERT INTO `canano`.`file`
(`file_pk_id`,
 `file_name`,
 `file_uri`,
 `file_extension`,
 `created_by`,
 `created_date`,
 `title`,
 `description`,
 `comments`,
 `file_type`,
 `is_uri_external`)
VALUES
('1111',
 'NCIt_CTCAE_5.0',
 'https://evs.nci.nih.gov/ftp1/CTCAE/CTCAE_5.0/NCIt_CTCAE_5.0.xlsx',
 'xlsx',
 'canano_curator',
 '2019-12-06 12:15:00',
 'Synthesis File',
 'dummy row for testing of synthesis',
 null,
 'Excel',
 0),
('1222',
 'NCIt_CTCAE_5.0',
 'https://evs.nci.nih.gov/ftp1/CTCAE/CTCAE_5.0/NCIt_CTCAE_5.0.xlsx',
 'xlsx',
 'canano_curator',
 '2019-08-28 00:00:00',
 'Synthesis File',
 'Sample 2 test file',
 null,
 'Excel',
 0);

INSERT INTO `canano`.`protocol`
(`protocol_pk_id`,
 `protocol_name`,
 `protocol_type`,
 `created_by`,
 `created_date`,
 `protocol_abbreviation`,
 `protocol_version`,
 `file_pk_id`)
VALUES
('1111',
 'Synthesis test protocol',
 'synthesis',
 'canano_curator',
 '2019-12-06 12:15:00',
 'SYN',
 '1.0',
 1111),
('1222',
 'Synthesis demo protocol',
 'synthesis purification',
 'canano_curator',
 '2019-08-28 00:00:00',
 'SYN',
 '1.0',
 1222);



/* Synthesis Material */

INSERT INTO `canano`.`supplier`
(`supplier_pk_id`,
 `supplier_name`,
 `lot`)
VALUES
(1111,
 'Synthesis supplier',
 'ABC123xyz');


INSERT INTO `canano`.`synthesis_material`
(`synthesis_material_pk_id`,
 `synthesis_pk_id`,
 `protocol_pk_id`,
 `description`,
 `created_date`,
 `created_by`)
VALUES
(1111,
 1111,
 1111,
 'Synthesis test sample 1',
 '2019-12-06 12:15:00',
 'canano_curator'),
(1222,
 1222,
 null,
 'Chloroauric acid solution (200 ml of 0.01wt.%) was heated to a rolling boil and refluxed in a 500-ml-round-bottom flask using a temperature-controlled hot plate with continuous stirring [4]. A 4.5-ml aliquot of 1 wt.% sodium citrate solution was then added to the boiling chloroauric acid solution, and the heating was continued under reflux for 15 min to enable complete reaction. The solution was then allowed to cool to room temperature with continuous stirring yielding citrate-capped AuNPs.',
 '2019-08-28 00:00:00',
 'canano_curator');

INSERT INTO `canano`.`synthesis_material_element`
(`synthesis_material_element_pk_id`,
 `synthesis_material_pk_id`,
 `molecular_formula`,
 `molecular_formula_type`,
 `description`,
 `created_by`,
 `created_date`,
 `chemical_name`,
 `value`,
 `value_unit`,
 `pub_chem_datasource_name`,
 `pub_chem_id`,
 `supplier_pk_id`,
 `type`)
VALUES
(1111,
 1111,
 'AA-2x-zZ',
 'Hill',
 'Synthesis Material Element 1',
 'canano_curator',
 '2019-12-06 12:15:00',
 'Synthesis Chemical 1',
 '12',
 'mg',
 null,
 null,
 1111,
 'reagent'),
(1051,
 1222,
 'HAuCl4 . 3H2O',
 'Hill',
 '200 mL of 0.01 wt% gold precursor',
 'canano_curator',
 '2019-08-28 00:00:00',
 'chloroauric acid',
 '0.01',
 '%wt',
 'Compound',
 '44134746',
 null,
 'composing element'),
(1052,
 1222,
 'C6H5Na3O7',
 'Hill',
 '4.5 mL of 1 wt% sodium citrate solution',
 'canano_curator',
 '2019-08-28 00:00:00',
 'sodium citrate',
 '1',
 '%wt',
 'Compound',
 '6224',
 1111,
 'reagent'),
(1053,
 1222,
 'H2O',
 'Hill',
 'Solutions of chloroauric acid and sodium citrate were created with deionized water',
 'canano_curator',
 '2019-08-28 00:00:00',
 'deionized water',
 '204.5',
 'mL',
 'substance',
 '962',
 null,
 'solvent');

INSERT INTO `canano`.`sme_inherent_function`
(`sme_inherent_function_pk_id`,
 `synthesis_material_element_pk_id`,
 `type`,
 `description`)
VALUES
(1111,
 1111,
 'targeting function',
 'should this pull from same drop down as regular inherent function?'),
(1222,
 1053,
 'Function Type',
 'SME Function description'),
(1006,
 1053,
 'Function Type 2',
 'SME Function description 2');

/* Synthesis Functionalization */

INSERT INTO `canano`.`synthesis_functionalization`
(`synthesis_functionalization_pk_id`,
 `synthesis_pk_id`,
 `protocol_pk_id`,
 `description`,
 `created_date`,
 `created_by`)
VALUES
(1111,
 1111,
 1111,
 'Synthesis Functionalization Test 1',
 '2019-12-06 12:15:00',
 'canano_curator'),
(1222,
 1222,
 null,
 'In order to produce PEG-capped AuNPs, various concentrations (3.6, 8.4, 16.8 and 25.2 ug per ml of as synthesized AuNP suspension) of 5,000 Mw PEG were added to the ‘as synthesized’ AuNP solutions at room temperature. After the required amount of PEG was added, the solution was stirred at room temperature for 2 h to allow for complete exchange of the citrate molecules with PEG.',
 '2019-08-29 00:00:00',
 'canano_curator');


INSERT INTO `canano`.`synthesis_functionalization_element`
(`synthesis_functionalization_element_pk_id`,
 `synthesis_functionalization_pk_id`,
 `molecular_formula`,
 `molecular_formula_type`,
 `description`,
 `created_by`,
 `created_date`,
 `chemical_name`,
 `value`,
 `value_unit`,
 `pub_chem_datasource_name`,
 `pub_chem_id`,
 `type`)
VALUES
(1111,
 1111,
 'kK-N12-C4-L',
 'Hill',
 'Synthesis Functionalization Material Element 1',
 'canano_curator',
 '2019-12-06 12:15:00',
 'SynFuncMat Element1',
 '84',
 'pg',
 null,
 null,
 'material'),
(1222,
 1222,
 'CH3(OCH2CH2)nOH',
 'Hill',
 'Added to the as-synthesized AuNP solution to a concentration of 3.6 ug/mL',
 'canano_curator',
 '2019-08-28 00:00:00',
 'polyethylene glycol, 5000 MW',
 '3.6',
 'ug',
 'Compound',
 '24887753',
 'material');


INSERT INTO `canano`.`sfe_inherent_function`
(`sfe_inherent_function_pk_id`,
 `synthesis_functionalization_element_pk_id`,
 `type`,
 `description`)
VALUES
(1111,
 1111,
 'biocompatibility',
 'Synthesis Functionalization Material Inherent Function 1'),
(1222,
 1222,
 'biocompatibility',
 '');

/* Synthesis Purity */

INSERT INTO `canano`.`technique`
(`technique_pk_id`,
 `type`,
 `abbreviation`,
 `created_date`,
 `created_by`)
VALUES
(1111,
 'Interim purification technique',
 'InP',
 '2019-12-06 12:15:00',
 'canano_curator'),
(1222,
 'centrifugal filtration',
 null,
 '2018-08-28 00:00:00',
 'canano_curator');

INSERT INTO `canano`.`instrument`
(`instrument_pk_id`,
 `type`,
 `manufacturer`,
 `model_name`,
 `created_date`,
 `created_by`)
VALUES
(1111,
 'scale',
 'Biome',
 'Test Scale',
 '2019-12-06 12:15:00',
 'canano_curator'),
(1222,
 'centrifuge',
 'Heraeus',
 'Contifuge 17RS',
 '2019-08-28 00:00:00',
 'canano_curator');

INSERT INTO `canano`.`experiment_condition`
(`condition_pk_id`,
 `name`,
 `property`,
 `value`,
 `value_unit`,
 `value_type`,
 `created_by`,
 `created_date`)
VALUES
(1111,
 'Synthesis condition 1',
 '',
 '42',
 'g',
 'observed',
 'canano_user',
 '2019-12-06 12:15:00');


INSERT INTO `canano`.`synthesis_purification`
(`synthesis_purification_pk_id`,
 `synthesis_pk_id`,
 `protocol_pk_id`,
 `type`,
 `method_name`,
 `design_method_description`,
 `created_by`,
 `created_date`,
 `yield`)
VALUES
(1111,
 1111,
 1111,
 'Interim Purification',
 'Synthesis Purification Method 1',
 'Test entry for synthesis purification',
 'canano_user',
 '2019-12-06 12:15:00',
 '84.7'),
(1222,
 1222,
 1222,
 'Interim Purification',
 'Synthesis Purification Method 1',
 'The AuNP solutions were then centrifuged using a Contifuge 17RS, Heraeus SEPATECH at 10,000 rpm for 90 min in 10 ml batches [28]. Of the supernatant, 9.9 ml was then decanted, leaving the AuNP pellet at the bottom of the centrifuge tube. The volume was then made back up to 10 ml by adding 9.9 ml of DI water and agitated. This centrifugal washing process was repeated again to remove any unattached PEG or other reactants.',
 'canano_user',
 '2019-08-28 00:00:00',
 null);


INSERT INTO `canano`.`purification_config`
(`purification_config_pk_id`,
 `synthesis_purification_pk_id`,
 `technique_pk_id`,
 `description`,
 `created_by`,
 `created_date`)
VALUES
(1111,
 1111,
 1111,
 'Configuration for synthesis purification',
 'canano_curator',
 '2019-12-06 12:15:00'),
(1222,
 1222,
 1222,
 null,
 'canano_curator',
 '2019-08-28 00:00:00');

INSERT INTO `canano`.`purification_config_instrument`
(`purification_config_pk_id`,
 `instrument_pk_id`)
VALUES
(1111,
 1111),
(1222,
 1222);

INSERT INTO `canano`.`synthesis_purity`
(`purity_pk_id`,
 `synthesis_purification_pk_id`,
 `created_by`,
 `created_date`)
VALUES
(1111,
 1111,
 'canano_curator',
 '2019-12-06 12:15:00'),
(1222,
 1222,
 'canano_curator',
 '2019-08-28 00:00:00');

INSERT INTO `canano`.`purity_datum`
(`purity_datum_pk_id`,
 `name`,
 `value`,
 `value_type`,
 `value_unit`,
 `created_by`,
 `created_date`,
 `numberMod`,
 `purity_pk_id`,
 `file_pk_id`)
VALUES
(1111,
 'Purity datum 1',
 '55',
 'purity',
 '%',
 'canano_curator',
 '2019-12-06 12:15:00',
 '=',
 1111,
 1111);


INSERT INTO `canano`.`purity_datum_condition`
(`datum_pk_id`,
 `condition_pk_id`,
 `name`,
 `property`,
  `value`,
  `value_unit`,
  `value_type`,
  `created_by`,
  `created_date`)
VALUES
(1111,
 1111,
 'datum_test',
  null,
  '84',
  'mg',
  'observed',
  'canano_curator',
 '2019-12-06 12:15:00');