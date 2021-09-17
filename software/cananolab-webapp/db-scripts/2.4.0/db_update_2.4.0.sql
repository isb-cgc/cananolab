/*
 This script is for updating the current production database version 2.3.x
   to the structure needed to support 2.4.0
 */


drop table if exists csm_role_privilege;
drop table if exists csm_user_group;
drop table if exists csm_user_group_role_pg;
drop table if exists csm_user_pe;
drop table if exists csm_pg_pe;
drop table if exists csm_privilege;
drop table if exists csm_role;
drop table if exists csm_group;
drop table if exists csm_mapping;
drop table if exists csm_protection_element;
drop table if exists csm_protection_group;
drop table if exists csm_user;
drop table if exists csm_application;
drop table if exists csm_configuration_props;
drop table if exists csm_filter_clause;
drop table if exists csm_password_history;

drop table if exists synthesis_func_purification;
drop table if exists purity_file;
drop table if exists purity_datum_condition;
drop table if exists purity_column_header;
drop table if exists purity_datum;
drop table if exists synthesis_file;
drop table if exists synthesis_material_file;
drop table if exists synthesis_functionalization_file;
drop table if exists purification_config_instrument;
drop table if exists purification_config;
drop table if exists synthesis_purity;
drop table if exists synthesis_material_element_file;
drop table if exists sme_inherent_function;
drop table if exists purification_file;
drop table if exists synthesis_purification;
drop table if exists synthesis_material_element;
drop table if exists synthesis_material;
drop table if exists synthesis_materials;
drop table if exists sfe_inherent_function;
drop table if exists synthesis_functionalization_element_file;
drop table IF exists synthesis_functionalization_element;
drop table if exists synthesis_functionalization;
drop table if exists synthesis;
drop table if exists supplier;

alter table `canano`.`chemical_association`
    drop foreign key `fk_ca_entry_comp`;

alter table `canano`.`chemical_association`
    add constraint `fk_ca_entry_comp`
        foreign key (`composition_pk_id`)
            references `canano`.`composition` (`composition_pk_id`) on delete cascade;

insert into acl_class
(id,class)
VALUES (18, 'gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisBean');


#Pending due to mismatched data
# alter table `canano`.`nanomaterial_entity`
#     add constraint `fk_ne_entry_comp`
#         foreign key (`composition_pk_id`)
#             references `canano`.`composition` (`composition_pk_id`) on delete cascade;
#
# alter table `canano`.`functionalizing_entity`
#     add constraint `fk_fe_entry_comp`
#         foreign key (`composition_pk_id`)
#             references `canano`.`composition` (`composition_pk_id`) on delete cascade;


alter table `canano`.`acl_entry`
    drop foreign key `fk_acl_entry_acl`;

alter table `canano`.`acl_entry`
    add constraint `fk_acl_entry_acl`
        foreign key (`sid`)
            references `canano`.`acl_sid` (`id`) on delete cascade;


-- synthesis

CREATE TABLE `synthesis`
(
    `synthesis_pk_id` bigint(20) NOT NULL COMMENT 'synthesis_pk_id',
    `sample_pk_id`    bigint(20) NOT NULL COMMENT 'sample_pk_id',
    PRIMARY KEY (`synthesis_pk_id`),
    KEY `FK_sample_TO_synthesis` (`sample_pk_id`),
    CONSTRAINT `FK_sample_TO_synthesis` FOREIGN KEY (`sample_pk_id`) REFERENCES `sample` (`sample_pk_id`)
);


-- synthesis_material

