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
drop table if exists purity_datum;
drop table if exists synthesis_file;
drop table if exists synthesis_material_file;
drop table if exists synthesis_functionalization_file;
drop table if exists purification_config_instrument;
drop table if exists purification_config;
drop table if exists synthesis_purity;
drop table if exists synthesis_material_element_file;
drop table if exists sme_inherent_function;
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
    add constraint `fk_ca_entry_comp`
        foreign key (`composition_pk_id`)
            references `canano`.`composition` (`composition_pk_id`) on delete cascade;

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





create table purity_datum
(
    purity_datum_pk_id BIGINT not null,
    `name`     VARCHAR(200)   NOT NULL COMMENT 'name',
    `value`        DECIMAL(30,10) NOT NULL COMMENT 'value',
    `value_type`   VARCHAR(200)   NULL     COMMENT 'value_type',
    `value_unit`   VARCHAR(200)   NULL     COMMENT 'value_unit',
    `created_by`   VARCHAR(200)   NOT NULL COMMENT 'created_by',
    `created_date` DATETIME       NOT NULL COMMENT 'created_date',
    `numberMod`    VARCHAR(20)    NULL     DEFAULT '=' COMMENT 'numberMod',
    `purity_pk_id` BIGINT(200)    NULL     COMMENT 'purity_pk_id',
    `file_pk_id`   BIGINT(20)     NULL     COMMENT 'file_pk_id'
);

ALTER TABLE `canano`.`purity_datum`
    ADD CONSTRAINT
        PRIMARY KEY (
                     `purity_datum_pk_id`
            );



-- synthesis
CREATE TABLE `canano`.`synthesis` (
                                      `synthesis_pk_id` BIGINT(20) NOT NULL COMMENT 'synthesis_pk_id',
                                      `sample_pk_id`    BIGINT(20) NOT NULL COMMENT 'sample_pk_id'
)
    COMMENT 'synthesis';

-- synthesis
ALTER TABLE `canano`.`synthesis`
    ADD CONSTRAINT `PK_synthesis`
        PRIMARY KEY (
                     `synthesis_pk_id`
            );



-- synthesis_material

CREATE TABLE `canano`.`synthesis_material` (
                                                `synthesis_material_pk_id` BIGINT(20)   NOT NULL COMMENT 'synthesis_material_pk_id', -- synthesis_material_pk_id
                                                `synthesis_pk_id`           BIGINT(20)   NOT NULL COMMENT 'synthesis_pk_id', -- synthesis_pk_id
                                                `protocol_pk_id`            BIGINT(20)   NULL     COMMENT 'protocol_pk_id', -- protocol_pk_id
                                                `description`               TEXT         NULL     COMMENT 'description', -- description
                                                `created_date`              DATETIME     NOT NULL COMMENT 'created_date', -- created_date
                                                `created_by`                VARCHAR(200) NOT NULL COMMENT 'created_by', -- created_by
                                                `type`                      VARCHAR(200) NULL     COMMENT 'type' -- type
)
    COMMENT 'synthesis_material';

-- synthesis_material
ALTER TABLE `canano`.`synthesis_material`
    ADD CONSTRAINT `PK_synthesis_material` -- synthesis_material Primary key
        PRIMARY KEY (
                     `synthesis_material_pk_id` -- synthesis_material_pk_id
            );

-- synthesis_material_file
CREATE TABLE `canano`.`synthesis_material_file` (
                                           `synthesis_material_pk_id` BIGINT(20) NOT NULL COMMENT 'synthesis_material_pk_id', -- synthesis_material_pk_id
                                           `file_pk_id`      BIGINT(20) NOT NULL COMMENT 'file_pk_id' -- file_pk_id
)
    COMMENT 'synthesis_material_file';

-- synthesis_material_file
ALTER TABLE `canano`.`synthesis_material_file`
    ADD CONSTRAINT `PK_synthesis_material_file` -- synthesis_material_file Primary key
        PRIMARY KEY (
                     `synthesis_material_pk_id`, -- synthesis_pk_id
                     `file_pk_id`       -- file_pk_id
            );


-- synthesis_functionalization

