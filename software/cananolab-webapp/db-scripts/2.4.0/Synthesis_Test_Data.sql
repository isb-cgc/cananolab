/* OPTIONAL update password to canano_curator
UPDATE `canano`.`users`
SET
    `password` = '$2a$10$mdeGI13IlA6V9p6BtIiKw.kciBTLCY37Y58GFzkWK7TN3BWEYGuDe'
WHERE `username` = 'canano_curator';
*/

/* Important - replace <sample_pk_id> with a valid sample id */
INSERT INTO `canano`.`synthesis`
(`synthesis_pk_id`,
 `sample_pk_id`)
VALUES
(1000,
    <sample_pk_id>);


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
('1000',
    'NCIt_CTCAE_5.0',
    'https://evs.nci.nih.gov/ftp1/CTCAE/CTCAE_5.0/NCIt_CTCAE_5.0.xlsx',
    'xlsx',
    'canano_curator',
    '2019-08-28 00:00:00',
    'Synthesis File',
    'dummy row for testing of synthesis',
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
('1000',
    'Synthesis test protocol',
    'synthesis',
    'canano_curator',
    '2019-08-28 00:00:00',
    'SYN',
    '1.0',
    1000);



/* Synthesis Material */

INSERT INTO `canano`.`supplier`
(`supplier_pk_id`,
 `supplier_name`,
 `lot`)
VALUES
(1000,
    'Synthesis supplier',
    'ABC123xyz');


INSERT INTO `canano`.`synthesis_material`
(`synthesis_material_pk_id`,
 `synthesis_pk_id`,
 `protocol_pk_id`,
 `description`,
 `created_date`,
 `created_by`,
 `type`)
VALUES
(1000,
    1000,
    1000,
    'Synthesis test sample 1',
    '2019-08-28 00:00:00',
    'canano_curator',
    'reagent');

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
 `supplier_pk_id`)
VALUES
(1000,
    1000,
    'AA-2x-zZ',
    'Hill',
    'Synthesis Material Element 1',
    'canano_curator',
    '2019-08-28 00:00:00',
    'Synthesis Chemical 1',
    '12',
    'mg',
    null,
    null,
    1000);

INSERT INTO `canano`.`sme_inherent_function`
(`sme_inherent_function_pk_id`,
 `synthesis_material_element_pk_id`,
 `type`,
 `description`)
VALUES
(1000,
    1000,
    'targeting function',
    'should this pull from same drop down as regular inherent function?');

/* Synthesis Functionalization */

INSERT INTO `canano`.`synthesis_functionalization`
(`synthesis_functionalization_pk_id`,
 `synthesis_pk_id`,
 `protocol_pk_id`,
 `description`,
 `created_date`,
 `created_by`,
 `type`)
VALUES
(1000,
    1000,
    1000,
    'Synthesis Functionalization Test 1',
    '2019-08-29 00:00:00',
    'canano_curator',
    'material');


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
(1000,
    1000,
    'kK-N12-C4-L',
    'Hill',
    'Synthesis Functionalization Material Element 1',
    'canano_curator',
    '2019-08-28 00:00:00',
    'SynFuncMat Element1',
    '84',
    'pg',
    null,
    null,
    'material');


INSERT INTO `canano`.`sfe_inherent_function`
(`sfe_inherent_function_pk_id`,
 `synthesis_functionalization_element_pk_id`,
 `type`,
 `description`)
VALUES
(1000,
    1000,
    'biocompatibility',
    'Synthesis Functionalization Material Inherent Function 1');

/* Synthesis Purity */

INSERT INTO `canano`.`technique`
(`technique_pk_id`,
 `type`,
 `abbreviation`,
 `created_date`,
 `created_by`)
VALUES
(1000,
    'Interim purification technique',
    'InP',
    '2018-08-28 00:00:00',
    'safrant');

INSERT INTO `canano`.`instrument`
(`instrument_pk_id`,
 `type`,
 `manufacturer`,
 `model_name`,
 `created_date`,
 `created_by`)
VALUES
(1000,
    'scale',
    'Biome',
    'Test Scale',
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
(1000,
    'Synthesis condition 1',
    '',
    '42',
    'g',
    'observed',
    'canano_user',
    '2019-08-28 00:00:00');


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
(1000,
    1000,
    1000,
    'Interim Purification',
    'Synthesis Purification Method 1',
    'Test entry for synthesis purification',
    'canano_user',
    '2019-08-28 00:00:00',
    '84.7');


INSERT INTO `canano`.`purification_config`
(`purification_config_pk_id`,
 `synthesis_purification_pk_id`,
 `technique_pk_id`,
 `description`,
 `created_by`,
 `created_date`)
VALUES
(1000,
    1000,
    1000,
    'Configuration for synthesis purification',
    'canano_curator',
    '2019-08-28 00:00:00');

INSERT INTO `canano`.`purification_config_instrument`
(`purification_config_pk_id`,
 `instrument_pk_id`)
VALUES
(1000,
    1000);

INSERT INTO `canano`.`synthesis_purity`
(`purity_pk_id`,
 `synthesis_purification_pk_id`,
 `created_by`,
 `created_date`)
VALUES
(1000,
    1000,
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
(1000,
    'Purity datum 1',
    '55',
    'purity',
    '%',
    'canano_curator',
    '2019-08-28 00:00:00',
    '=',
    1000,
    1000);


INSERT INTO `canano`.`purity_datum_condition`
(`datum_pk_id`,
 `condition_pk_id`)
VALUES
(1000,
    1000);