CREATE TABLE `synthesis_material`
(
    `synthesis_material_pk_id` bigint(20)   NOT NULL COMMENT 'synthesis_material_pk_id',
    `synthesis_pk_id`          bigint(20)   NOT NULL COMMENT 'synthesis_pk_id',
    `protocol_pk_id`           bigint(20) DEFAULT NULL COMMENT 'protocol_pk_id',
    `description`              text         NOT NULL COMMENT 'description',
    `created_date`             datetime     NOT NULL COMMENT 'created_date',
    `created_by`               varchar(200) NOT NULL COMMENT 'created_by',
    PRIMARY KEY (`synthesis_material_pk_id`),
    KEY `FK_synthesis_TO_synthesis_material` (`synthesis_pk_id`),
    KEY `FK_protocol_TO_synthesis_material` (`protocol_pk_id`),
    CONSTRAINT `FK_protocol_TO_synthesis_material` FOREIGN KEY (`protocol_pk_id`) REFERENCES `protocol` (`protocol_pk_id`),
    CONSTRAINT `FK_synthesis_TO_synthesis_material` FOREIGN KEY (`synthesis_pk_id`) REFERENCES `synthesis` (`synthesis_pk_id`)
);

-- synthesis_material_file
CREATE TABLE `synthesis_material_file`
(
    `synthesis_material_pk_id` bigint(20) NOT NULL COMMENT 'synthesis_material_pk_id',
    `file_pk_id`               bigint(20) NOT NULL COMMENT 'file_pk_id',
    PRIMARY KEY (`synthesis_material_pk_id`, `file_pk_id`),
    KEY `FK_file_TO_synthesis_material_file` (`file_pk_id`),
    CONSTRAINT `FK_file_TO_synthesis_material_file` FOREIGN KEY (`file_pk_id`) REFERENCES `file` (`file_pk_id`),
    CONSTRAINT `FK_synthesis_material_TO_synthesis_material_file` FOREIGN KEY (`synthesis_material_pk_id`) REFERENCES `synthesis_material` (`synthesis_material_pk_id`)
);

-- supplier

CREATE TABLE `supplier`
(
    `supplier_pk_id` bigint(20)   NOT NULL COMMENT 'supplier_pk_id',
    `supplier_name`  varchar(200) NOT NULL COMMENT 'supplier_name',
    `lot`            varchar(50) DEFAULT NULL COMMENT 'lot',
    PRIMARY KEY (`supplier_pk_id`)
);

-- synthesis_material_element

CREATE TABLE `synthesis_material_element`
(
    `synthesis_material_element_pk_id` bigint(20)   NOT NULL COMMENT 'synthesis_material_element_pk_id',
    `synthesis_material_pk_id`         bigint(20)   NOT NULL COMMENT 'synthesis_material_pk_id',
    `molecular_formula`                varchar(2000)  DEFAULT NULL COMMENT 'molecular_formula',
    `molecular_formula_type`           varchar(200)   DEFAULT NULL COMMENT 'molecular_formula_type',
    `description`                      text COMMENT 'description',
    `created_by`                       varchar(200) NOT NULL COMMENT 'created_by',
    `created_date`                     datetime     NOT NULL COMMENT 'created_date',
    `chemical_name`                    varchar(200) NOT NULL COMMENT 'chemical_name',
    `value`                            decimal(22, 3) DEFAULT NULL COMMENT 'value',
    `value_unit`                       varchar(200)   DEFAULT NULL COMMENT 'value_unit',
    `pub_chem_datasource_name`         varchar(200)   DEFAULT NULL COMMENT 'pub_chem_datasource_name',
    `pub_chem_id`                      bigint(20)     DEFAULT NULL COMMENT 'pub_chem_id',
    `supplier_pk_id`                   bigint(20)     DEFAULT NULL COMMENT 'supplier_pk_id',
    `type`                             varchar(200) NOT NULL,
    PRIMARY KEY (`synthesis_material_element_pk_id`),
    KEY `FK_synthesis_material_TO_synthesis_material_element` (`synthesis_material_pk_id`),
    KEY `FK_synthesis_material_element_TO_supplier` (`supplier_pk_id`),
    CONSTRAINT `FK_synthesis_material_TO_synthesis_material_element` FOREIGN KEY (`synthesis_material_pk_id`) REFERENCES `synthesis_material` (`synthesis_material_pk_id`),
    CONSTRAINT `FK_synthesis_material_element_TO_supplier` FOREIGN KEY (`supplier_pk_id`) REFERENCES `supplier` (`supplier_pk_id`)
);