CREATE TABLE `canano`.`synthesis_functionalization` (
                                                        `synthesis_functionalization_pk_id` BIGINT(20) NOT NULL COMMENT 'synthesis_functionalization_pk_id', -- synthesis_functionalization_pk_id
                                                        `synthesis_pk_id`                  BIGINT(20) NULL     COMMENT 'synthesis_pk_id', -- synthesis_pk_id
                                                        `protocol_pk_id`            BIGINT(20)   NULL     COMMENT 'protocol_pk_id', -- protocol_pk_id
                                                        `description`               TEXT         NULL     COMMENT 'description', -- description
                                                        `created_date`              DATETIME     NOT NULL COMMENT 'created_date', -- created_date
                                                        `created_by`                VARCHAR(200) NOT NULL COMMENT 'created_by', -- created_by
                                                        `type`                      VARCHAR(200) NULL     COMMENT 'type' -- type
)
    COMMENT 'synthesis_functionalization';

-- synthesis_functionalization
ALTER TABLE `canano`.`synthesis_functionalization`
    ADD CONSTRAINT `PK_synthesis_functionalization` -- synthesis_functionalization Primary key
        PRIMARY KEY (
                     `synthesis_functionalization_pk_id` -- synthesis_functionalization_pk_id
            );

-- synthesis_functionalization_file
CREATE TABLE `canano`.`synthesis_functionalization_file` (
                                                    `synthesis_functionalization_pk_id` BIGINT(20) NOT NULL COMMENT 'synthesis_material_pk_id', -- synthesis_material_pk_id
                                                    `file_pk_id`      BIGINT(20) NOT NULL COMMENT 'file_pk_id' -- file_pk_id
)
    COMMENT 'synthesis_functionalization_file';

-- synthesis_functionalization_file
ALTER TABLE `canano`.`synthesis_functionalization_file`
    ADD CONSTRAINT `PK_synthesis_functionalization_file` -- synthesis_functionalization_file Primary key
        PRIMARY KEY (
                     `synthesis_functionalization_pk_id`, -- synthesis_pk_id
                     `file_pk_id`       -- file_pk_id
            );

-- synthesis_purification

CREATE TABLE `canano`.`synthesis_purification` (
                                                        `synthesis_purification_pk_id` BIGINT(20)   NOT NULL COMMENT 'synthesis_purification_pk_id', -- synthesis_purification_pk_id
                                                        `synthesis_pk_id`                  BIGINT(20) NULL     COMMENT 'synthesis_pk_id', -- synthesis_pk_id
                                                        `protocol_pk_id`                    BIGINT(20)   NOT NULL COMMENT 'protocol_pk_id', -- protocol_pk_id
                                                        `type`                              VARCHAR(200) NULL     COMMENT 'type', -- type
                                                        `method_name`                       VARCHAR(200) NULL     COMMENT 'method_name', -- method_name
                                                        `design_method_description`         TEXT         NULL     COMMENT 'design_method_description', -- design_method_description
                                                        `created_by`                        VARCHAR(200) NOT NULL COMMENT 'created_by', -- created_by
                                                        `created_date`                      DATETIME     NOT NULL COMMENT 'created_date', -- created_date
                                                        `yield`                             DECIMAL(30,10)     NULL COMMENT 'yield'
)
    COMMENT 'synthesis_purification';

-- synthesis_purification
ALTER TABLE `canano`.`synthesis_purification`
    ADD CONSTRAINT `PK_synthesis_purification` -- synthesis_purification Primary key
        PRIMARY KEY (
                     `synthesis_purification_pk_id` -- synthesis_purification_pk_id
            );

-- synthesis_material_element

CREATE TABLE `canano`.`synthesis_material_element` (
                                                       `synthesis_material_element_pk_id` BIGINT(20)    NOT NULL COMMENT 'synthesis_material_element_pk_id', -- synthesis_material_element_pk_id
                                                       `synthesis_material_pk_id`        BIGINT(20)    NOT NULL COMMENT 'synthesis_material_pk_id', -- synthesis_material_pk_id
                                                       `molecular_formula`                VARCHAR(2000) NULL     COMMENT 'molecular_formula', -- molecular_formula
                                                       `molecular_formula_type`           VARCHAR(200)  NULL     COMMENT 'molecular_formula_type', -- molecular_formula_type
                                                       `description`                      TEXT          NULL     COMMENT 'description', -- description
                                                       `created_by`                       VARCHAR(200)  NOT NULL COMMENT 'created_by', -- created_by
                                                       `created_date`                     DATETIME      NOT NULL COMMENT 'created_date', -- created_date
                                                       `chemical_name`                    VARCHAR(200)  NULL     COMMENT 'chemical_name', -- chemical_name
                                                       `value`                            DECIMAL(22,3) NULL     COMMENT 'value', -- value
                                                       `value_unit`                       VARCHAR(200)  NULL     COMMENT 'value_unit', -- value_unit
                                                       `pub_chem_datasource_name`         VARCHAR(200)  NULL     COMMENT 'pub_chem_datasource_name', -- pub_chem_datasource_name
                                                       `pub_chem_id`                      BIGINT(20)    NULL     COMMENT 'pub_chem_id', -- pub_chem_id
                                                       `supplier_pk_id`                   BIGINT(20)    NULL     COMMENT  'supplier_pk_id'
)
    COMMENT 'synthesis_material_element';

