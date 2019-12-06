/* OPTIONAL update password to canano_curator
UPDATE `canano`.`users`
SET
    `password` = '$2a$10$mdeGI13IlA6V9p6BtIiKw.kciBTLCY37Y58GFzkWK7TN3BWEYGuDe'
WHERE `username` = 'canano_curator';
*/

insert into `canano`.`organization`
(`organization_pk_id`,`name`,`created_date`,`created_by`)
VALUES
('1005','Synthesis demo organization','2019-12-06 12:15:00','canano_curator');

insert into `canano`.`point_of_contact`
(`poc_pk_id`,`role`,`first_name`,`last_name`,`created_date`,`created_by`,`organization_pk_id`)
VALUES
('1005','investigator','canano','curator','2019-12-06 12:15:00','canano_curator','1005');

insert into `canano`.`sample`
(canano.sample.`sample_pk_id`,canano.sample.`sample_name`,canano.sample.`created_date`,canano.sample.`created_by`,canano.sample.`primary_contact_pk_id`)
VALUES
('1005','Synthesis Demo Sample','2019-12-06 12:15:00','canano_curator','1005');



/* Important - replace <sample_pk_id> with a valid sample id */
INSERT INTO `canano`.`synthesis`
    (`synthesis_pk_id`, `sample_pk_id`)
VALUES (1005, 1005);

#
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
('1005',
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
#
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
('1005',
    'Synthesis demo protocol',
    'synthesis purification',
    'canano_curator',
    '2019-08-28 00:00:00',
    'SYN',
    '1.0',
    1005);
#
#
#
# /* Synthesis Material */
#
# INSERT INTO `canano`.`supplier`
# (`supplier_pk_id`,
#  `supplier_name`,
#  `lot`)
# VALUES
# (1000,
#     'Synthesis supplier',
#     'ABC123xyz');


INSERT INTO `canano`.`synthesis_material`
(`synthesis_material_pk_id`,
 `synthesis_pk_id`,
 `protocol_pk_id`,
 `description`,
 `created_date`,
 `created_by`)
VALUES (1005,
        1005,
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
VALUES (1051,
        1005,
        'HAuCl4 . 3H2O',
        'Hill',
        '200 mL of 0.01 wt% gold precursor',
        'canano_curator',
        '2019-08-28 00:00:00',
        'chloroauric acid',
        '0.01',
        '%wt',
        'compound',
        '44134746',
        null,
        'composing element'),
       (1052,
        1005,
        'C6H5Na3O7',
        'Hill',
        '4.5 mL of 1 wt% sodium citrate solution',
        'canano_curator',
        '2019-08-28 00:00:00',
        'sodium citrate',
        '1',
        '%wt',
        'compound',
        '6224',
        null,
        'reagent'),
       (1053,
        1005,
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
VALUES (1005,
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
VALUES (1005,
        1005,
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
VALUES (1005,
        1005,
        'CH3(OCH2CH2)nOH',
        'Hill',
        'Added to the as-synthesized AuNP solution to a concentration of 3.6 ug/mL',
        'canano_curator',
        '2019-08-28 00:00:00',
        'polyethylene glycol, 5000 MW',
        '3.6',
        'ug',
        'compound',
        '24887753',
        'material');


INSERT INTO `canano`.`sfe_inherent_function`
(`sfe_inherent_function_pk_id`,
 `synthesis_functionalization_element_pk_id`,
 `type`,
 `description`)
VALUES (1005,
        1005,
        'biocompatibility',
        '');

/* Synthesis Purity */
#
INSERT INTO `canano`.`technique`
(`technique_pk_id`,
 `type`,
 `abbreviation`,
 `created_date`,
 `created_by`)
VALUES (1005,
        'centrifugal filtration',
        null,
        '2018-08-28 00:00:00',
        'safrant');

INSERT INTO `canano`.`instrument`
(`instrument_pk_id`,
 `type`,
 `manufacturer`,
 `model_name`,
 `created_date`,
 `created_by`)
VALUES (1005,
        'centrifuge',
        'Heraeus',
        'Contifuge 17RS',
        '2019-08-28 00:00:00',
        'canano_curator');
#
# INSERT INTO `canano`.`experiment_condition`
# (`condition_pk_id`,
#  `name`,
#  `property`,
#  `value`,
#  `value_unit`,
#  `value_type`,
#  `created_by`,
#  `created_date`)
# VALUES (1000,
#         'Synthesis condition 1',
#         '',
#         '42',
#         'g',
#         'observed',
#         'canano_user',
#         '2019-08-28 00:00:00');


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
VALUES (1005,
        1005,
        1005,
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
VALUES (1005,
        1005,
        1005,
        null,
        'canano_curator',
        '2019-08-28 00:00:00');

INSERT INTO `canano`.`purification_config_instrument`
(`purification_config_pk_id`,
 `instrument_pk_id`)
VALUES (1005,
        1005);

INSERT INTO `canano`.`synthesis_purity`
(`purity_pk_id`,
 `synthesis_purification_pk_id`,
 `created_by`,
 `created_date`)
VALUES (1005,
        1005,
        'canano_curator',
        '2019-08-28 00:00:00');