-- synthesis_functionalization

CREATE TABLE `synthesis_functionalization`
(
    `synthesis_functionalization_pk_id` bigint(20)   NOT NULL COMMENT 'synthesis_functionalization_pk_id',
    `synthesis_pk_id`                   bigint(20) DEFAULT NULL COMMENT 'synthesis_pk_id',
    `protocol_pk_id`                    bigint(20) DEFAULT NULL COMMENT 'protocol_pk_id',
    `description`                       text COMMENT 'description',
    `created_date`                      datetime     NOT NULL COMMENT 'created_date',
    `created_by`                        varchar(200) NOT NULL COMMENT 'created_by',
    PRIMARY KEY (`synthesis_functionalization_pk_id`),
    KEY `FK_synthesis_TO_synthesis_functionalization` (`synthesis_pk_id`),
    KEY `FK_protocol_TO_synthesis_functionalization` (`protocol_pk_id`),
    CONSTRAINT `FK_protocol_TO_synthesis_functionalization` FOREIGN KEY (`protocol_pk_id`) REFERENCES `protocol` (`protocol_pk_id`),
    CONSTRAINT `FK_synthesis_TO_synthesis_functionalization` FOREIGN KEY (`synthesis_pk_id`) REFERENCES `synthesis` (`synthesis_pk_id`)
);

-- synthesis_functionalization_file
CREATE TABLE `synthesis_functionalization_file`
(
    `synthesis_functionalization_pk_id` bigint(20) NOT NULL COMMENT 'synthesis_material_pk_id',
    `file_pk_id`                        bigint(20) NOT NULL COMMENT 'file_pk_id',
    PRIMARY KEY (`synthesis_functionalization_pk_id`, `file_pk_id`),
    KEY `FK_file_TO_synthesis_file` (`file_pk_id`),
    CONSTRAINT `FK_file_TO_synthesis_file` FOREIGN KEY (`file_pk_id`) REFERENCES `file` (`file_pk_id`),
    CONSTRAINT `FK_syn_func_TO_syn_func_file` FOREIGN KEY (`synthesis_functionalization_pk_id`) REFERENCES `synthesis_functionalization` (`synthesis_functionalization_pk_id`)
);

-- synthesis_purification

CREATE TABLE `synthesis_purification`
(
    `synthesis_purification_pk_id` bigint(20)   NOT NULL COMMENT 'synthesis_purification_pk_id',
    `synthesis_pk_id`              bigint(20)     DEFAULT NULL COMMENT 'synthesis_pk_id',
    `protocol_pk_id`               bigint(20)     DEFAULT NULL COMMENT 'protocol_pk_id',
    `type`                         varchar(200)   DEFAULT NULL COMMENT 'type',
    `method_name`                  varchar(200)   DEFAULT NULL COMMENT 'method_name',
    `design_method_description`    text COMMENT 'design_method_description',
    `created_by`                   varchar(200) NOT NULL COMMENT 'created_by',
    `created_date`                 datetime     NOT NULL COMMENT 'created_date',
    `yield`                        decimal(30, 3) DEFAULT NULL COMMENT 'yield',
    `analysis`                     text,
    PRIMARY KEY (`synthesis_purification_pk_id`),
    KEY `FK_synthesis_TO_synthesis_purification` (`synthesis_pk_id`),
    KEY `FK_protocol_TO_synthesis_purification` (`protocol_pk_id`),
    CONSTRAINT `FK_protocol_TO_synthesis_purification` FOREIGN KEY (`protocol_pk_id`) REFERENCES `protocol` (`protocol_pk_id`),
    CONSTRAINT `FK_synthesis_TO_synthesis_purification` FOREIGN KEY (`synthesis_pk_id`) REFERENCES `synthesis` (`synthesis_pk_id`)
);