-- synthesis_material_element
ALTER TABLE `canano`.`synthesis_material_element`
    ADD CONSTRAINT `PK_synthesis_material_element` -- synthesis_material_element Primary key
        PRIMARY KEY (
                     `synthesis_material_element_pk_id` -- synthesis_material_element_pk_id
            );




-- synthesis_functionalization_element

CREATE TABLE `canano`.`synthesis_functionalization_element` (
                                                       `synthesis_functionalization_element_pk_id` BIGINT(20)    NOT NULL COMMENT 'synthesis_functionalization_element_pk_id', -- synthesis_functionalization_element_pk_id
                                                       `synthesis_functionalization_pk_id`        BIGINT(20)    NOT NULL COMMENT 'synthesis_functionalization_pk_id', -- synthesis_functionalization_pk_id
                                                       `molecular_formula`                VARCHAR(2000) NULL     COMMENT 'molecular_formula', -- molecular_formula
                                                       `molecular_formula_type`           VARCHAR(200)  NULL     COMMENT 'molecular_formula_type', -- molecular_formula_type
                                                       `description`                      TEXT          NULL     COMMENT 'description', -- description
                                                       `created_by`                       VARCHAR(200)  NOT NULL COMMENT 'created_by', -- created_by
                                                       `created_date`                     DATETIME      NOT NULL COMMENT 'created_date', -- created_date
                                                       `chemical_name`                    VARCHAR(200)  NULL     COMMENT 'chemical_name', -- chemical_name
                                                       `value`                            DECIMAL(22,3) NULL     COMMENT 'value', -- value
                                                       `value_unit`                       VARCHAR(200)  NULL     COMMENT 'value_unit', -- value_unit
                                                       `pub_chem_datasource_name`         VARCHAR(200)  NULL     COMMENT 'pub_chem_datasource_name', -- pub_chem_datasource_name
                                                       `pub_chem_id`                      BIGINT(20)    NULL     COMMENT 'pub_chem_id', -- pub_chem_id
                                                       `type`                             VARCHAR(200)  NULL     COMMENT 'type'
)
    COMMENT 'synthesis_functionalization_element';

-- synthesis_functionalization_element
ALTER TABLE `canano`.`synthesis_functionalization_element`
    ADD CONSTRAINT `PK_synthesis_functionalization_element` -- synthesis_functionalization_element Primary key
        PRIMARY KEY (
                     `synthesis_functionalization_element_pk_id` -- synthesis_functionalization_element_pk_id
            );

-- sme_inherent_function

CREATE TABLE `canano`.`sme_inherent_function` (
                                                  `sme_inherent_function_pk_id`     BIGINT(20)   NOT NULL COMMENT 'sme_inherent_function_pk_id', -- sme_inherent__function_pk_id
                                                  `synthesis_material_element_pk_id` BIGINT(20)   NOT NULL COMMENT 'synthesis_material_element_pk_id', -- synthesis_material_element_pk_id
                                                  `type`                             VARCHAR(200) NULL     COMMENT 'type', -- type
                                                  `description`                      TEXT         NULL     COMMENT 'description' -- description
)
    COMMENT 'sme_inherent_function';

-- sme_inherent_function
ALTER TABLE `canano`.`sme_inherent_function`
    ADD CONSTRAINT `PK_sme_inherent_function` -- sme_inherent_function Primary key
        PRIMARY KEY (
                     `sme_inherent_function_pk_id` -- sme_inherent_function_pk_id
            );



-- sfe_inherent_function

