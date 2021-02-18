
#Move File from purity_datum. File is attached to synthesis_purity
ALTER TABLE `canano`.`purity_datum`
    DROP FOREIGN KEY `FK_file_TO_purity_datum`;
ALTER TABLE `canano`.`purity_datum`
    DROP COLUMN `file_pk_id`,
    DROP INDEX `FK_file_TO_purity_datum` ;


#Add type column and direct link to purity
ALTER TABLE `canano`.`purity_datum_condition`
    ADD COLUMN `purity_pk_id` BIGINT(20) NOT NULL AFTER `condition_pk_id`,
    ADD COLUMN `type` VARCHAR(20) NULL AFTER `numberMod`;

ALTER TABLE `canano`.`purity_datum_condition`
    ADD CONSTRAINT `FK_purity_TO_pur_datum_condition`
        FOREIGN KEY (`purity_pk_id`)
            REFERENCES `canano`.`synthesis_purity` (`purity_pk_id`);


#purity_pk_id was accidentally BIGINT(200)
ALTER TABLE `canano`.`purity_file`
    DROP FOREIGN KEY `FK_purity_TO_purity_file`;
ALTER TABLE `canano`.`purity_file`
    CHANGE COLUMN `purity_pk_id` `purity_pk_id` BIGINT(20) NOT NULL COMMENT 'purity_pk_id' ;
ALTER TABLE `canano`.`purity_file`
    ADD CONSTRAINT `FK_purity_TO_purity_file`
        FOREIGN KEY (`purity_pk_id`)
            REFERENCES `canano`.`synthesis_purity` (`purity_pk_id`);

#Functionalization doesn't use type
ALTER TABLE `canano`.`synthesis_functionalization`
    DROP COLUMN `type`;

#Change to NOT NULL
ALTER TABLE `canano`.`synthesis_purification`
    DROP FOREIGN KEY `FK_synthesis_TO_synthesis_purification`;
ALTER TABLE `canano`.`synthesis_purification`
    CHANGE COLUMN `synthesis_pk_id` `synthesis_pk_id` BIGINT(20) NOT NULL COMMENT 'synthesis_pk_id' ;
ALTER TABLE `canano`.`synthesis_purification`
    ADD CONSTRAINT `FK_synthesis_TO_synthesis_purification`
        FOREIGN KEY (`synthesis_pk_id`)
            REFERENCES `canano`.`synthesis` (`synthesis_pk_id`);