-- synthesis_functionalization_element

CREATE TABLE `synthesis_functionalization_element`
(
    `synthesis_functionalization_element_pk_id` bigint(20)   NOT NULL COMMENT 'synthesis_functionalization_element_pk_id',
    `synthesis_functionalization_pk_id`         bigint(20)   NOT NULL COMMENT 'synthesis_functionalization_pk_id',
    `molecular_formula`                         varchar(2000)  DEFAULT NULL COMMENT 'molecular_formula',
    `molecular_formula_type`                    varchar(200)   DEFAULT NULL COMMENT 'molecular_formula_type',
    `description`                               text COMMENT 'description',
    `created_by`                                varchar(200) NOT NULL COMMENT 'created_by',
    `created_date`                              datetime     NOT NULL COMMENT 'created_date',
    `chemical_name`                             varchar(200)   DEFAULT NULL COMMENT 'chemical_name',
    `value`                                     decimal(22, 3) DEFAULT NULL COMMENT 'value',
    `value_unit`                                varchar(200)   DEFAULT NULL COMMENT 'value_unit',
    `pub_chem_datasource_name`                  varchar(200)   DEFAULT NULL COMMENT 'pub_chem_datasource_name',
    `pub_chem_id`                               bigint(20)     DEFAULT NULL COMMENT 'pub_chem_id',
    `type`                                      varchar(200)   DEFAULT NULL COMMENT 'type',
    `activation_method`                         varchar(200)   DEFAULT NULL,
    `activation_effect`                         text,
    PRIMARY KEY (`synthesis_functionalization_element_pk_id`),
    CONSTRAINT `FK_synthesis_funct_TO_synthesis_functionalization_element` FOREIGN KEY (`synthesis_functionalization_pk_id`)
        REFERENCES `synthesis_functionalization` (`synthesis_functionalization_pk_id`)
);

-- sme_inherent_function

CREATE TABLE `sme_inherent_function`
(
    `sme_inherent_function_pk_id`      bigint(20) NOT NULL COMMENT 'sme_inherent_function_pk_id',
    `synthesis_material_element_pk_id` bigint(20) NOT NULL COMMENT 'synthesis_material_element_pk_id',
    `type`                             varchar(200) DEFAULT NULL COMMENT 'type',
    `description`                      text COMMENT 'description',
    PRIMARY KEY (`sme_inherent_function_pk_id`),
    KEY `FK_synthesis_material_element_TO_sme_inherent_function` (`synthesis_material_element_pk_id`),
    CONSTRAINT `FK_synthesis_material_element_TO_sme_inherent_function` FOREIGN KEY (`synthesis_material_element_pk_id`) REFERENCES `synthesis_material_element` (`synthesis_material_element_pk_id`)
);


-- sfe_inherent_function

CREATE TABLE `sfe_inherent_function`
(
    `sfe_inherent_function_pk_id`               bigint(20) NOT NULL COMMENT 'sfe_inherent_function_pk_id',
    `synthesis_functionalization_element_pk_id` bigint(20) NOT NULL COMMENT 'synthesis_functionalization_element_pk_id',
    `type`                                      varchar(200) DEFAULT NULL COMMENT 'type',
    `description`                               text COMMENT 'description',
    PRIMARY KEY (`sfe_inherent_function_pk_id`),
    KEY `FK_synthesis_material_element_TO_sfe_inherent_function` (`synthesis_functionalization_element_pk_id`),
    CONSTRAINT `sfe_inherent_function_ibfk_1` FOREIGN KEY (`synthesis_functionalization_element_pk_id`) REFERENCES `synthesis_functionalization_element` (`synthesis_functionalization_element_pk_id`)
);


-- synthesis_material_element_file