CREATE TABLE `canano`.`sfe_inherent_function` (
                                                  `sfe_inherent_function_pk_id`     BIGINT(20)   NOT NULL COMMENT 'sfe_inherent_function_pk_id', -- sme_inherent__function_pk_id
                                                  `synthesis_functionalization_element_pk_id` BIGINT(20)   NOT NULL COMMENT 'synthesis_functionalization_element_pk_id', -- synthesis_material_element_pk_id
                                                  `type`                             VARCHAR(200) NULL     COMMENT 'type', -- type
                                                  `description`                      TEXT         NULL     COMMENT 'description' -- description
)
    COMMENT 'sfe_inherent_function';

-- sfe_inherent_function
ALTER TABLE `canano`.`sfe_inherent_function`
    ADD CONSTRAINT `PK_sfe_inherent_function` -- sfe_inherent_function Primary key
        PRIMARY KEY (
                     `sfe_inherent_function_pk_id` -- sfe_inherent_function_pk_id
            );





-- synthesis_material_element_file

CREATE TABLE `canano`.`synthesis_material_element_file` (
                                                            `synthesis_material_element_pk_id` BIGINT(20) NOT NULL COMMENT 'synthesis_material_element_pk_id', -- synthesis_material_element_pk_id
                                                            `file_pk_id`                       BIGINT(20) NOT NULL COMMENT 'file_pk_id' -- file_pk_id
)
    COMMENT 'synthesis_material_element_file';

-- synthesis_material_element_file
ALTER TABLE `canano`.`synthesis_material_element_file`
    ADD CONSTRAINT `PK_synthesis_material_element_file` -- synthesis_material_element_file Primary key
        PRIMARY KEY (
                     `synthesis_material_element_pk_id`, -- synthesis_material_element_pk_id
                     `file_pk_id`                        -- file_pk_id
            );




-- synthesis_functionalization_element_file

CREATE TABLE `canano`.`synthesis_functionalization_element_file` (
                                                            `synthesis_functionalization_element_pk_id` BIGINT(20) NOT NULL COMMENT 'synthesis_functionalization_element_file', -- synthesis_material_element_pk_id
                                                            `file_pk_id`                       BIGINT(20) NOT NULL COMMENT 'file_pk_id' -- file_pk_id
)
    COMMENT 'synthesis_functionalization_element_file';

-- synthesis_functionalization_element_file
ALTER TABLE `canano`.`synthesis_functionalization_element_file`
    ADD CONSTRAINT `PK_synthesis_functionalization_element_file` -- synthesis_functionalization_element_file Primary key
        PRIMARY KEY (
                     `synthesis_functionalization_element_pk_id`, -- synthesis_functionalization_element_pk_id
                     `file_pk_id`                        -- file_pk_id
            );

-- synthesis_purity

CREATE TABLE `canano`.`synthesis_purity` (
                                   `purity_pk_id`                      BIGINT(200)  NOT NULL COMMENT 'purity_pk_id', -- purity_pk_id
                                   `synthesis_purification_pk_id` BIGINT(20)   NOT NULL COMMENT 'synthesis_purification_pk_id', -- synthesis_purification_pk_id
                                   `created_by`                        VARCHAR(200) NOT NULL COMMENT 'created_by', -- created_by
                                   `created_date`                      DATETIME     NOT NULL COMMENT 'created_date' -- created_date
)
    COMMENT 'synthesis_purity';

-- synthesisPurity
ALTER TABLE `canano`.`synthesis_purity`
    ADD CONSTRAINT `PK_purity` -- synthesisPurity Primary key
        PRIMARY KEY (
                     `purity_pk_id` -- purity_pk_id
            );

-- purity_file

CREATE TABLE `canano`.`purity_file` (
                                        `purity_pk_id` BIGINT(200) NOT NULL COMMENT 'purity_pk_id', -- purity_pk_id
                                        `file_pk_id`   BIGINT(20)  NOT NULL COMMENT 'file_pk_id' -- file_pk_id
)
    COMMENT 'purity_file';

-- purity_file
ALTER TABLE `canano`.`purity_file`
    ADD CONSTRAINT `PK_purity_file` -- purity_file Primary key
        PRIMARY KEY (
                     `purity_pk_id`, -- purity_pk_id
                     `file_pk_id`    -- file_pk_id
            );

-- purification_config