CREATE TABLE `synthesis_material_element_file`
(
    `synthesis_material_element_pk_id` bigint(20) NOT NULL COMMENT 'synthesis_material_element_pk_id',
    `file_pk_id`                       bigint(20) NOT NULL COMMENT 'file_pk_id',
    PRIMARY KEY (`synthesis_material_element_pk_id`, `file_pk_id`),
    KEY `FK_file_TO_synthesis_material_element_file` (`file_pk_id`),
    CONSTRAINT `FK_file_TO_synthesis_material_element_file` FOREIGN KEY (`file_pk_id`) REFERENCES `file` (`file_pk_id`),
    CONSTRAINT `FK_synthesis_material_element_TO_synthesis_material_element_file` FOREIGN KEY (`synthesis_material_element_pk_id`) REFERENCES `synthesis_material_element` (`synthesis_material_element_pk_id`)
);


-- synthesis_functionalization_element_file

CREATE TABLE `synthesis_functionalization_element_file`
(
    `synthesis_functionalization_element_pk_id` bigint(20) NOT NULL COMMENT 'synthesis_functionalization_element_file',
    `file_pk_id`                                bigint(20) NOT NULL COMMENT 'file_pk_id',
    PRIMARY KEY (`synthesis_functionalization_element_pk_id`, `file_pk_id`),
    KEY `FK_file_TO_synthesis_functionalization_element_file` (`file_pk_id`),
    CONSTRAINT `FK_file_TO_synthesis_functionalization_element_file` FOREIGN KEY (`file_pk_id`) REFERENCES `file` (`file_pk_id`),
    CONSTRAINT `FK_synthesis_func_element_TO_sfe_element_file` FOREIGN KEY (`synthesis_functionalization_element_pk_id`) REFERENCES `synthesis_functionalization_element` (`synthesis_functionalization_element_pk_id`)
);

-- synthesis_purity

CREATE TABLE `synthesis_purity`
(
    `purity_pk_id`                 bigint(200)  NOT NULL COMMENT 'purity_pk_id',
    `synthesis_purification_pk_id` bigint(20)   NOT NULL COMMENT 'synthesis_purification_pk_id',
    `created_by`                   varchar(200) NOT NULL COMMENT 'created_by',
    `created_date`                 datetime     NOT NULL COMMENT 'created_date',
    PRIMARY KEY (`purity_pk_id`),
    KEY `FK_synthesis_purity_to purification` (`synthesis_purification_pk_id`),
    CONSTRAINT `FK_synthesis_purity_to purification` FOREIGN KEY (`synthesis_purification_pk_id`) REFERENCES `synthesis_purification` (`synthesis_purification_pk_id`)
);

-- purification_file

CREATE TABLE 'purification_file'
(
    `synthesis_purification_pk_id` bigint(200) NOT NULL COMMENT 'synthesis_purification_pk_id',
    `file_pk_id`   bigint(20)  NOT NULL COMMENT 'file_pk_id',
    PRIMARY KEY (`synthesis_purification_pk_id`, `file_pk_id`),
    KEY `FK_file_TO_purification_file` (`file_pk_id`),
    CONSTRAINT `FK_file_TO_purification_file` FOREIGN KEY (`file_pk_id`) REFERENCES `file` (`file_pk_id`),
    CONSTRAINT `FK_purification_TO_purification_file` FOREIGN KEY (`synthesis_purification_pk_id`) REFERENCES `synthesis_purification` (`synthesis_purification_pk_id`)
    );

-- purity_file

CREATE TABLE `purity_file`
(
    `purity_pk_id` bigint(200) NOT NULL COMMENT 'purity_pk_id',
    `file_pk_id`   bigint(20)  NOT NULL COMMENT 'file_pk_id',
    PRIMARY KEY (`purity_pk_id`, `file_pk_id`),
    KEY `FK_file_TO_purity_file` (`file_pk_id`),
    CONSTRAINT `FK_file_TO_purity_file` FOREIGN KEY (`file_pk_id`) REFERENCES `file` (`file_pk_id`),
    CONSTRAINT `FK_purity_TO_purity_file` FOREIGN KEY (`purity_pk_id`) REFERENCES `synthesis_purity` (`purity_pk_id`)
);

-- purification_config

CREATE TABLE `purification_config`
(
    `purification_config_pk_id`    bigint(20)   NOT NULL COMMENT 'purification_config_pk_id',
    `synthesis_purification_pk_id` bigint(20) DEFAULT NULL COMMENT 'synthesis_purification_pk_id',
    `technique_pk_id`              bigint(20) DEFAULT NULL COMMENT 'technique_pk_id',
    `description`                  text COMMENT 'description',
    `created_by`                   varchar(200) NOT NULL COMMENT 'created_by',
    `created_date`                 datetime     NOT NULL COMMENT 'created_date',
    PRIMARY KEY (`purification_config_pk_id`),
    KEY `FK_synthesis_purification_TO_purification_config` (`synthesis_purification_pk_id`),
    KEY `FK_technique_TO_purification_config_idx` (`technique_pk_id`),
    CONSTRAINT `FK_synthesis_purification_TO_purification_config` FOREIGN KEY (`synthesis_purification_pk_id`) REFERENCES `synthesis_purification` (`synthesis_purification_pk_id`),
    CONSTRAINT `FK_technique_TO_purification_config` FOREIGN KEY (`technique_pk_id`) REFERENCES `technique` (`technique_pk_id`)
);

-- purification_config_instrument

CREATE TABLE `purification_config_instrument`
(
    `purification_config_pk_id` bigint(20) NOT NULL COMMENT 'purification_config_pk_id',
    `instrument_pk_id`          bigint(20) NOT NULL COMMENT 'instrument_pk_id',
    PRIMARY KEY (`purification_config_pk_id`, `instrument_pk_id`),
    KEY `FK_instrument_TO_purification_config_instrument` (`instrument_pk_id`),
    CONSTRAINT `FK_instrument_TO_purification_config_instrument` FOREIGN KEY (`instrument_pk_id`) REFERENCES `instrument` (`instrument_pk_id`),
    CONSTRAINT `FK_purification_config_TO_purification_config_instrument` FOREIGN KEY (`purification_config_pk_id`) REFERENCES `purification_config` (`purification_config_pk_id`)
);

--
-- Table structure for table `purity_column_header`
--

SET character_set_client = utf8;
CREATE TABLE `purity_column_header`
(
    `column_pk_id`   bigint(20)   NOT NULL,
    `name`           varchar(200) NOT NULL,
    `property`       varchar(200)    DEFAULT NULL,
    `value_type`     varchar(200)    DEFAULT NULL,
    `value_unit`     varchar(200)    DEFAULT NULL,
    `created_by`     varchar(200) NOT NULL,
    `created_date`   datetime     NOT NULL,
    `column_order`   INT(10)      NOT NULL,
    `constant_value` varchar(200) DEFAULT NULL,
    `column_type` varchar(200) NOT NULL,
    PRIMARY KEY (`column_pk_id`)
);

-- purity_datum_condition

CREATE TABLE `purity_datum_condition`
(
    `condition_pk_id` bigint(20)   NOT NULL COMMENT 'condition_pk_id',
    `row_number` int NOT NULL COMMENT 'row number',
    `purity_pk_id`  bigint(20)  NOT NULL,
    `name`            varchar(200) NOT NULL,
    `property`        varchar(200) DEFAULT NULL,
    `value`           varchar(200) NOT NULL,
    `value_unit`      varchar(200) DEFAULT NULL,
    `value_type`      varchar(200) DEFAULT NULL,
    `created_by`      varchar(200) NOT NULL,
    `created_date`    datetime     NOT NULL,
    `numberMod`          varchar(20)  DEFAULT '=' COMMENT 'numberMod',
    `type`      varchar(20) DEFAULT NULL,
    `column_pk_id`		 bigint(20)	NOT NULL,
    PRIMARY KEY (`condition_pk_id`),
    KEY `FK_column_TO_purity_datum_condition`(`column_pk_id`),
    CONSTRAINT `FK_column_TO_purity_condition` FOREIGN KEY (`column_pk_id`) REFERENCES `purity_column_header` (`column_pk_id`),
    CONSTRAINT `FK_purity_TO_pur_datum_condition` FOREIGN KEY (`purity_pk_id`) REFERENCES `synthesis_purity` (`purity_pk_id`)
) ;