CREATE TABLE `canano`.`purification_config` (
                                                `purification_config_pk_id`         BIGINT(20)   NOT NULL COMMENT 'purification_config_pk_id', -- purification_config_pk_id
                                                `synthesis_purification_pk_id` BIGINT(20)   NULL     COMMENT 'synthesis_purification_pk_id', -- synthesis_purification_pk_id
                                                `technique_pk_id`                   BIGINT(20)   NULL     COMMENT 'technique_pk_id', -- technique_pk_id
                                                `description`                       TEXT         NULL     COMMENT 'description', -- description
                                                `created_by`                        VARCHAR(200) NOT NULL COMMENT 'created_by', -- created_by
                                                `created_date`                      DATETIME     NOT NULL COMMENT 'created_date' -- created_date
)
    COMMENT 'purification_config';

-- purification_config
ALTER TABLE `canano`.`purification_config`
    ADD CONSTRAINT `PK_purification_config` -- purification_config Primary key
        PRIMARY KEY (
                     `purification_config_pk_id` -- purification_config_pk_id
            );

-- purification_config_instrument

CREATE TABLE `canano`.`purification_config_instrument` (
                                                           `purification_config_pk_id` BIGINT(20) NOT NULL COMMENT 'purification_config_pk_id', -- purification_config_pk_id
                                                           `instrument_pk_id`          BIGINT(20) NOT NULL COMMENT 'instrument_pk_id' -- instrument_pk_id
)
    COMMENT 'purification_config_instrument';

-- purification_config_instrument
ALTER TABLE `canano`.`purification_config_instrument`
    ADD CONSTRAINT `PK_purification_config_instrument` -- purification_config_instrument Primary key
        PRIMARY KEY (
                     `purification_config_pk_id`, -- purification_config_pk_id
                     `instrument_pk_id`           -- instrument_pk_id
            );

-- purity_datum_condition

CREATE TABLE `canano`.`purity_datum_condition` (
                                                   `datum_pk_id`     BIGINT(20) NOT NULL COMMENT 'purity_datum_pk_id', -- purity_datum_pk_id
                                                   `condition_pk_id` BIGINT(20) NOT NULL COMMENT 'condition_pk_id' -- condition_pk_id
)
    COMMENT 'purity_datum_condition';

-- purity_datum_condition
ALTER TABLE `canano`.`purity_datum_condition`
    ADD CONSTRAINT `PK_purity_datum_condition` -- purity_datum_condition Primary key
        PRIMARY KEY (
                     `datum_pk_id`,     -- purity_datum_pk_id
                     `condition_pk_id`  -- condition_pk_id
            );


-- supplier

CREATE TABLE `canano`.`supplier` (
                                     `supplier_pk_id` BIGINT(20)   NOT NULL COMMENT 'supplier_pk_id',
                                     `supplier_name`                    VARCHAR(200) NOT NULL COMMENT 'supplier_name', -- supplier_name
                                     `lot`                              VARCHAR(50)  NULL     COMMENT 'lot' -- lot
)
    COMMENT 'supplier';

-- supplier
ALTER TABLE `canano`.`supplier`
    ADD CONSTRAINT
        PRIMARY KEY (
                     `supplier_pk_id`
            );


-- purity_datum

ALTER TABLE `canano`.`purity_datum`
    ADD CONSTRAINT `FK_purity_TO_purity_datum` -- synthesisPurity -> purity_datum
        FOREIGN KEY (
                     `purity_pk_id` -- purity_pk_id
            )
            REFERENCES `canano`.`synthesis_purity` ( -- synthesisPurity
                                          `purity_pk_id` -- purity_pk_id
                );

-- purity_datum
ALTER TABLE `canano`.`purity_datum`
    ADD CONSTRAINT `FK_file_TO_purity_datum` -- file -> purity_datum
        FOREIGN KEY (
                     `file_pk_id` -- file_pk_id
            )
            REFERENCES `canano`.`file` ( -- file
                                        `file_pk_id` -- file_pk_id
                );

-- synthesis
ALTER TABLE `canano`.`synthesis`
    ADD CONSTRAINT `FK_sample_TO_synthesis` -- sample -> synthesis
        FOREIGN KEY (
                     `sample_pk_id` -- sample_pk_id
            )
            REFERENCES `canano`.`sample` ( -- sample
                                          `sample_pk_id` -- sample_pk_id
                );

-- synthesis_material_file
ALTER TABLE `canano`.`synthesis_material_file`
    ADD CONSTRAINT `FK_synthesis_material_TO_synthesis_material_file` -- synthesis -> synthesis_material_file
        FOREIGN KEY (
                     `synthesis_material_pk_id` -- synthesis_pk_id
            )
            REFERENCES `canano`.`synthesis_material` ( -- synthesis_material
                                             `synthesis_material_pk_id` -- synthesis_material_pk_id
                );

-- synthesis_material_file
ALTER TABLE `canano`.`synthesis_material_file`
    ADD CONSTRAINT `FK_file_TO_ssynthesis_material_file` -- file -> synthesis_material_file
        FOREIGN KEY (
                     `file_pk_id` -- file_pk_id
            )
            REFERENCES `canano`.`file` ( -- file
                                        `file_pk_id` -- file_pk_id
                );

-- synthesis_functionalization_file
ALTER TABLE `canano`.`synthesis_functionalization_file`
    ADD CONSTRAINT `FK_synthesis_TO_synthesis_functionalization_file` -- synthesis -> synthesis_functionalization_file
        FOREIGN KEY (
                     `synthesis_functionalization_pk_id` -- synthesis_functionalization_pk_id
            )
            REFERENCES `canano`.`synthesis_functionalization` ( -- synthesis_functionalization
                                             `synthesis_functionalization_pk_id` -- synthesis_functionalization_pk_id
                );

-- synthesis_functionalization_file
ALTER TABLE `canano`.`synthesis_functionalization_file`
    ADD CONSTRAINT `FK_file_TO_synthesis_file` -- file -> synthesis_file
        FOREIGN KEY (
                     `file_pk_id` -- file_pk_id
            )
            REFERENCES `canano`.`file` ( -- file
                                        `file_pk_id` -- file_pk_id
                );

-- synthesis_material
ALTER TABLE `canano`.`synthesis_material`
    ADD CONSTRAINT `FK_synthesis_TO_synthesis_material` -- synthesis -> synthesis_material
        FOREIGN KEY (
                     `synthesis_pk_id` -- synthesis_pk_id
            )
            REFERENCES `canano`.`synthesis` ( -- synthesis
                                             `synthesis_pk_id` -- synthesis_pk_id
                );

-- synthesis_material
ALTER TABLE `canano`.`synthesis_material`
    ADD CONSTRAINT `FK_protocol_TO_synthesis_material` -- protocol -> synthesis_material
        FOREIGN KEY (
                     `protocol_pk_id` -- protocol_pk_id
            )
            REFERENCES `canano`.`protocol` ( -- protocol
                                            `protocol_pk_id` -- protocol_pk_id
                );

-- synthesis_functionalization
ALTER TABLE `canano`.`synthesis_functionalization`
    ADD CONSTRAINT `FK_synthesis_TO_synthesis_functionalization` -- synthesis -> synthesis_functionalization
        FOREIGN KEY (
                     `synthesis_pk_id` -- synthesis_pk_id
            )
            REFERENCES `canano`.`synthesis` ( -- synthesis
                                             `synthesis_pk_id` -- synthesis_pk_id
                );

-- synthesis_material
ALTER TABLE `canano`.`synthesis_functionalization`
    ADD CONSTRAINT `FK_protocol_TO_synthesis_functionalization` -- protocol -> synthesis_functionalization
        FOREIGN KEY (
                     `protocol_pk_id` -- protocol_pk_id
            )
            REFERENCES `canano`.`protocol` ( -- protocol
                                            `protocol_pk_id` -- protocol_pk_id
                );

-- synthesis_purification
ALTER TABLE `canano`.`synthesis_purification`
    ADD CONSTRAINT `FK_synthesis_TO_synthesis_purification` -- synthesis -> synthesis_purification
        FOREIGN KEY (
                     `synthesis_pk_id` -- synthesis_pk_id
            )
            REFERENCES `canano`.`synthesis` ( -- synthesis
                                             `synthesis_pk_id` -- synthesis_pk_id
                );

-- synthesis_purification
ALTER TABLE `canano`.`synthesis_purification`
    ADD CONSTRAINT `FK_protocol_TO_synthesis_purification` -- protocol -> synthesis_purification
        FOREIGN KEY (
                     `protocol_pk_id` -- protocol_pk_id
            )
            REFERENCES `canano`.`protocol` ( -- protocol
                                            `protocol_pk_id` -- protocol_pk_id
                );