insert into common_lookup
    (common_lookup_pk_id, name, attribute, value)
VALUES (1010, 'pubchem', 'dataSource', 'Compound'),
       (1011, 'pubchem', 'dataSource', 'BioAssay'),
       (1012, 'pubchem', 'dataSource', 'Substance'),
       (1013, 'synthesis', 'purityType', 'Final Purification'),
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
       (1094, 'synthesis', 'materialType', 'reagent'),
       (1096, 'protocol', 'type', 'purification'),
       (1097, 'percent purity', 'otherUnit', '%');

UPDATE `canano`.`users`
SET `first_name` = 'canano',
    `last_name`  = 'curator'
WHERE (`username` = 'canano_curator');
UPDATE `canano`.`users`
SET `first_name` = 'canano',
    `last_name`  = 'guest'
WHERE (`username` = 'canano_guest');
UPDATE `canano`.`users`
SET `first_name` = 'canano',
    `last_name`  = 'researcher'
WHERE (`username` = 'canano_res');
UPDATE `canano`.`users`
SET `first_name` = 'canano',
    `last_name`  = 'researcher1'
WHERE (`username` = 'canano_res1');
UPDATE `canano`.`users`
SET `first_name` = 'guest1',
    `last_name`  = 'user'
WHERE (`username` = 'guest1');
UPDATE `canano`.`users`
SET `first_name` = 'guest2',
    `last_name`  = 'user'
WHERE (`username` = 'guest2');
UPDATE `canano`.`users`
SET `first_name` = 'guest3',
    `last_name`  = 'user'
WHERE (`username` = 'guest3');
UPDATE `canano`.`users`
SET `first_name` = 'guest4',
    `last_name`  = 'user'
WHERE (`username` = 'guest4');
UPDATE `canano`.`users`
SET `first_name` = 'guest5',
    `last_name`  = 'user'
WHERE (`username` = 'guest5');
DELETE
FROM `canano`.`authorities`
WHERE (`username` = 'guest6');
DELETE
FROM `canano`.`authorities`
WHERE (`username` = 'guest7');
DELETE
FROM `canano`.`authorities`
WHERE (`username` = 'guest8');
DELETE
FROM `canano`.`authorities`
WHERE (`username` = 'guest9');
DELETE
FROM `canano`.`authorities`
WHERE (`username` = 'guest10');
DELETE
FROM `canano`.`authorities`
WHERE (`username` = 'guest11');
DELETE
FROM `canano`.`authorities`
WHERE (`username` = 'guest12');
DELETE
FROM `canano`.`authorities`
WHERE (`username` = 'guest13');
DELETE
FROM `canano`.`authorities`
WHERE (`username` = 'guest14');
DELETE
FROM `canano`.`authorities`
WHERE (`username` = 'guest15');
DELETE
FROM `canano`.`users`
WHERE (`username` = 'guest6');
DELETE
FROM `canano`.`users`
WHERE (`username` = 'guest7');
DELETE
FROM `canano`.`users`
WHERE (`username` = 'guest8');
DELETE
FROM `canano`.`users`
WHERE (`username` = 'guest9');
DELETE
FROM `canano`.`users`
WHERE (`username` = 'guest10');
DELETE
FROM `canano`.`users`
WHERE (`username` = 'guest11');
DELETE
FROM `canano`.`users`
WHERE (`username` = 'guest12');
DELETE
FROM `canano`.`users`
WHERE (`username` = 'guest13');
DELETE
FROM `canano`.`users`
WHERE (`username` = 'guest14');
DELETE
FROM `canano`.`users`
WHERE (`username` = 'guest15');