-- synthesis_material_element
ALTER TABLE `canano`.`synthesis_material_element`
    ADD CONSTRAINT `FK_synthesis_material_TO_synthesis_material_element` -- synthesis_material -> synthesis_material_element
        FOREIGN KEY (
                     `synthesis_material_pk_id` -- synthesis_material_pk_id
            )
            REFERENCES `canano`.`synthesis_material` ( -- synthesis_material
                                                       `synthesis_material_pk_id` -- synthesis_material_pk_id
                );

-- supplier
ALTER TABLE `canano`.`synthesis_material_element`
    ADD CONSTRAINT `FK_synthesis_material_element_TO_supplier` -- synthesis_material_element -> supplier
        FOREIGN KEY (
                     `supplier_pk_id`
            )
            REFERENCES `canano`.`supplier` ( -- synthesis_material_element
                                                              `supplier_pk_id`
                );


ALTER TABLE `canano`.`synthesis_functionalization_element`
    ADD CONSTRAINT `FK_synthesis_material_TO_synthesis_functionalization_element` -- synthesis_material -> synthesis_functionalization_element
        FOREIGN KEY (
                     `synthesis_functionalization_pk_id` -- synthesis_functionalization_pk_id
            )
            REFERENCES `canano`.`synthesis_functionalization` ( -- synthesis_functionalization
                                                      `synthesis_functionalization_pk_id` -- synthesis_functionalization_pk_id
                );

-- sme_inherent_function
ALTER TABLE `canano`.`sme_inherent_function`
    ADD CONSTRAINT `FK_synthesis_material_element_TO_sme_inherent_function` -- synthesis_material_element -> sme_inherent_function
        FOREIGN KEY (
                     `synthesis_material_element_pk_id` -- synthesis_material_element_pk_id
            )
            REFERENCES `canano`.`synthesis_material_element` ( -- synthesis_material_element
                                                              `synthesis_material_element_pk_id` -- synthesis_material_element_pk_id
                );

-- sfe_inherent_function
ALTER TABLE `canano`.`sfe_inherent_function`
    ADD CONSTRAINT `FK_synthesis_material_element_TO_sfe_inherent_function` -- synthesis_material_element -> sfe_inherent_function
        FOREIGN KEY (
                     `synthesis_functionalization_element_pk_id` -- synthesis_functionalization_element_pk_id
            )
            REFERENCES `canano`.`synthesis_functionalization_element` ( -- synthesis_functionalization_element
                                                              `synthesis_functionalization_element_pk_id` -- synthesis_material_element_pk_id
                );

-- synthesis_material_element_file
ALTER TABLE `canano`.`synthesis_material_element_file`
    ADD CONSTRAINT `FK_synthesis_material_element_TO_synthesis_material_element_file` -- synthesis_material_element -> synthesis_material_element_file
        FOREIGN KEY (
                     `synthesis_material_element_pk_id` -- synthesis_material_element_pk_id
            )
            REFERENCES `canano`.`synthesis_material_element` ( -- synthesis_material_element
                                                              `synthesis_material_element_pk_id` -- synthesis_material_element_pk_id
                );



-- synthesis_material_element_file
ALTER TABLE `canano`.`synthesis_material_element_file`
    ADD CONSTRAINT `FK_file_TO_synthesis_material_element_file` -- file -> synthesis_material_element_file
        FOREIGN KEY (
                     `file_pk_id` -- file_pk_id
            )
            REFERENCES `canano`.`file` ( -- file
                                        `file_pk_id` -- file_pk_id
                );

-- synthesis_functionalization_element_file
ALTER TABLE `canano`.`synthesis_functionalization_element_file`
    ADD CONSTRAINT `FK_synthesis_material_element_TO_sfe_element_file` -- synthesis_material_element -> synthesis_functionalization_element_file
        FOREIGN KEY (
                     `synthesis_functionalization_element_pk_id` -- synthesis_functionalization_element_pk_id
            )
            REFERENCES `canano`.`synthesis_functionalization_element` ( -- synthesis_functionalization_element
                                                              `synthesis_functionalization_element_pk_id` -- synthesis_functionalization_element_pk_id
                );



-- synthesis_functionalization_element_file
ALTER TABLE `canano`.`synthesis_functionalization_element_file`
    ADD CONSTRAINT `FK_file_TO_synthesis_functionalization_element_file` -- file -> synthesis_functionalization_element_file
        FOREIGN KEY (
                     `file_pk_id` -- file_pk_id
            )
            REFERENCES `canano`.`file` ( -- file
                                        `file_pk_id` -- file_pk_id
                );

-- synthesisPurity
ALTER TABLE `canano`.`synthesis_purity`
    ADD CONSTRAINT `FK_synthesis_purification_TO_purity` -- synthesis_purification -> synthesisPurity
        FOREIGN KEY (
                     `synthesis_purification_pk_id` -- synthesis_purification_pk_id
            )
            REFERENCES `canano`.`synthesis_purification` ( -- synthesis_purification
                                                               `synthesis_purification_pk_id` -- synthesis_purification_pk_id
                );

-- purity_file
ALTER TABLE `canano`.`purity_file`
    ADD CONSTRAINT `FK_purity_TO_purity_file` -- synthesisPurity -> purity_file
        FOREIGN KEY (
                     `purity_pk_id` -- purity_pk_id
            )
            REFERENCES `canano`.`synthesis_purity` ( -- synthesisPurity
                                          `purity_pk_id` -- purity_pk_id
                );

-- purity_file
ALTER TABLE `canano`.`purity_file`
    ADD CONSTRAINT `FK_file_TO_purity_file` -- file -> purity_file
        FOREIGN KEY (
                     `file_pk_id` -- file_pk_id
            )
            REFERENCES `canano`.`file` ( -- file
                                        `file_pk_id` -- file_pk_id
                );

-- purification_config
ALTER TABLE `canano`.`purification_config`
    ADD CONSTRAINT `FK_synthesis_purification_TO_purification_config` -- synthesis_purification -> purification_config
        FOREIGN KEY (
                     `synthesis_purification_pk_id` -- synthesis_purification_pk_id
            )
            REFERENCES `canano`.`synthesis_purification` ( -- synthesis_purification
                                                               `synthesis_purification_pk_id` -- synthesis_purification_pk_id
                );

-- purification_config
ALTER TABLE `canano`.`purification_config`
    ADD CONSTRAINT `FK_technique_TO_purification_config` -- technique -> purification_config
        FOREIGN KEY (
                     `technique_pk_id` -- technique_pk_id
            )
            REFERENCES `canano`.`technique` ( -- technique
                                             `technique_pk_id` -- technique_pk_id
                );

-- purification_config_instrument
ALTER TABLE `canano`.`purification_config_instrument`
    ADD CONSTRAINT `FK_purification_config_TO_purification_config_instrument` -- purification_config -> purification_config_instrument
        FOREIGN KEY (
                     `purification_config_pk_id` -- purification_config_pk_id
            )
            REFERENCES `canano`.`purification_config` ( -- purification_config
                                                       `purification_config_pk_id` -- purification_config_pk_id
                );

-- purification_config_instrument
ALTER TABLE `canano`.`purification_config_instrument`
    ADD CONSTRAINT `FK_instrument_TO_purification_config_instrument` -- instrument -> purification_config_instrument
        FOREIGN KEY (
                     `instrument_pk_id` -- instrument_pk_id
            )
            REFERENCES `canano`.`instrument` ( -- instrument
                                              `instrument_pk_id` -- instrument_pk_id
                );

-- purity_datum_condition
ALTER TABLE `canano`.`purity_datum_condition`
    ADD CONSTRAINT `FK_purity_datum_TO_purity_datum_condition` -- purity_datum -> purity_datum_condition
        FOREIGN KEY (
                     `datum_pk_id` -- purity_datum_pk_id
            )
            REFERENCES `canano`.`purity_datum` ( -- purity_datum
                                                `purity_datum_pk_id` -- purity_datum_pk_id
                );

-- purity_datum_condition
ALTER TABLE `canano`.`purity_datum_condition`
    ADD CONSTRAINT `FK_experiment_condition_TO_purity_datum_condition` -- experiment_condition -> purity_datum_condition
        FOREIGN KEY (
                     `condition_pk_id` -- condition_pk_id
            )
            REFERENCES `canano`.`experiment_condition` ( -- experiment_condition
                                                        `condition_pk_id` -- condition_pk_id
                );

alter table `canano`.`acl_entry`
    drop foreign key `fk_acl_entry_acl`;

alter table `canano`.`acl_entry`
    add constraint `fk_acl_entry_acl`
        foreign key (`sid`)
            references `canano`.`acl_sid` (`id`) on delete cascade;















