/*
 This script is for creating a brand new database, compatible
    with the 2.4.0 version of caNanoLab.
   Expected use is for Docker instances or external users starting fresh.

 */


DROP TABLE IF EXISTS `acl_entry`;
DROP TABLE IF EXISTS `acl_object_identity`;
DROP TABLE IF EXISTS `acl_class`;
DROP TABLE IF EXISTS `acl_sid`;
DROP TABLE IF EXISTS `antibody`;
DROP TABLE IF EXISTS `biopolymer_f`;
DROP TABLE IF EXISTS `functionalizing_entity_file`;
DROP TABLE IF EXISTS `target`;
DROP TABLE IF EXISTS `nano_function`;
DROP TABLE IF EXISTS `small_molecule`;
DROP TABLE IF EXISTS `other_functionalizing_entity`;
DROP TABLE IF EXISTS `functionalizing_entity`;
DROP TABLE IF EXISTS `activation_method`;
DROP TABLE IF EXISTS `administration`;
DROP TABLE IF EXISTS `chemical_association_file`;
DROP TABLE IF EXISTS `chemical_association`;
DROP TABLE IF EXISTS `composing_element`;
DROP TABLE IF EXISTS `associated_element`;
DROP TABLE IF EXISTS `author_publication`;
DROP TABLE IF EXISTS `author`;
DROP TABLE IF EXISTS `authorities`;
DROP TABLE IF EXISTS `biopolymer_p`;
DROP TABLE IF EXISTS `carbon_nanotube`;
DROP TABLE IF EXISTS `experiment_config_instrument`;
DROP TABLE IF EXISTS `experiment_config`;
DROP TABLE IF EXISTS `datum_condition`;
DROP TABLE IF EXISTS `datum`;
DROP TABLE IF EXISTS `finding_file`;
DROP TABLE IF EXISTS `finding`;
DROP TABLE IF EXISTS `physical_state`;
DROP TABLE IF EXISTS `shape`;
DROP TABLE IF EXISTS `solubility`;
DROP TABLE IF EXISTS `characterization`;
DROP TABLE IF EXISTS `common_lookup`;
DROP TABLE IF EXISTS `composition_file`;

DROP TABLE IF EXISTS `data_availability`;
DROP TABLE IF EXISTS `data_review_status`;
DROP TABLE IF EXISTS `databasechangelog`;
DROP TABLE IF EXISTS `databasechangeloglock`;
DROP TABLE IF EXISTS `dendrimer`;
DROP TABLE IF EXISTS `emulsion`;
drop table if exists `purity_datum_condition`;
DROP TABLE IF EXISTS `experiment_condition`;
DROP TABLE IF EXISTS `favorite_data`;
DROP TABLE IF EXISTS `keyword_file`;
DROP TABLE IF EXISTS `nanomaterial_entity_file`;
DROP TABLE IF EXISTS `fullerene`;
DROP TABLE IF EXISTS `group_authorities`;
DROP TABLE IF EXISTS `group_members`;
DROP TABLE IF EXISTS `groups`;
DROP TABLE IF EXISTS `hibernate_unique_key`;
drop table if exists `purification_config_instrument`;
DROP TABLE IF EXISTS `instrument`;
DROP TABLE IF EXISTS `instrument_to_review`;
DROP TABLE IF EXISTS `keyword_sample`;
DROP TABLE IF EXISTS `keyword`;
DROP TABLE IF EXISTS `liposome`;
DROP TABLE IF EXISTS `other_nanomaterial_entity`;
DROP TABLE IF EXISTS `polymer`;
DROP TABLE IF EXISTS `nanomaterial_entity`;
DROP TABLE IF EXISTS `composition`;
DROP TABLE IF EXISTS `sample_publication`;
DROP TABLE IF EXISTS `sample_other_poc`;
drop table if exists `purity_file`;
drop table if exists `purity_datum`;
drop table if exists `synthesis_material_file`;
drop table if exists `synthesis_functionalization_file`;
drop table if exists `purification_config`;
drop table if exists `synthesis_purity`;
drop table if exists `synthesis_material_element_file`;
drop table if exists `sme_inherent_function`;
drop table if exists `synthesis_purification`;
drop table if exists `synthesis_material_element`;
DROP TABLE IF EXISTS `supplier`;
drop table if exists `synthesis_material`;
drop table if exists `sfe_inherent_function`;
drop table if exists `synthesis_functionalization_element_file`;
drop table IF exists `synthesis_functionalization_element`;
drop table if exists `synthesis_functionalization`;
drop table if exists `synthesis`;
DROP TABLE IF EXISTS `sample`;
DROP TABLE IF EXISTS `point_of_contact`;
DROP TABLE IF EXISTS `organization`;
DROP TABLE IF EXISTS `protocol`;
DROP TABLE IF EXISTS `publication`;
DROP TABLE IF EXISTS `file`;
DROP TABLE IF EXISTS `technique`;
DROP TABLE IF EXISTS `users`;

/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `acl_class`
(
    `id`    bigint(20) unsigned NOT NULL AUTO_INCREMENT,
    `class` varchar(100)        NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `unique_acl_class` (`class`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 18
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;




--
-- Table structure for table `acl_sid`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `acl_sid`
(
    `id`        bigint(20) unsigned NOT NULL AUTO_INCREMENT,
    `principal` tinyint(1)          NOT NULL,
    `sid`       varchar(100)        NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `unique_acl_sid` (`sid`, `principal`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 50
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `acl_object_identity`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `acl_object_identity`
(
    `id`                 bigint(20) unsigned NOT NULL AUTO_INCREMENT,
    `object_id_class`    bigint(20) unsigned NOT NULL,
    `object_id_identity` bigint(20)          NOT NULL,
    `parent_object`      bigint(20) unsigned DEFAULT NULL,
    `owner_sid`          bigint(20) unsigned DEFAULT NULL,
    `entries_inheriting` tinyint(1)          NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `uk_acl_object_identity` (`object_id_class`, `object_id_identity`),
    KEY `fk_acl_object_identity_parent` (`parent_object`),
    KEY `fk_acl_object_identity_owner` (`owner_sid`),
    CONSTRAINT `fk_acl_object_identity_class` FOREIGN KEY (`object_id_class`) REFERENCES `acl_class` (`id`),
    CONSTRAINT `fk_acl_object_identity_owner` FOREIGN KEY (`owner_sid`) REFERENCES `acl_sid` (`id`),
    CONSTRAINT `fk_acl_object_identity_parent` FOREIGN KEY (`parent_object`) REFERENCES `acl_object_identity` (`id`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 9008
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;



--
-- Table structure for table `acl_entry`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `acl_entry`
(
    `id`                  bigint(20) unsigned NOT NULL AUTO_INCREMENT,
    `acl_object_identity` bigint(20) unsigned NOT NULL,
    `ace_order`           int(11)             NOT NULL,
    `sid`                 bigint(20) unsigned NOT NULL,
    `mask`                int(10) unsigned    NOT NULL,
    `granting`            tinyint(1)          NOT NULL,
    `audit_success`       tinyint(1)          NOT NULL,
    `audit_failure`       tinyint(1)          NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `unique_acl_entry` (`acl_object_identity`, `ace_order`),
    KEY `fk_acl_entry_acl` (`sid`),
    CONSTRAINT `fk_acl_entry_acl` FOREIGN KEY (`sid`) REFERENCES `acl_sid` (`id`) ON DELETE CASCADE,
    CONSTRAINT `fk_acl_entry_object` FOREIGN KEY (`acl_object_identity`) REFERENCES `acl_object_identity` (`id`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 189281
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;




/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users`
(
    `username`     varchar(100) NOT NULL,
    `password`     varchar(100) NOT NULL,
    `first_name`   varchar(100) NOT NULL,
    `last_name`    varchar(100) NOT NULL,
    `organization` varchar(500) DEFAULT NULL,
    `department`   varchar(100) DEFAULT NULL,
    `title`        varchar(100) DEFAULT NULL,
    `phone_number` varchar(100) DEFAULT NULL,
    `email_id`     varchar(100) DEFAULT NULL,
    `enabled`      varchar(1)   DEFAULT NULL,
    PRIMARY KEY (`username`),
    UNIQUE KEY `id_users_UNIQUE` (`username`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `authorities`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `authorities`
(
    `username`  varchar(100) NOT NULL,
    `authority` varchar(100) NOT NULL,
    UNIQUE KEY `ix_auth_username` (`username`, `authority`),
    CONSTRAINT `fk_authorities_users` FOREIGN KEY (`username`) REFERENCES `users` (`username`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;



--
-- Table structure for table `activation_method`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `activation_method`
(
    `activation_method_pk_id` bigint(20)   NOT NULL,
    `type`                    varchar(200) NOT NULL,
    `activation_effect`       text,
    PRIMARY KEY (`activation_method_pk_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `administration`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `administration`
(
    `administration_id`  bigint(20)   NOT NULL,
    `site_name`          varchar(200) DEFAULT NULL,
    `site_logo`          varchar(200) DEFAULT NULL,
    `visitor_count`      bigint(20)   DEFAULT NULL,
    `counter_start_date` datetime     NOT NULL,
    `created_by`         varchar(200) NOT NULL,
    `created_date`       datetime     NOT NULL,
    `updated_by`         varchar(200) DEFAULT NULL,
    `updated_date`       datetime     DEFAULT NULL,
    PRIMARY KEY (`administration_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `administration`
--

LOCK TABLES `administration` WRITE;
/*!40000 ALTER TABLE `administration`
    DISABLE KEYS */;
INSERT INTO `administration`
VALUES (0, NULL, NULL, 509182, '2010-06-03 08:28:27', 'admin', '2010-06-03 08:28:27', NULL, NULL);
/*!40000 ALTER TABLE `administration`
    ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `associated_element`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `associated_element`
(
    `associated_element_pk_id` bigint(20)   NOT NULL,
    `molecular_formula`        varchar(2000)  DEFAULT NULL,
    `molecular_formula_type`   varchar(200)   DEFAULT NULL,
    `description`              text,
    `created_by`               varchar(200) NOT NULL,
    `created_date`             datetime     NOT NULL,
    `name`                     varchar(200)   DEFAULT NULL,
    `value`                    decimal(22, 3) DEFAULT NULL,
    `value_unit`               varchar(200)   DEFAULT NULL,
    `pub_chem_datasource_name` varchar(200)   DEFAULT NULL,
    `pub_chem_id`              bigint(20)     DEFAULT NULL,
    PRIMARY KEY (`associated_element_pk_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `author`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `author`
(
    `author_pk_id` bigint(20)   NOT NULL,
    `first_name`   varchar(200) NOT NULL,
    `last_name`    varchar(200) NOT NULL,
    `initial`      varchar(10) DEFAULT NULL,
    `created_by`   varchar(200) NOT NULL,
    `created_date` datetime     NOT NULL,
    PRIMARY KEY (`author_pk_id`),
    UNIQUE KEY `author_pk_id` (`author_pk_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `file`
(
    `file_pk_id`      bigint(20)   NOT NULL,
    `file_name`       varchar(500)  DEFAULT NULL,
    `file_uri`        varchar(500)  DEFAULT NULL,
    `file_extension`  varchar(100)  DEFAULT NULL,
    `created_by`      varchar(200) NOT NULL,
    `created_date`    datetime     NOT NULL,
    `title`           varchar(500)  DEFAULT NULL,
    `description`     text,
    `comments`        varchar(2000) DEFAULT NULL,
    `file_type`       varchar(200)  DEFAULT NULL,
    `is_uri_external` tinyint(4)   NOT NULL,
    PRIMARY KEY (`file_pk_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--

--
-- Table structure for table `publication`
--


CREATE TABLE `publication`
(
    `publication_pk_id`  bigint(20)   NOT NULL,
    `category`           varchar(200) NOT NULL,
    `publication_status` varchar(50)  NOT NULL,
    `pubmed_id`          bigint(20)   DEFAULT NULL,
    `digital_object_id`  varchar(200) DEFAULT NULL,
    `journal_name`       varchar(200) DEFAULT NULL,
    `volume`             varchar(50)  DEFAULT NULL,
    `start_page`         varchar(50)  DEFAULT NULL,
    `end_page`           varchar(50)  DEFAULT NULL,
    `year`               int(11)      DEFAULT NULL,
    `research_area`      varchar(200) DEFAULT NULL,
    PRIMARY KEY (`publication_pk_id`),
    CONSTRAINT `FK_publication_lab_file` FOREIGN KEY (`publication_pk_id`) REFERENCES `file` (`file_pk_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;

--
-- Table structure for table `author_publication`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `author_publication`
(
    `author_pk_id`      bigint(20) NOT NULL,
    `publication_pk_id` bigint(20) NOT NULL,
    PRIMARY KEY (`author_pk_id`, `publication_pk_id`),
    KEY `author_pk_id` (`author_pk_id`),
    KEY `publication_pk_id` (`publication_pk_id`),
    CONSTRAINT `FK_author_publication_author` FOREIGN KEY (`author_pk_id`) REFERENCES `author` (`author_pk_id`),
    CONSTRAINT `FK_author_publication_publication` FOREIGN KEY (`publication_pk_id`) REFERENCES `publication` (`publication_pk_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;





--
-- Table structure for table `common_lookup`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `common_lookup`
(
    `common_lookup_pk_id` bigint(20)   NOT NULL,
    `name`                varchar(200) NOT NULL,
    `attribute`           varchar(200) NOT NULL,
    `value`               varchar(200) NOT NULL,
    PRIMARY KEY (`common_lookup_pk_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `data_availability`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `data_availability`
(
    `sample_id`             bigint(20)   NOT NULL,
    `datasource_name`       varchar(20)  DEFAULT NULL,
    `available_entity_name` varchar(200) DEFAULT NULL,
    `created_date`          datetime     NOT NULL,
    `created_by`            varchar(200) NOT NULL,
    `updated_date`          datetime     DEFAULT NULL,
    `updated_by`            varchar(200) DEFAULT NULL
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `data_review_status`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `data_review_status`
(
    `data_id`        bigint(20)   NOT NULL,
    `data_type`      varchar(200) NOT NULL,
    `data_name`      varchar(200) NOT NULL,
    `status`         varchar(200) NOT NULL,
    `submitted_date` datetime     NOT NULL,
    `submitted_by`   varchar(200) NOT NULL,
    PRIMARY KEY (`data_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `databasechangelog`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `databasechangelog`
(
    `ID`           varchar(63)  NOT NULL,
    `AUTHOR`       varchar(63)  NOT NULL,
    `FILENAME`     varchar(200) NOT NULL,
    `DATEEXECUTED` datetime     NOT NULL,
    `MD5SUM`       varchar(32)  DEFAULT NULL,
    `DESCRIPTION`  varchar(255) DEFAULT NULL,
    `COMMENTS`     varchar(255) DEFAULT NULL,
    `TAG`          varchar(255) DEFAULT NULL,
    `LIQUIBASE`    varchar(10)  DEFAULT NULL,
    PRIMARY KEY (`ID`, `AUTHOR`, `FILENAME`)
) ENGINE = MyISAM
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `databasechangeloglock`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `databasechangeloglock`
(
    `ID`          int(11)    NOT NULL,
    `LOCKED`      tinyint(1) NOT NULL,
    `LOCKGRANTED` datetime     DEFAULT NULL,
    `LOCKEDBY`    varchar(255) DEFAULT NULL,
    PRIMARY KEY (`ID`)
) ENGINE = MyISAM
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `databasechangeloglock`
--

LOCK TABLES `databasechangeloglock` WRITE;
/*!40000 ALTER TABLE `databasechangeloglock` DISABLE KEYS */;
INSERT INTO `databasechangeloglock`
VALUES (1, 0, NULL, NULL);
/*!40000 ALTER TABLE `databasechangeloglock` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Table structure for table `experiment_condition`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `experiment_condition`
(
    `condition_pk_id` bigint(20)   NOT NULL,
    `name`            varchar(200) NOT NULL,
    `property`        varchar(200) DEFAULT NULL,
    `value`           varchar(200) NOT NULL,
    `value_unit`      varchar(200) DEFAULT NULL,
    `value_type`      varchar(200) DEFAULT NULL,
    `created_by`      varchar(200) NOT NULL,
    `created_date`    datetime     NOT NULL,
    PRIMARY KEY (`condition_pk_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `favorite_data`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `favorite_data`
(
    `favorite_data_id`    bigint(20)   DEFAULT NULL,
    `data_id`             bigint(20)   DEFAULT NULL,
    `data_type`           varchar(200) DEFAULT NULL,
    `data_name`           varchar(200) DEFAULT NULL,
    `login_name`          varchar(200) DEFAULT NULL,
    `protocol_file_id`    bigint(20)   DEFAULT NULL,
    `pubmed_id`           bigint(20)   DEFAULT NULL,
    `editable`            tinyint(1)   DEFAULT '0',
    `description`         text,
    `protocol_file_title` varchar(200) DEFAULT NULL
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `file`
--


--
-- Table structure for table `functionalizing_entity`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `functionalizing_entity`
(
    `functionalizing_entity_pk_id` bigint(20) NOT NULL,
    `activation_method_pk_id`      bigint(20) DEFAULT NULL,
    `composition_pk_id`            bigint(20) DEFAULT NULL,
    PRIMARY KEY (`functionalizing_entity_pk_id`),
    KEY `activation_method_pk_id` (`activation_method_pk_id`),
    KEY `functionalizing_entity_pk_id` (`functionalizing_entity_pk_id`),
    KEY `composition_pk_id` (`composition_pk_id`),
    CONSTRAINT `FK_functionalizing_entity_activation_method` FOREIGN KEY (`activation_method_pk_id`) REFERENCES `activation_method` (`activation_method_pk_id`),
    CONSTRAINT `FK_functionalizing_entity_associated_element` FOREIGN KEY (`functionalizing_entity_pk_id`) REFERENCES `associated_element` (`associated_element_pk_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;



--
-- Table structure for table `biopolymer_f`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `biopolymer_f`
(
    `biopolymer_pk_id` bigint(20)  NOT NULL,
    `type`             varchar(50) NOT NULL,
    `sequence`         text,
    PRIMARY KEY (`biopolymer_pk_id`),
    UNIQUE KEY `biopolymer_pk_id` (`biopolymer_pk_id`),
    KEY `biopolymer_pk_id_2` (`biopolymer_pk_id`),
    CONSTRAINT `FK_biopolymer_f_functionalizing_entity` FOREIGN KEY (`biopolymer_pk_id`) REFERENCES `functionalizing_entity` (`functionalizing_entity_pk_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `antibody`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `antibody`
(
    `antibody_pk_id` bigint(20) NOT NULL,
    `species`        varchar(200) DEFAULT NULL,
    `type`           varchar(200) DEFAULT NULL,
    `isotype`        varchar(200) DEFAULT NULL,
    PRIMARY KEY (`antibody_pk_id`),
    UNIQUE KEY `antibody_pk_id` (`antibody_pk_id`),
    KEY `antibody_pk_id_2` (`antibody_pk_id`),
    CONSTRAINT `FK_antibody_functionalizing_entity` FOREIGN KEY (`antibody_pk_id`) REFERENCES `functionalizing_entity` (`functionalizing_entity_pk_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `functionalizing_entity_file`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `functionalizing_entity_file`
(
    `functionalizing_entity_pk_id` bigint(20) NOT NULL,
    `file_pk_id`                   bigint(20) NOT NULL,
    PRIMARY KEY (`functionalizing_entity_pk_id`, `file_pk_id`),
    KEY `functionalizing_entity_pk_id` (`functionalizing_entity_pk_id`),
    KEY `file_pk_id` (`file_pk_id`),
    CONSTRAINT `FK_functionalizing_entity_file_file` FOREIGN KEY (`file_pk_id`) REFERENCES `file` (`file_pk_id`),
    CONSTRAINT `FK_functionalizing_entity_file_functionalizing_entity` FOREIGN KEY (`functionalizing_entity_pk_id`) REFERENCES `functionalizing_entity` (`functionalizing_entity_pk_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `groups`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `groups`
(
    `id`                int(11)      NOT NULL AUTO_INCREMENT,
    `group_name`        varchar(50)  NOT NULL,
    `group_description` varchar(200) DEFAULT NULL,
    `created_by`        varchar(100) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `group_name_UNIQUE` (`group_name`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 5
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `group_authorities`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `group_authorities`
(
    `group_id`  int(11)     NOT NULL,
    `authority` varchar(50) NOT NULL,
    KEY `fk_group_members_group_idx` (`group_id`),
    CONSTRAINT `fk_group_authorities_group` FOREIGN KEY (`group_id`) REFERENCES `groups` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `group_members`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `group_members`
(
    `id`       int(11)      NOT NULL AUTO_INCREMENT,
    `username` varchar(100) NOT NULL,
    `group_id` int(11)      NOT NULL,
    PRIMARY KEY (`id`),
    KEY `fk_group_members_group_idx` (`group_id`),
    KEY `fk_group_members_username_idx` (`username`),
    CONSTRAINT `fk_group_members_group` FOREIGN KEY (`group_id`) REFERENCES `groups` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `fk_group_members_username` FOREIGN KEY (`username`) REFERENCES `users` (`username`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB
  AUTO_INCREMENT = 11
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `hibernate_unique_key`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hibernate_unique_key`
(
    `next_hi` bigint(20) NOT NULL
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Default data for table `hibernate_unique_key`
--

LOCK TABLES `hibernate_unique_key` WRITE;
/*!40000 ALTER TABLE `hibernate_unique_key`
    DISABLE KEYS */;
INSERT INTO `hibernate_unique_key`
VALUES (2001);
/*!40000 ALTER TABLE `hibernate_unique_key`
    ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `instrument`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `instrument`
(
    `instrument_pk_id` bigint(20)   NOT NULL,
    `type`             varchar(200)  DEFAULT NULL,
    `manufacturer`     varchar(2000) DEFAULT NULL,
    `model_name`       varchar(200)  DEFAULT NULL,
    `created_date`     datetime     NOT NULL,
    `created_by`       varchar(200) NOT NULL,
    PRIMARY KEY (`instrument_pk_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `instrument_to_review`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `instrument_to_review`
(
    `instrument_pk_id`        bigint(20) NOT NULL,
    `instrument_config_pk_id` bigint(20) NOT NULL,
    `characterization_pk_id`  bigint(20) NOT NULL,
    `instrument_type`         varchar(200) DEFAULT NULL,
    `description`             text
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `keyword`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `keyword`
(
    `keyword_pk_id` bigint(20)   NOT NULL,
    `name`          varchar(100) NOT NULL,
    PRIMARY KEY (`keyword_pk_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `keyword_file`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `keyword_file`
(
    `keyword_pk_id` bigint(20) NOT NULL,
    `file_pk_id`    bigint(20) NOT NULL,
    PRIMARY KEY (`keyword_pk_id`, `file_pk_id`),
    KEY `keyword_pk_id` (`keyword_pk_id`),
    KEY `lab_file_pk_id` (`file_pk_id`),
    CONSTRAINT `FK_keyword_file_file` FOREIGN KEY (`file_pk_id`) REFERENCES `file` (`file_pk_id`),
    CONSTRAINT `FK_keyword_file_keyword` FOREIGN KEY (`keyword_pk_id`) REFERENCES `keyword` (`keyword_pk_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `organization`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `organization`
(
    `organization_pk_id` bigint(20)   NOT NULL,
    `name`               varchar(200) NOT NULL,
    `streetAddress1`     varchar(200) DEFAULT NULL,
    `streetAddress2`     varchar(200) DEFAULT NULL,
    `city`               varchar(100) DEFAULT NULL,
    `state`              varchar(100) DEFAULT NULL,
    `postal_code`        varchar(10)  DEFAULT NULL,
    `country`            varchar(100) DEFAULT NULL,
    `created_date`       datetime     NOT NULL,
    `created_by`         varchar(200) NOT NULL,
    PRIMARY KEY (`organization_pk_id`),
    UNIQUE KEY `name` (`name`),
    UNIQUE KEY `organization_pk_id` (`organization_pk_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `point_of_contact`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `point_of_contact`
(
    `poc_pk_id`          bigint(20)   NOT NULL,
    `role`               varchar(200) DEFAULT NULL,
    `first_name`         varchar(200) DEFAULT NULL,
    `last_name`          varchar(200) DEFAULT NULL,
    `middle_initial`     varchar(50)  DEFAULT NULL,
    `phone`              varchar(50)  DEFAULT NULL,
    `email`              varchar(200) DEFAULT NULL,
    `created_date`       datetime     NOT NULL,
    `created_by`         varchar(200) NOT NULL,
    `organization_pk_id` bigint(20)   DEFAULT NULL,
    PRIMARY KEY (`poc_pk_id`),
    KEY `organization_pk_id` (`organization_pk_id`),
    CONSTRAINT `FK_point_of_contact_organization` FOREIGN KEY (`organization_pk_id`) REFERENCES `organization` (`organization_pk_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `sample`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sample`
(
    `sample_pk_id`          bigint(20)   NOT NULL,
    `sample_name`           varchar(200) NOT NULL,
    `created_date`          datetime     NOT NULL,
    `created_by`            varchar(200) NOT NULL,
    `primary_contact_pk_id` bigint(20) DEFAULT NULL,
    PRIMARY KEY (`sample_pk_id`),
    UNIQUE KEY `sample_name` (`sample_name`),
    UNIQUE KEY `sample_pk_id` (`sample_pk_id`),
    KEY `primary_contact_pk_id` (`primary_contact_pk_id`),
    CONSTRAINT `FK_sample_point_of_contact` FOREIGN KEY (`primary_contact_pk_id`) REFERENCES `point_of_contact` (`poc_pk_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `composition`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `composition`
(
    `composition_pk_id` bigint(20) NOT NULL,
    `sample_pk_id`      bigint(20) DEFAULT NULL,
    PRIMARY KEY (`composition_pk_id`),
    UNIQUE KEY `composition_pk_id` (`composition_pk_id`),
    KEY `particle_sample_pk_id` (`sample_pk_id`),
    CONSTRAINT `FK_composition_sample` FOREIGN KEY (`sample_pk_id`) REFERENCES `sample` (`sample_pk_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `chemical_association`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `chemical_association`
(
    `chemical_association_pk_id`      bigint(20)   NOT NULL,
    `composition_pk_id`               bigint(20)   DEFAULT NULL,
    `associated_element_a_pk_id`      bigint(20)   NOT NULL,
    `associated_element_b_pk_id`      bigint(20)   NOT NULL,
    `description`                     text,
    `created_by`                      varchar(200) NOT NULL,
    `created_date`                    datetime     NOT NULL,
    `discriminator`                   varchar(200) DEFAULT NULL,
    `attachment_bond_type`            varchar(200) DEFAULT NULL,
    `other_chemical_association_type` varchar(200) DEFAULT NULL,
    PRIMARY KEY (`chemical_association_pk_id`),
    KEY `associated_element_a_pk_id` (`associated_element_a_pk_id`),
    KEY `associated_element_b_pk_id` (`associated_element_b_pk_id`),
    KEY `composition_pk_id` (`composition_pk_id`),
    CONSTRAINT `FK_chemical_association_associated_element_a` FOREIGN KEY (`associated_element_a_pk_id`) REFERENCES `associated_element` (`associated_element_pk_id`),
    CONSTRAINT `FK_chemical_association_associated_element_b` FOREIGN KEY (`associated_element_b_pk_id`) REFERENCES `associated_element` (`associated_element_pk_id`),
    CONSTRAINT `fk_ca_entry_comp` FOREIGN KEY (`composition_pk_id`) REFERENCES `composition` (`composition_pk_id`) ON DELETE CASCADE
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `chemical_association_file`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `chemical_association_file`
(
    `chemical_association_pk_id` bigint(20) NOT NULL,
    `file_pk_id`                 bigint(20) NOT NULL,
    PRIMARY KEY (`chemical_association_pk_id`, `file_pk_id`),
    KEY `chemical_association_pk_id` (`chemical_association_pk_id`),
    KEY `file_pk_id` (`file_pk_id`),
    CONSTRAINT `FK_chemical_association_file_chemical_association` FOREIGN KEY (`chemical_association_pk_id`) REFERENCES `chemical_association` (`chemical_association_pk_id`),
    CONSTRAINT `FK_chemical_association_file_file` FOREIGN KEY (`file_pk_id`) REFERENCES `file` (`file_pk_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;
--
-- Table structure for table `nanomaterial_entity`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nanomaterial_entity`
(
    `nanomaterial_entity_pk_id` bigint(20)   NOT NULL,
    `composition_pk_id`         bigint(20)   NOT NULL,
    `discriminator`             varchar(200) DEFAULT NULL,
    `description`               text,
    `created_by`                varchar(200) NOT NULL,
    `created_date`              datetime     NOT NULL,
    PRIMARY KEY (`nanomaterial_entity_pk_id`),
    KEY `composition_pk_id` (`composition_pk_id`),
    CONSTRAINT `FK_nanomaterial_entity_composition` FOREIGN KEY (`composition_pk_id`) REFERENCES `composition` (`composition_pk_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `liposome`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `liposome`
(
    `liposome_pk_id` bigint(20) NOT NULL,
    `is_polymerized` tinyint(4)   DEFAULT NULL,
    `polymer_name`   varchar(200) DEFAULT NULL,
    PRIMARY KEY (`liposome_pk_id`),
    KEY `liposome_pk_id` (`liposome_pk_id`),
    CONSTRAINT `FK_liposome_nanomaterial_entity` FOREIGN KEY (`liposome_pk_id`) REFERENCES `nanomaterial_entity` (`nanomaterial_entity_pk_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `biopolymer_p`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `biopolymer_p`
(
    `biopolymer_pk_id` bigint(20)  NOT NULL,
    `type`             varchar(50) NOT NULL,
    `sequence`         text,
    `name`             varchar(200) DEFAULT NULL,
    PRIMARY KEY (`biopolymer_pk_id`),
    KEY `biopolymer_pk_id` (`biopolymer_pk_id`),
    CONSTRAINT `FK_biopolymer_p_nanomaterial_entity` FOREIGN KEY (`biopolymer_pk_id`) REFERENCES `nanomaterial_entity` (`nanomaterial_entity_pk_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `carbon_nanotube`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carbon_nanotube`
(
    `carbon_nanotube_pk_id` bigint(20) NOT NULL,
    `chirality`             varchar(100)   DEFAULT NULL,
    `diameter`              decimal(22, 3) DEFAULT NULL,
    `diameter_unit`         varchar(200)   DEFAULT NULL,
    `average_length`        decimal(22, 3) DEFAULT NULL,
    `average_length_unit`   varchar(200)   DEFAULT NULL,
    `wall_type`             varchar(100)   DEFAULT NULL,
    PRIMARY KEY (`carbon_nanotube_pk_id`),
    KEY `carbon_nanotube_pk_id` (`carbon_nanotube_pk_id`),
    CONSTRAINT `FK_carbon_nanotube_nanomaterial_entity` FOREIGN KEY (`carbon_nanotube_pk_id`) REFERENCES `nanomaterial_entity` (`nanomaterial_entity_pk_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `dendrimer`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dendrimer`
(
    `dendrimer_pk_id` bigint(20) NOT NULL,
    `generation`      decimal(22, 3) DEFAULT NULL,
    `branch`          varchar(200)   DEFAULT NULL,
    PRIMARY KEY (`dendrimer_pk_id`),
    KEY `dendrimer_pk_id` (`dendrimer_pk_id`),
    CONSTRAINT `FK_dendrimer_nanomaterial_entity` FOREIGN KEY (`dendrimer_pk_id`) REFERENCES `nanomaterial_entity` (`nanomaterial_entity_pk_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `emulsion`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `emulsion`
(
    `emulsion_pk_id` bigint(20) NOT NULL,
    `polymer_name`   varchar(200) DEFAULT NULL,
    `is_polymerized` tinyint(4)   DEFAULT NULL,
    PRIMARY KEY (`emulsion_pk_id`),
    KEY `emulsion_pk_id` (`emulsion_pk_id`),
    CONSTRAINT `FK_emulsion_nanomaterial_entity` FOREIGN KEY (`emulsion_pk_id`) REFERENCES `nanomaterial_entity` (`nanomaterial_entity_pk_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `fullerene`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fullerene`
(
    `fullerene_pk_id`       bigint(20) NOT NULL,
    `number_of_carbon`      decimal(22, 0) DEFAULT NULL,
    `average_diameter`      decimal(22, 3) DEFAULT NULL,
    `average_diameter_unit` varchar(200)   DEFAULT NULL,
    PRIMARY KEY (`fullerene_pk_id`),
    KEY `fullerene_pk_id` (`fullerene_pk_id`),
    CONSTRAINT `FK_fullerene_nanomaterial_entity` FOREIGN KEY (`fullerene_pk_id`) REFERENCES `nanomaterial_entity` (`nanomaterial_entity_pk_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `composing_element`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `composing_element`
(
    `composing_element_pk_id`   bigint(20)   NOT NULL,
    `element_type`              varchar(100) NOT NULL,
    `nanomaterial_entity_pk_id` bigint(20) DEFAULT NULL,
    PRIMARY KEY (`composing_element_pk_id`),
    KEY `composing_element_pk_id` (`composing_element_pk_id`),
    KEY `nanoparticle_entity_pk_id` (`nanomaterial_entity_pk_id`),
    CONSTRAINT `FK_composing_element_associated_element` FOREIGN KEY (`composing_element_pk_id`) REFERENCES `associated_element` (`associated_element_pk_id`),
    CONSTRAINT `FK_composing_element_nanoparticle_entity` FOREIGN KEY (`nanomaterial_entity_pk_id`) REFERENCES `nanomaterial_entity` (`nanomaterial_entity_pk_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;



--
-- Table structure for table `nano_function`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nano_function`
(
    `function_pk_id`               bigint(20)   NOT NULL,
    `description`                  text,
    `discriminator`                varchar(200) DEFAULT NULL,
    `functionalizing_entity_pk_id` bigint(20)   DEFAULT NULL,
    `composing_element_pk_id`      bigint(20)   DEFAULT NULL,
    `imaging_function_modality`    varchar(200) DEFAULT NULL,
    `other_function_type`          varchar(200) DEFAULT NULL,
    `created_by`                   varchar(200) NOT NULL,
    `created_date`                 datetime     NOT NULL,
    PRIMARY KEY (`function_pk_id`),
    KEY `composing_element_pk_id` (`composing_element_pk_id`),
    KEY `functionalizing_entity_pk_id` (`functionalizing_entity_pk_id`),
    CONSTRAINT `FK_function_composing_element` FOREIGN KEY (`composing_element_pk_id`) REFERENCES `composing_element` (`composing_element_pk_id`),
    CONSTRAINT `FK_function_functionalizing_entity` FOREIGN KEY (`functionalizing_entity_pk_id`) REFERENCES `functionalizing_entity` (`functionalizing_entity_pk_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `nanomaterial_entity_file`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nanomaterial_entity_file`
(
    `nanomaterial_entity_pk_id` bigint(20) NOT NULL,
    `file_pk_id`                bigint(20) NOT NULL,
    PRIMARY KEY (`nanomaterial_entity_pk_id`, `file_pk_id`),
    KEY `file_pk_id` (`file_pk_id`),
    KEY `nanoparticle_entity_pk_id` (`nanomaterial_entity_pk_id`),
    CONSTRAINT `FK_nanomaterial_entity_file_file` FOREIGN KEY (`file_pk_id`) REFERENCES `file` (`file_pk_id`),
    CONSTRAINT `FK_nanomaterial_entity_file_nanomaterial_entity` FOREIGN KEY (`nanomaterial_entity_pk_id`) REFERENCES `nanomaterial_entity` (`nanomaterial_entity_pk_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;





--
-- Table structure for table `other_functionalizing_entity`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `other_functionalizing_entity`
(
    `other_func_entity_pk_id` bigint(20)   NOT NULL,
    `type`                    varchar(200) NOT NULL,
    PRIMARY KEY (`other_func_entity_pk_id`),
    KEY `other_func_entity_pk_id` (`other_func_entity_pk_id`),
    CONSTRAINT `FK_other_functionalizing_entity_functionalizing_entity` FOREIGN KEY (`other_func_entity_pk_id`) REFERENCES `functionalizing_entity` (`functionalizing_entity_pk_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `other_nanomaterial_entity`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `other_nanomaterial_entity`
(
    `other_nanomaterial_entity_pk_id` bigint(20)   NOT NULL,
    `type`                            varchar(200) NOT NULL,
    PRIMARY KEY (`other_nanomaterial_entity_pk_id`),
    KEY `other_nanoparticle_entity_pk_id` (`other_nanomaterial_entity_pk_id`),
    CONSTRAINT `FK_other_nanomaterial_entity_nanomaterial_entity` FOREIGN KEY (`other_nanomaterial_entity_pk_id`) REFERENCES `nanomaterial_entity` (`nanomaterial_entity_pk_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;




--
-- Table structure for table `polymer`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `polymer`
(
    `polymer_pk_id`     bigint(20) NOT NULL,
    `is_cross_linked`   tinyint(4)     DEFAULT NULL,
    `cross_link_degree` decimal(22, 3) DEFAULT NULL,
    `initiator`         varchar(200)   DEFAULT NULL,
    PRIMARY KEY (`polymer_pk_id`),
    KEY `polymer_pk_id` (`polymer_pk_id`),
    CONSTRAINT `FK_polymer_nanomaterial_entity` FOREIGN KEY (`polymer_pk_id`) REFERENCES `nanomaterial_entity` (`nanomaterial_entity_pk_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `protocol`
--

/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `protocol`
(
    `protocol_pk_id`        bigint(20)   NOT NULL,
    `protocol_name`         varchar(2000) DEFAULT NULL,
    `protocol_type`         varchar(2000) DEFAULT NULL,
    `created_by`            varchar(200) NOT NULL,
    `created_date`          datetime     NOT NULL,
    `protocol_abbreviation` varchar(200)  DEFAULT NULL,
    `protocol_version`      varchar(200)  DEFAULT NULL,
    `file_pk_id`            bigint(20)    DEFAULT NULL,
    PRIMARY KEY (`protocol_pk_id`),
    UNIQUE KEY `protocol_pk_id` (`protocol_pk_id`),
    KEY `FK_protocol_file` (`file_pk_id`),
    CONSTRAINT `FK_protocol_file` FOREIGN KEY (`file_pk_id`) REFERENCES `file` (`file_pk_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;




--
-- Table structure for table `characterization`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `characterization`
(
    `characterization_pk_id`    bigint(20)   NOT NULL,
    `design_method_description` text,
    `created_date`              datetime     NOT NULL,
    `created_by`                varchar(200) NOT NULL,
    `protocol_pk_id`            bigint(20)   DEFAULT NULL,
    `sample_pk_id`              bigint(20)   DEFAULT NULL,
    `discriminator`             varchar(50)  NOT NULL,
    `cytotoxicity_cell_line`    text,
    `surface_is_hydrophobic`    tinyint(4)   DEFAULT NULL,
    `characterization_date`     datetime     DEFAULT NULL,
    `poc_pk_id`                 bigint(20)   DEFAULT NULL,
    `transfection_cell_line`    text,
    `analysis_conclusion`       text,
    `enzyme_induction_enzyme`   varchar(200) DEFAULT NULL,
    `other_char_assay_category` varchar(200) DEFAULT NULL,
    `other_char_name`           varchar(200) DEFAULT NULL,
    `assay_type`                varchar(200) DEFAULT NULL,
    `targeting_cell_line`       text,
    PRIMARY KEY (`characterization_pk_id`),
    KEY `particle_sample_pk_id` (`sample_pk_id`),
    KEY `protocol_file_pk_id` (`protocol_pk_id`),
    CONSTRAINT `FK_characterization_protocol` FOREIGN KEY (`protocol_pk_id`) REFERENCES `protocol` (`protocol_pk_id`),
    CONSTRAINT `FK_characterization_sample` FOREIGN KEY (`sample_pk_id`) REFERENCES `sample` (`sample_pk_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `physical_state`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `physical_state`
(
    `physical_state_pk_id` bigint(20)   NOT NULL,
    `type`                 varchar(200) NOT NULL,
    PRIMARY KEY (`physical_state_pk_id`),
    KEY `physical_state_pk_id` (`physical_state_pk_id`),
    CONSTRAINT `FK_physical_state_characterization` FOREIGN KEY (`physical_state_pk_id`) REFERENCES `characterization` (`characterization_pk_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;


-- Table structure for table `finding`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `finding`
(
    `finding_pk_id`          bigint(20)   NOT NULL,
    `characterization_pk_id` bigint(20) DEFAULT NULL,
    `created_by`             varchar(200) NOT NULL,
    `created_date`           datetime     NOT NULL,
    UNIQUE KEY `finding_pk_id` (`finding_pk_id`),
    KEY `characterization_pk_id` (`characterization_pk_id`),
    CONSTRAINT `FK_finding_characterization` FOREIGN KEY (`characterization_pk_id`) REFERENCES `characterization` (`characterization_pk_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `datum`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `datum`
(
    `datum_pk_id`   bigint(20)      NOT NULL,
    `name`          varchar(200)    NOT NULL,
    `value`         decimal(30, 10) NOT NULL,
    `value_type`    varchar(200) DEFAULT NULL,
    `value_unit`    varchar(200) DEFAULT NULL,
    `created_by`    varchar(200)    NOT NULL,
    `created_date`  datetime        NOT NULL,
    `finding_pk_id` bigint(20)   DEFAULT NULL,
    `file_pk_id`    bigint(20)   DEFAULT NULL,
    `numberMod`     varchar(20)  DEFAULT '=',
    PRIMARY KEY (`datum_pk_id`),
    KEY `file_pk_id` (`file_pk_id`),
    KEY `finding_pk_id` (`finding_pk_id`),
    CONSTRAINT `FK_datum_file` FOREIGN KEY (`file_pk_id`) REFERENCES `file` (`file_pk_id`),
    CONSTRAINT `FK_datum_finding` FOREIGN KEY (`finding_pk_id`) REFERENCES `finding` (`finding_pk_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `datum_condition`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `datum_condition`
(
    `datum_pk_id`     bigint(20) NOT NULL,
    `condition_pk_id` bigint(20) NOT NULL,
    PRIMARY KEY (`datum_pk_id`, `condition_pk_id`),
    KEY `datum_pk_id` (`datum_pk_id`),
    KEY `condition_pk_id` (`condition_pk_id`),
    CONSTRAINT `FK_datum_condition_datum` FOREIGN KEY (`datum_pk_id`) REFERENCES `datum` (`datum_pk_id`),
    CONSTRAINT `FK_datum_condition_experiment_condition` FOREIGN KEY (`condition_pk_id`) REFERENCES `experiment_condition` (`condition_pk_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `finding_file`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `finding_file`
(
    `finding_pk_id` bigint(20) NOT NULL,
    `file_pk_id`    bigint(20) NOT NULL,
    PRIMARY KEY (`finding_pk_id`, `file_pk_id`),
    KEY `file_pk_id` (`file_pk_id`),
    KEY `finding_pk_id` (`finding_pk_id`),
    CONSTRAINT `FK_finding_file_file` FOREIGN KEY (`file_pk_id`) REFERENCES `file` (`file_pk_id`),
    CONSTRAINT `FK_finding_file_finding` FOREIGN KEY (`finding_pk_id`) REFERENCES `finding` (`finding_pk_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `keyword_sample`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `keyword_sample`
(
    `keyword_pk_id` bigint(20) NOT NULL,
    `sample_pk_id`  bigint(20) NOT NULL,
    PRIMARY KEY (`keyword_pk_id`, `sample_pk_id`),
    KEY `keyword_pk_id` (`keyword_pk_id`),
    KEY `particle_sample_pk_id` (`sample_pk_id`),
    CONSTRAINT `FK_keyword_sample_keyword` FOREIGN KEY (`keyword_pk_id`) REFERENCES `keyword` (`keyword_pk_id`),
    CONSTRAINT `FK_keyword_sample_sample` FOREIGN KEY (`sample_pk_id`) REFERENCES `sample` (`sample_pk_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;



--
-- Table structure for table `composition_file`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `composition_file`
(
    `composition_pk_id` bigint(20) NOT NULL,
    `file_pk_id`        bigint(20) NOT NULL,
    PRIMARY KEY (`composition_pk_id`, `file_pk_id`),
    KEY `composition_pk_id` (`composition_pk_id`),
    KEY `file_pk_id` (`file_pk_id`),
    CONSTRAINT `FK_composition_file_composition` FOREIGN KEY (`composition_pk_id`) REFERENCES `composition` (`composition_pk_id`),
    CONSTRAINT `FK_composition_file_file` FOREIGN KEY (`file_pk_id`) REFERENCES `file` (`file_pk_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;



--
-- Table structure for table `sample_other_poc`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sample_other_poc`
(
    `sample_pk_id` bigint(20) NOT NULL,
    `poc_pk_id`    bigint(20) NOT NULL,
    PRIMARY KEY (`sample_pk_id`, `poc_pk_id`),
    KEY `sample_pk_id` (`sample_pk_id`),
    KEY `poc_pk_id` (`poc_pk_id`),
    CONSTRAINT `FK_sample_other_poc_point_of_contact` FOREIGN KEY (`poc_pk_id`) REFERENCES `point_of_contact` (`poc_pk_id`),
    CONSTRAINT `FK_sample_other_poc_sample` FOREIGN KEY (`sample_pk_id`) REFERENCES `sample` (`sample_pk_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `sample_publication`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sample_publication`
(
    `sample_pk_id`      bigint(20) NOT NULL,
    `publication_pk_id` bigint(20) NOT NULL,
    KEY `particle_sample_pk_id` (`sample_pk_id`),
    KEY `file_pk_id` (`publication_pk_id`),
    CONSTRAINT `FK_sample_publication_publication` FOREIGN KEY (`publication_pk_id`) REFERENCES `publication` (`publication_pk_id`),
    CONSTRAINT `FK_sample_publication_sample` FOREIGN KEY (`sample_pk_id`) REFERENCES `sample` (`sample_pk_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `shape`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shape`
(
    `shape_pk_id`        bigint(20)   NOT NULL,
    `max_dimension`      decimal(22, 3) DEFAULT NULL,
    `min_dimension`      decimal(22, 3) DEFAULT NULL,
    `type`               varchar(200) NOT NULL,
    `min_dimension_unit` varchar(200)   DEFAULT NULL,
    `max_dimension_unit` varchar(200)   DEFAULT NULL,
    `aspect_ratio`       decimal(22, 3) DEFAULT NULL,
    PRIMARY KEY (`shape_pk_id`),
    KEY `shape_pk_id` (`shape_pk_id`),
    CONSTRAINT `FK_shape_characterization` FOREIGN KEY (`shape_pk_id`) REFERENCES `characterization` (`characterization_pk_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `small_molecule`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `small_molecule`
(
    `small_molecule_pk_id` bigint(20) NOT NULL,
    `alternate_name`       varchar(200) DEFAULT NULL,
    PRIMARY KEY (`small_molecule_pk_id`),
    KEY `small_molecule_pk_id` (`small_molecule_pk_id`),
    CONSTRAINT `FK_small_molecule_functionalizing_entity` FOREIGN KEY (`small_molecule_pk_id`) REFERENCES `functionalizing_entity` (`functionalizing_entity_pk_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `solubility`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `solubility`
(
    `solubility_pk_id`            bigint(20) NOT NULL,
    `solvent`                     varchar(200)   DEFAULT NULL,
    `critical_concentration`      decimal(22, 3) DEFAULT NULL,
    `critical_concentration_unit` varchar(200)   DEFAULT NULL,
    `is_soluble`                  tinyint(4)     DEFAULT NULL,
    PRIMARY KEY (`solubility_pk_id`),
    KEY `solubility_pk_id` (`solubility_pk_id`),
    CONSTRAINT `FK_solubility_characterization` FOREIGN KEY (`solubility_pk_id`) REFERENCES `characterization` (`characterization_pk_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;



--
-- Table structure for table `target`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `target`
(
    `target_pk_id`             bigint(20)   NOT NULL,
    `discriminator`            varchar(200)  DEFAULT NULL,
    `name`                     varchar(200)  DEFAULT NULL,
    `description`              varchar(2000) DEFAULT NULL,
    `targeting_function_pk_id` bigint(20)    DEFAULT NULL,
    `antigen_species`          varchar(200)  DEFAULT NULL,
    `other_target_type`        varchar(200)  DEFAULT NULL,
    `created_by`               varchar(200) NOT NULL,
    `created_date`             datetime     NOT NULL,
    PRIMARY KEY (`target_pk_id`),
    KEY `targeting_function_pk_id` (`targeting_function_pk_id`),
    CONSTRAINT `FK_target_function` FOREIGN KEY (`targeting_function_pk_id`) REFERENCES `nano_function` (`function_pk_id`) ON DELETE CASCADE
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `technique`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `technique`
(
    `technique_pk_id` bigint(20)   NOT NULL,
    `type`            varchar(200) NOT NULL,
    `abbreviation`    varchar(50) DEFAULT NULL,
    `created_date`    datetime     NOT NULL,
    `created_by`      varchar(200) NOT NULL,
    PRIMARY KEY (`technique_pk_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `experiment_config`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `experiment_config`
(
    `experiment_config_pk_id` bigint(20)   NOT NULL,
    `description`             text,
    `created_date`            datetime     NOT NULL,
    `created_by`              varchar(200) NOT NULL,
    `characterization_pk_id`  bigint(20) DEFAULT NULL,
    `technique_pk_id`         bigint(20) DEFAULT NULL,
    PRIMARY KEY (`experiment_config_pk_id`),
    KEY `characterization_pk_id` (`characterization_pk_id`),
    KEY `technique_pk_id` (`technique_pk_id`),
    CONSTRAINT `FK_experiment_config_characterization` FOREIGN KEY (`characterization_pk_id`) REFERENCES `characterization` (`characterization_pk_id`),
    CONSTRAINT `FK_experiment_config_technique` FOREIGN KEY (`technique_pk_id`) REFERENCES `technique` (`technique_pk_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `experiment_config_instrument`
--


/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `experiment_config_instrument`
(
    `experiment_config_pk_id` bigint(20) NOT NULL,
    `instrument_pk_id`        bigint(20) NOT NULL,
    PRIMARY KEY (`experiment_config_pk_id`, `instrument_pk_id`),
    KEY `experiment_config_pk_id` (`experiment_config_pk_id`),
    KEY `instrument_pk_id` (`instrument_pk_id`),
    CONSTRAINT `FK_experiment_config_instrument_experiment_config` FOREIGN KEY (`experiment_config_pk_id`) REFERENCES `experiment_config` (`experiment_config_pk_id`),
    CONSTRAINT `FK_experiment_config_instrument_instrument` FOREIGN KEY (`instrument_pk_id`) REFERENCES `instrument` (`instrument_pk_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */;



-- synthesis
CREATE TABLE `canano`.`synthesis`
(
    `synthesis_pk_id` BIGINT(20) NOT NULL COMMENT 'synthesis_pk_id',
    `sample_pk_id`    BIGINT(20) NOT NULL COMMENT 'sample_pk_id',
    PRIMARY KEY (`synthesis_pk_id`),
    CONSTRAINT `FK_sample_TO_synthesis` FOREIGN KEY (`sample_pk_id`) REFERENCES `sample` (`sample_pk_id`)
);



-- synthesis_material

CREATE TABLE `canano`.`synthesis_material`
(
    `synthesis_material_pk_id` BIGINT(20)   NOT NULL COMMENT 'synthesis_material_pk_id', -- synthesis_material_pk_id
    `synthesis_pk_id`          BIGINT(20)   NOT NULL COMMENT 'synthesis_pk_id',          -- synthesis_pk_id
    `protocol_pk_id`           BIGINT(20)   NULL COMMENT 'protocol_pk_id',               -- protocol_pk_id
    `description`              TEXT         NULL COMMENT 'description',                  -- description
    `created_date`             DATETIME     NOT NULL COMMENT 'created_date',             -- created_date
    `created_by`               VARCHAR(200) NOT NULL COMMENT 'created_by',               -- created_by
    PRIMARY KEY (`synthesis_material_pk_id`),
    CONSTRAINT  `FK_synthesis_TO_synthesis_material` FOREIGN KEY (`synthesis_pk_id`) REFERENCES `synthesis` (`synthesis_pk_id`),
    CONSTRAINT `FK_protocol_TO_synthesis_material` FOREIGN KEY (`protocol_pk_id`) REFERENCES `protocol` (`protocol_pk_id`)
);


-- synthesis_material_file
CREATE TABLE `canano`.`synthesis_material_file`
(
    `synthesis_material_pk_id` BIGINT(20) NOT NULL COMMENT 'synthesis_material_pk_id', -- synthesis_material_pk_id
    `file_pk_id`               BIGINT(20) NOT NULL COMMENT 'file_pk_id',                -- file_pk_id
    PRIMARY KEY (`synthesis_material_pk_id`, `file_pk_id`),
    CONSTRAINT  `FK_synthesis_material_TO_synthesis_material_file` FOREIGN KEY (`synthesis_material_pk_id`) REFERENCES `synthesis_material` (`synthesis_material_pk_id`),
    CONSTRAINT  `FK_file_TO_synthesis_material_file` FOREIGN KEY(`file_pk_id`)  REFERENCES `file` (`file_pk_id`)
);


-- supplier

CREATE TABLE `canano`.`supplier`
(
    `supplier_pk_id` BIGINT(20)   NOT NULL COMMENT 'supplier_pk_id',
    `supplier_name`  VARCHAR(200) NOT NULL COMMENT 'supplier_name', -- supplier_name
    `lot`            VARCHAR(50)  NULL COMMENT 'lot' ,               -- lot
    PRIMARY KEY (`supplier_pk_id`)
);


-- synthesis_material_element

CREATE TABLE `canano`.`synthesis_material_element`
(
    `synthesis_material_element_pk_id` BIGINT(20)     NOT NULL COMMENT 'synthesis_material_element_pk_id', -- synthesis_material_element_pk_id
    `synthesis_material_pk_id`         BIGINT(20)     NOT NULL COMMENT 'synthesis_material_pk_id',         -- synthesis_material_pk_id
    `molecular_formula`                VARCHAR(2000)  NULL COMMENT 'molecular_formula',                    -- molecular_formula
    `molecular_formula_type`           VARCHAR(200)   NULL COMMENT 'molecular_formula_type',               -- molecular_formula_type
    `description`                      TEXT           NULL COMMENT 'description',                          -- description
    `created_by`                       VARCHAR(200)   NOT NULL COMMENT 'created_by',                       -- created_by
    `created_date`                     DATETIME       NOT NULL COMMENT 'created_date',                     -- created_date
    `chemical_name`                    VARCHAR(200)   NULL COMMENT 'chemical_name',                        -- chemical_name
    `value`                            DECIMAL(22, 3) NULL COMMENT 'value',                                -- value
    `value_unit`                       VARCHAR(200)   NULL COMMENT 'value_unit',                           -- value_unit
    `pub_chem_datasource_name`         VARCHAR(200)   NULL COMMENT 'pub_chem_datasource_name',             -- pub_chem_datasource_name
    `pub_chem_id`                      BIGINT(20)     NULL COMMENT 'pub_chem_id',                          -- pub_chem_id
    `supplier_pk_id`                   BIGINT(20)     NULL COMMENT 'supplier_pk_id',
    `type`                             VARCHAR(200)   NOT NULL,
    PRIMARY KEY (`synthesis_material_element_pk_id`),
    CONSTRAINT  `FK_synthesis_material_TO_synthesis_material_element` FOREIGN KEY (`synthesis_material_pk_id`) REFERENCES `synthesis_material` (`synthesis_material_pk_id`),
    CONSTRAINT  `FK_synthesis_material_element_TO_supplier` FOREIGN KEY (`supplier_pk_id`) REFERENCES `supplier` (`supplier_pk_id`)
);




-- synthesis_functionalization

CREATE TABLE `canano`.`synthesis_functionalization`
(
    `synthesis_functionalization_pk_id` BIGINT(20)   NOT NULL COMMENT 'synthesis_functionalization_pk_id', -- synthesis_functionalization_pk_id
    `synthesis_pk_id`                   BIGINT(20)   NULL COMMENT 'synthesis_pk_id',                       -- synthesis_pk_id
    `protocol_pk_id`                    BIGINT(20)   NULL COMMENT 'protocol_pk_id',                        -- protocol_pk_id
    `description`                       TEXT         NULL COMMENT 'description',                           -- description
    `created_date`                      DATETIME     NOT NULL COMMENT 'created_date',                      -- created_date
    `created_by`                        VARCHAR(200) NOT NULL COMMENT 'created_by',                        -- created_by
    `type`                              VARCHAR(200) NULL COMMENT 'type',                                   -- type
    PRIMARY KEY (`synthesis_functionalization_pk_id`),
    CONSTRAINT `FK_synthesis_TO_synthesis_functionalization` FOREIGN KEY (`synthesis_pk_id`) REFERENCES `synthesis` (`synthesis_pk_id`),
    CONSTRAINT `FK_protocol_TO_synthesis_functionalization` FOREIGN KEY (`protocol_pk_id`) REFERENCES `protocol` (`protocol_pk_id`)
);



-- synthesis_functionalization_file
CREATE TABLE `canano`.`synthesis_functionalization_file`
(
    `synthesis_functionalization_pk_id` BIGINT(20) NOT NULL COMMENT 'synthesis_material_pk_id', -- synthesis_material_pk_id
    `file_pk_id`                        BIGINT(20) NOT NULL COMMENT 'file_pk_id',                -- file_pk_id
    PRIMARY KEY (`synthesis_functionalization_pk_id`, `file_pk_id`),
    CONSTRAINT `FK_syn_func_TO_syn_func_file` FOREIGN KEY (`synthesis_functionalization_pk_id`) REFERENCES `synthesis_functionalization` (`synthesis_functionalization_pk_id`),
    CONSTRAINT `FK_file_TO_synthesis_file` FOREIGN KEY (`file_pk_id`) REFERENCES `file` (`file_pk_id`)
);



-- synthesis_purification

CREATE TABLE `canano`.`synthesis_purification`
(
    `synthesis_purification_pk_id` BIGINT(20)      NOT NULL COMMENT 'synthesis_purification_pk_id', -- synthesis_purification_pk_id
    `synthesis_pk_id`              BIGINT(20)      NULL COMMENT 'synthesis_pk_id',                  -- synthesis_pk_id
    `protocol_pk_id`               BIGINT(20)      NULL COMMENT 'protocol_pk_id',               -- protocol_pk_id
    `type`                         VARCHAR(200)    NULL COMMENT 'type',                             -- type
    `method_name`                  VARCHAR(200)    NULL COMMENT 'method_name',                      -- method_name
    `design_method_description`    TEXT            NULL COMMENT 'design_method_description',        -- design_method_description
    `created_by`                   VARCHAR(200)    NOT NULL COMMENT 'created_by',                   -- created_by
    `created_date`                 DATETIME        NOT NULL COMMENT 'created_date',                 -- created_date
    `yield`                        DECIMAL(30, 10) NULL COMMENT 'yield',
    `analysis`                     TEXT,
    PRIMARY KEY (`synthesis_purification_pk_id`),
    CONSTRAINT  `FK_synthesis_TO_synthesis_purification` FOREIGN KEY (`synthesis_pk_id`) REFERENCES `synthesis` (`synthesis_pk_id`),
    CONSTRAINT `FK_protocol_TO_synthesis_purification` FOREIGN KEY (`protocol_pk_id`) REFERENCES `protocol` (`protocol_pk_id`)
);




-- synthesis_functionalization_element

CREATE TABLE `canano`.`synthesis_functionalization_element`
(
    `synthesis_functionalization_element_pk_id` BIGINT(20)     NOT NULL COMMENT 'synthesis_functionalization_element_pk_id', -- synthesis_functionalization_element_pk_id
    `synthesis_functionalization_pk_id`         BIGINT(20)     NOT NULL COMMENT 'synthesis_functionalization_pk_id',         -- synthesis_functionalization_pk_id
    `molecular_formula`                         VARCHAR(2000)  NULL COMMENT 'molecular_formula',                             -- molecular_formula
    `molecular_formula_type`                    VARCHAR(200)   NULL COMMENT 'molecular_formula_type',                        -- molecular_formula_type
    `description`                               TEXT           NULL COMMENT 'description',                                   -- description
    `created_by`                                VARCHAR(200)   NOT NULL COMMENT 'created_by',                                -- created_by
    `created_date`                              DATETIME       NOT NULL COMMENT 'created_date',                              -- created_date
    `chemical_name`                             VARCHAR(200)   NULL COMMENT 'chemical_name',                                 -- chemical_name
    `value`                                     DECIMAL(22, 3) NULL COMMENT 'value',                                         -- value
    `value_unit`                                VARCHAR(200)   NULL COMMENT 'value_unit',                                    -- value_unit
    `pub_chem_datasource_name`                  VARCHAR(200)   NULL COMMENT 'pub_chem_datasource_name',                      -- pub_chem_datasource_name
    `pub_chem_id`                               BIGINT(20)     NULL COMMENT 'pub_chem_id',                                   -- pub_chem_id
    `type`                                      VARCHAR(200)   NULL COMMENT 'type',
    `activation_method`                         VARCHAR(200) DEFAULT NULL,
    `activation_effect`                         TEXT,
    PRIMARY KEY (`synthesis_functionalization_element_pk_id`),
    CONSTRAINT  `FK_synthesis_func_TO_synthesis_functionalization_element` FOREIGN KEY (`synthesis_functionalization_pk_id`)
        REFERENCES `synthesis_functionalization` (`synthesis_functionalization_pk_id`)
);



-- sme_inherent_function

CREATE TABLE `canano`.`sme_inherent_function`
(
    `sme_inherent_function_pk_id`      BIGINT(20)   NOT NULL COMMENT 'sme_inherent_function_pk_id',      -- sme_inherent__function_pk_id
    `synthesis_material_element_pk_id` BIGINT(20)   NOT NULL COMMENT 'synthesis_material_element_pk_id', -- synthesis_material_element_pk_id
    `type`                             VARCHAR(200) NULL COMMENT 'type',                                 -- type
    `description`                      TEXT         NULL COMMENT 'description',                           -- description
    PRIMARY KEY (`sme_inherent_function_pk_id`),
    CONSTRAINT  `FK_synthesis_material_element_TO_sme_inherent_function` FOREIGN KEY (`synthesis_material_element_pk_id`)
        REFERENCES `synthesis_material_element` (`synthesis_material_element_pk_id`)
);



-- sfe_inherent_function

CREATE TABLE `canano`.`sfe_inherent_function`
(
    `sfe_inherent_function_pk_id`               BIGINT(20)   NOT NULL COMMENT 'sfe_inherent_function_pk_id',
    `synthesis_functionalization_element_pk_id` BIGINT(20)   NOT NULL COMMENT 'synthesis_functionalization_element_pk_id',
    `type`                                      VARCHAR(200) NULL COMMENT 'type',
    `description`                               TEXT         NULL COMMENT 'description',
    PRIMARY KEY (`sfe_inherent_function_pk_id`),
    CONSTRAINT FOREIGN KEY `FK_synthesis_material_element_TO_sfe_inherent_function` (`synthesis_functionalization_element_pk_id`)
        REFERENCES `synthesis_functionalization_element` (`synthesis_functionalization_element_pk_id`)
);



-- synthesis_material_element_file

CREATE TABLE `canano`.`synthesis_material_element_file`
(
    `synthesis_material_element_pk_id` BIGINT(20) NOT NULL COMMENT 'synthesis_material_element_pk_id', -- synthesis_material_element_pk_id
    `file_pk_id`                       BIGINT(20) NOT NULL COMMENT 'file_pk_id',                        -- file_pk_id
    PRIMARY KEY (`synthesis_material_element_pk_id`,`file_pk_id`),
    CONSTRAINT `FK_synthesis_material_element_TO_synthesis_material_element_file` FOREIGN KEY (`synthesis_material_element_pk_id`)
        REFERENCES `synthesis_material_element` (`synthesis_material_element_pk_id`),
    CONSTRAINT `FK_file_TO_synthesis_material_element_file` FOREIGN KEY (`file_pk_id`) REFERENCES `file` (`file_pk_id`)
);



-- synthesis_functionalization_element_file

CREATE TABLE `canano`.`synthesis_functionalization_element_file`
(
    `synthesis_functionalization_element_pk_id` BIGINT(20) NOT NULL COMMENT 'synthesis_functionalization_element_file', -- synthesis_material_element_pk_id
    `file_pk_id`                                BIGINT(20) NOT NULL COMMENT 'file_pk_id',                                -- file_pk_id
    PRIMARY KEY (`synthesis_functionalization_element_pk_id`, `file_pk_id`),
    CONSTRAINT  `FK_synthesis_func_element_TO_sfe_element_file` FOREIGN KEY(`synthesis_functionalization_element_pk_id`)
        REFERENCES `synthesis_functionalization_element` (`synthesis_functionalization_element_pk_id`),
    CONSTRAINT `FK_file_TO_synthesis_functionalization_element_file` FOREIGN KEY(`file_pk_id`) REFERENCES `file` (`file_pk_id`)
);



-- synthesis_purity

CREATE TABLE `canano`.`synthesis_purity`
(
    `purity_pk_id`                 BIGINT(200)  NOT NULL COMMENT 'purity_pk_id',                 -- purity_pk_id
    `synthesis_purification_pk_id` BIGINT(20)   NOT NULL COMMENT 'synthesis_purification_pk_id', -- synthesis_purification_pk_id
    `created_by`                   VARCHAR(200) NOT NULL COMMENT 'created_by',                   -- created_by
    `created_date`                 DATETIME     NOT NULL COMMENT 'created_date',                  -- created_date
    PRIMARY KEY (`purity_pk_id`),
    CONSTRAINT `FK_synthesis_purity_to purification` FOREIGN KEY (`synthesis_purification_pk_id`) REFERENCES `synthesis_purification` (`synthesis_purification_pk_id`)
);





create table purity_datum
(
    purity_datum_pk_id BIGINT          not null,
    `name`             VARCHAR(200)    NOT NULL COMMENT 'name',
    `value`            DECIMAL(30, 10) NOT NULL COMMENT 'value',
    `value_type`       VARCHAR(200)    NULL COMMENT 'value_type',
    `value_unit`       VARCHAR(200)    NULL COMMENT 'value_unit',
    `created_by`       VARCHAR(200)    NOT NULL COMMENT 'created_by',
    `created_date`     DATETIME        NOT NULL COMMENT 'created_date',
    `numberMod`        VARCHAR(20)     NULL DEFAULT '=' COMMENT 'numberMod',
    `purity_pk_id`     BIGINT(200)     NULL COMMENT 'purity_pk_id',
    `file_pk_id`       BIGINT(20)      NULL COMMENT 'file_pk_id',
    PRIMARY KEY (`purity_datum_pk_id`),
    CONSTRAINT `FK_purity_TO_purity_datum` FOREIGN KEY (`purity_pk_id`) REFERENCES `synthesis_purity`(`purity_pk_id`),
    CONSTRAINT `FK_file_TO_purity_datum` FOREIGN KEY (`file_pk_id`) REFERENCES `file`(`file_pk_id`)
);




-- purity_file

CREATE TABLE `canano`.`purity_file`
(
    `purity_pk_id` BIGINT(200) NOT NULL COMMENT 'purity_pk_id', -- purity_pk_id
    `file_pk_id`   BIGINT(20)  NOT NULL COMMENT 'file_pk_id',    -- file_pk_id
    PRIMARY KEY (`purity_pk_id`,`file_pk_id`),
    CONSTRAINT `FK_purity_TO_purity_file` FOREIGN KEY (`purity_pk_id`) REFERENCES `synthesis_purity` (`purity_pk_id`),
    CONSTRAINT  `FK_file_TO_purity_file` FOREIGN KEY (`file_pk_id`) REFERENCES `file` (`file_pk_id`)
);



-- purification_config

CREATE TABLE `canano`.`purification_config`
(
    `purification_config_pk_id`    BIGINT(20)   NOT NULL COMMENT 'purification_config_pk_id', -- purification_config_pk_id
    `synthesis_purification_pk_id` BIGINT(20)   NULL COMMENT 'synthesis_purification_pk_id',  -- synthesis_purification_pk_id
    `technique_pk_id`              BIGINT(20)   NULL COMMENT 'technique_pk_id',               -- technique_pk_id
    `description`                  TEXT         NULL COMMENT 'description',                   -- description
    `created_by`                   VARCHAR(200) NOT NULL COMMENT 'created_by',                -- created_by
    `created_date`                 DATETIME     NOT NULL COMMENT 'created_date',              -- created_date
    PRIMARY KEY (`purification_config_pk_id`),
    CONSTRAINT  `FK_synthesis_purification_TO_purification_config` FOREIGN KEY (`synthesis_purification_pk_id`) REFERENCES `synthesis_purification` (`synthesis_purification_pk_id`),
    CONSTRAINT `FK_technique_TO_purification_config` FOREIGN KEY (`technique_pk_id`) REFERENCES `technique` (`technique_pk_id`)
);


-- purification_config_instrument

CREATE TABLE `canano`.`purification_config_instrument`
(
    `purification_config_pk_id` BIGINT(20) NOT NULL COMMENT 'purification_config_pk_id', -- purification_config_pk_id
    `instrument_pk_id`          BIGINT(20) NOT NULL COMMENT 'instrument_pk_id',           -- instrument_pk_id
    PRIMARY KEY (`purification_config_pk_id`, instrument_pk_id),
    CONSTRAINT `FK_purification_config_TO_purification_config_instrument` FOREIGN KEY (`purification_config_pk_id`)
        REFERENCES `purification_config` (`purification_config_pk_id`),
    CONSTRAINT `FK_instrument_TO_purification_config_instrument` FOREIGN KEY (`instrument_pk_id`) REFERENCES `instrument` (`instrument_pk_id`)
);




-- purity_datum_condition

CREATE TABLE `purity_datum_condition` (
    `datum_pk_id` bigint(20) NOT NULL COMMENT 'purity_datum_pk_id',
    `condition_pk_id` bigint(20) NOT NULL COMMENT 'condition_pk_id',
    `name` varchar(200) NOT NULL,
    `property` varchar(200) DEFAULT NULL,
    `value` varchar(200) NOT NULL,
    `value_unit` varchar(200) DEFAULT NULL,
    `value_type` varchar(200) DEFAULT NULL,
    `created_by` varchar(200) NOT NULL,
    `created_date` datetime NOT NULL,
    PRIMARY KEY (`condition_pk_id`),
    CONSTRAINT `FK_purity_datum_TO_purity_datum_condition` FOREIGN KEY (`datum_pk_id`) REFERENCES `purity_datum` (`purity_datum_pk_id`)
);
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Default data for table `acl_class`
--

LOCK TABLES `acl_class` WRITE;
/*!40000 ALTER TABLE `acl_class`
    DISABLE KEYS */;
INSERT INTO `acl_class`
VALUES
(17, 'gov.nih.nci.cananolab.dto.common.CollaborationGroupBean'),
(16, 'gov.nih.nci.cananolab.domain.common.PointOfContact'),
(15, 'gov.nih.nci.cananolab.domain.common.Organization'),
(14, 'gov.nih.nci.cananolab.dto.common.FileBean'),
(13, 'gov.nih.nci.cananolab.domain.common.Author'),
(12, 'gov.nih.nci.cananolab.dto.common.PublicationBean'),
(11, 'gov.nih.nci.cananolab.dto.common.ProtocolBean'),
(10, 'gov.nih.nci.cananolab.domain.common.Finding'),
(9, 'gov.nih.nci.cananolab.domain.common.ExperimentConfig'),
(8, 'gov.nih.nci.cananolab.domain.particle.Characterization'),
(7, 'gov.nih.nci.cananolab.dto.particle.composition.ChemicalAssociationBean'),
(6, 'gov.nih.nci.cananolab.dto.particle.composition.FunctionBean'),
(5, 'gov.nih.nci.cananolab.dto.particle.composition.FunctionalizingEntityBean'),
(4, 'gov.nih.nci.cananolab.dto.particle.composition.ComposingElementBean'),
(3, 'gov.nih.nci.cananolab.dto.particle.composition.NanomaterialEntityBean'),
(2, 'gov.nih.nci.cananolab.dto.particle.composition.CompositionBean'),
(1, 'gov.nih.nci.cananolab.dto.particle.SampleBean');
/*!40000 ALTER TABLE `acl_class`
    ENABLE KEYS */;
UNLOCK TABLES;


--
-- Default data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users`
    DISABLE KEYS */;
INSERT INTO `users`
VALUES
('canano_admin', '$2a$10$c5XRfWd.OcuIEG3clJntF.EKrF8RBB4vhKStkVirxpqC9B0ryyakS', 'caNanoLab', 'Guest', '', '',
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


--
-- Default data for table `authorities`
--

LOCK TABLES `authorities` WRITE;
/*!40000 ALTER TABLE `authorities`
    DISABLE KEYS */;
INSERT INTO `authorities`
VALUES ('canano_admin', 'ROLE_ADMIN'),
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


--
-- Default data for table `acl_sid`
--

LOCK TABLES `acl_sid` WRITE;
/*!40000 ALTER TABLE `acl_sid`
    DISABLE KEYS */;
INSERT INTO `acl_sid`
VALUES (1, 1, 'anonymousUser'),
       (2, 1, 'canano_admin'),
       (3, 1, 'canano_curator'),
       (4, 1, 'canano_guest'),
       (5, 1, 'canano_res1'),
       (6, 1, 'canano_res2'),
       (7, 1, 'guest1'),
       (8, 1, 'guest2'),
       (9, 1, 'guest3'),
       (10, 1, 'guest4'),
       (11, 1, 'guest5'),
       (12, 0, 'ROLE_ANONYMOUS'),
       (13, 0, 'ROLE_CURATOR'),
       (14, 0, 'ROLE_RESEARCHER'),
       (15, 0, 'ROLE_ADMIN');
/*!40000 ALTER TABLE `acl_sid`
    ENABLE KEYS */;
UNLOCK TABLES;


--
-- Default data for table `organization`
--

LOCK TABLES `organization` WRITE;
/*!40000 ALTER TABLE `organization`
    DISABLE KEYS */;
INSERT INTO `organization`
VALUES  (5931008, 'GATECH_EMORY', '', 'Emory University and Georgia Institute of Technology', 'Atlanta', 'GA', '30332',
         'USA', '2008-09-26 00:00:00', 'canano_admin'),
        (6455296, 'NWU', '', '', 'Chicago', 'IL', '60611', 'USA', '2008-09-30 00:00:00', 'canano_admin'),
        (7274496, 'STANFORD', 'Geballe Laboratory for Advanced Materials', 'Stanford University', 'Stanford', 'CA',
         '94305', 'USA', '2008-10-09 00:00:00', 'canano_admin'),
        (9568258, 'NEU_MIT_MGH', '', 'Northeastern University', 'Boston', 'MA', '', 'USA', '2009-08-31 00:00:00',
         'canano_admin'),
        (10125312, 'GATECH', 'School of Chemistry and Biochemistry', 'Georgia Institute of Technology', 'Atlanta', 'GA',
         '30332', 'USA', '2008-10-16 00:00:00', 'canano_admin'),
        (10289152, 'UNC', '', 'University of North Carolina', 'Chapel Hill', 'NC', '27599', 'USA', '2008-11-10 00:00:00',
         'canano_admin'),
        (11239424, 'CWRU', '2071 Martin Luther King Jr. Drive, Wickenden Building', '', 'Cleveland', 'OH', '44106',
         'USA', '2009-09-17 00:00:00', 'canano_admin'),
        (11239425, 'WU_SU_CHINA',
         'Key Laboratory of Biomedical Polymers of Ministry of Education, Department of Chemistry', 'Wuhan University',
         'Wuhan', '', '430072', 'People''s Republic of China', '2008-11-20 00:00:00', 'canano_admin'),
        (11239426, 'SNU_CHINA',
         'Department of Chemistry, and Department of Biology, Life and EnVironmental Science College, Shanghai Normal UniVersity',
         '100 Guilin Road', 'Shanghai', '', '200234', 'China', '2008-12-01 00:00:00', 'canano_admin'),
        (11239427, 'UM', '', 'University of Michigan', 'Ann Arbor', 'MI', '', 'USA', '2009-01-06 00:00:00',
         'canano_admin'),
        (11796480, 'VCU_VT_EHC', 'Department of Radiology, Sanger Hall, B3-021, 1101 E Marshall St, PO Box 980072',
         'Virginia Commonwealth University', 'Richmond', 'VA', '23298-0072', 'USA', '2009-03-10 00:00:00',
         'canano_admin'),
        (11796481, 'CAS_VT_VCU', '', 'Chinese Academy of Sciences', 'Beijing', '', '100080', 'China',
         '2009-03-11 00:00:00', 'canano_admin'),
        (11796482, 'WUSTL', 'Department of Radiology', 'Washington University School of Medicine', 'St Louis', 'MO',
         '63110', 'USA', '2009-03-30 00:00:00', 'canano_admin'),
        (11796484, 'TTU', 'Department of Chemical Engineering', 'Texas Tech University', 'Lubbock', 'TX', '79409', 'USA',
         '2009-04-06 00:00:00', 'canano_admin'),
        (11796485, 'UC_HU_UEN_GERMANY', 'Hautklinik, Photobiologisches Labor', 'Universitatsklinikum Charite', 'Berlin',
         '', '', 'Germany', '2009-05-07 00:00:00', 'canano_admin'),
        (12812288, 'GATECH_UCSF', '', 'Georgia Institute of Technology', 'Atlanta', 'GA', '30332', '',
         '2009-04-20 00:00:00', 'canano_admin'),
        (12812289, 'NEU_MGH_UP_FCCC', '', 'Northeastern University', 'Boston', 'MA', '', 'USA', '2009-05-06 00:00:00',
         'canano_admin'),
        (12812290, 'JST_AIST_FHU_TU_NEC_MU_JAPAN',
         'Department of Applied Chemistry, Faculty of Engineering, and Center for Future Chemistry,  Kyushu University',
         '744 Moto-oka, Nishi-ku,', 'Fukuoka', '', '', 'Japan', '2009-05-18 00:00:00', 'canano_admin'),
        (12976128, 'JSTA_FHU_NEC_MU_AIST_JAPAN', 'SORST, Japan Science and Technology Agency c/o NEC', '34 Miyukigaoka',
         'Tsukuba', 'Ibaraki', '305-8501', 'Japan', '2009-07-27 00:00:00', 'canano_admin'),
        (12976129, 'NEU', '', 'Northeastern University', 'Boston', 'MA', '', 'USA', '2009-05-22 00:00:00',
         'canano_admin'),
        (12976130, 'PURDUE', '', 'Purdue University', 'West Lafayette', 'IN', '', 'USA', '2009-06-08 00:00:00',
         'canano_admin'),
        (12976131, 'MSKCC_CU_UA',
         'Molecular Pharmacology and Chemistry Program and Departments of Medicine and Radiology',
         'Memorial Sloan Kettering Cancer Center', 'New York', 'NY', '10021', 'USA', '2009-08-19 00:00:00',
         'canano_admin'),
        (12976133, 'MIT_UC_BBIC_HST_CU', 'Department of Chemical Engineering Massachusetts Institute of Technology',
         '45 Carleton Street, E25-342', 'Cambridge', 'MA', '02139', 'USA', '2009-09-09 00:00:00', 'canano_admin'),
        (12976135, 'UAM_CSIC_IMDEA', 'Departamento de Biologia, Universidad Autonoma de Madrid,',
         'C/ Darwin 2, Cantoblanco', 'Madrid', '', '28049', 'Spain', '2009-09-11 00:00:00', 'canano_admin'),
        (12976136, 'UI', 'Department of Chemistry', 'University of Iowa', 'Iowa City', 'IA', '52242', 'USA',
         '2009-09-14 00:00:00', 'canano_admin'),
        (12976137, 'WSU', 'Department of Pharmaceutical Sciences', 'Wayne State University', 'Detroit', 'MI', '48202',
         'USA', '2009-09-29 00:00:00', 'canano_admin'),
        (12976138, 'CP_UCLA_CalTech', 'Chemical Engineering', 'California Institute of Technology', 'Pasadena', 'CA',
         '91125', 'USA', '2009-10-05 00:00:00', 'canano_admin'),
        (12976139, 'NIOSH', 'National Institute for Occupational Safety and Health',
         'Health Effects Laboratory Division', 'Morgantown', 'WV', '', 'USA', '2009-10-07 00:00:00', 'canano_admin'),
        (13598720, 'CLM_UHA_CDS_INSERM', '', '', '', '', '', 'France', '2009-10-14 00:00:00', 'canano_admin'),
        (14843904, 'KI', 'Karolinska Institutet', '57 Huddinge', 'Stockholm', '', 'SE-141', 'Sweden',
         '2008-09-30 00:00:00', 'canano_admin'),
        (14843905, 'RIT_KI_SU', 'Royal Institute of Technology', 'Drottning Kristinas vag 51', 'Stockholm ', '',
         '100 44', 'Sweden', '2009-11-10 00:00:00', 'canano_admin'),
        (15728641, 'DWU_SNU_SU_US', 'Dongduk Women?s University', '23-1, Wolgok-dong, Seongbuk-gu,', 'Seoul', '',
         '136-714', 'Republic of Korea', '2009-12-23 00:00:00', 'canano_admin'),
        (15728642, 'UToronto', 'University of Toronto', '4 Taddle Creek Road', 'Toronto', 'Ontario', 'M5S 3G9', 'Canada',
         '2009-12-30 00:00:00', 'canano_admin'),
        (15728643, 'UM-C', '', 'University of Missouri-Columbia', 'Columbia', 'MO', '65212', 'USA',
         '2010-01-05 00:00:00', 'canano_admin'),
        (15728644, 'UN', 'Department of Pharmacy and Pharmaceutical Technology', 'University of Navarra', 'Pamplona', '',
         '31008', 'Spain', '2010-01-19 00:00:00', 'canano_admin'),
        (15728646, 'UKY', 'Department of Chemistry, 101 Chemistry-Physics Building', 'University of Kentucky',
         'Lexington', 'KY', '40506-0055', 'USA', '2010-03-12 00:00:00', 'canano_admin'),
        (15728647, 'JSTA_JFCR_NEC_FHU_TUSM_NIAIST', '', '', 'Tokyo', '', '', 'Japan', '2008-08-20 00:00:00',
         'canano_admin'),
        (26935297, 'UNC_ChemD',
         'Department of Chemistry Lineberger Comprehensive Cancer Center Institute for Nanomedicine',
         'University of North Carolina', 'Chapel Hill', 'NC', '27599', 'USA', '2010-05-13 00:00:00', 'canano_admin'),
        (26935298, 'UL_NL', 'Nanomedicine Laboratory, Center for Drug Delivery Research, The School of Pharmacy',
         'University of London', 'London', '', 'WC1N 1AX', 'United Kingdom', '2010-05-13 00:00:00', 'canano_admin'),
        (27099136, 'UMC_DVP', 'Department of Veterinary Pathobiology, Veterinary Medical Diagnostic Laboratory',
         'University of Missouri', 'Columbia', 'MO', '', 'USA', '2010-06-04 10:40:29', 'canano_admin'),
        (27099137, 'UMC_RadiolD', 'Department of Radiology', 'University of Missouri-Columbia', 'Columbia', 'MO',
         '65212', 'USA', '2010-06-04 16:27:58', 'canano_admin'),
        (28082176, 'PNNL_CBBG', 'Cell Biology and Biochemistry Group, Box 999, Mail Stop P7-56',
         'Pacific Northwest National Laboratory', 'Richland', 'WA', '99532', 'USA', '2010-06-09 09:55:01',
         'canano_admin'),
        (28082177, 'SUNYB_ILPB', 'Institute for Lasers, Photonics and Biophotonics',
         'The State University of New York at Buffalo', 'Buffalo', 'NY', '14260', 'USA', '2010-06-11 14:11:09',
         'canano_admin'),
        (28639232, 'PURDUEU_BN',
         'Birck Nanotechnology, Bindley Bioscience, and Purdue Cancer Center,  225 S. University Street',
         'Purdue University', 'West Lafayette', 'IN', '47906', 'USA', '2009-06-08 00:00:00', 'canano_admin'),
        (28639233, 'NEU_DPS', 'Department of Pharmaceutical Sciences, School of Pharmacy, Northeastern University',
         '360 Huntington Avenue  110 Mugar Life Sciences Building ', 'Boston', 'MA', '02115', 'USA',
         '2010-06-25 14:32:13', 'canano_admin'),
        (28639234, 'WUSTL_DIM', '', '', 'Saint Louis', 'MO', '', 'USA', '2009-03-30 00:00:00', 'canano_admin'),
        (28639235, 'MIT_ChemD', 'Department of Chemistry, Massachusetts Institute of Technology',
         '77 Massachusetts Avenue', 'Cambridge', 'MA', '02139', 'USA', '2010-08-02 14:03:24', 'canano_admin'),
        (28639236, 'LMRT', 'Laboratory for Multiscale Regenerative Technologies',
         'Massachusetts Institute of Technology; E19-502DC', 'Cambridge', 'MA', '02139', 'USA', '2010-08-09 16:42:39',
         'canano_admin'),
        (28639237, 'MIT_LMRT', 'Laboratory for Multiscale Regenerative Technologies',
         'Massachusetts Institute of Technology; E19-502D', 'Cambridge', 'MA', '02139', 'USA', '2010-08-09 17:19:32',
         'canano_admin'),
        (28639238, 'Harvard_MIT_DHST', 'Harvard-MIT Division of Health Sciences and Technology',
         'Massachusetts Institute of Technology', 'Cambridge', 'MA', '02139', 'USA', '2010-08-16 11:48:22',
         'canano_admin'),
        (28639239, 'UCSD_ChemBiochemD',
         'Materials Science and Engineering Program, Department of Chemistry and Biochemistry, Department of Bioengineering, University of California, San Diego',
         '9500 Gilman', 'La Jolla', 'CA', '92093', 'USA', '2010-09-08 17:35:17', 'canano_admin'),
        (28639240, 'HarvardU_PhysD', 'Department of Physics', ' Harvard University', 'Cambridge', 'MA', '02138', 'USA',
         '2010-10-18 18:01:48', 'canano_admin'),
        (28639241, 'BWH_AnesthesiologyD',
         'Department of Anesthesiology, Brigham and Women''s Hospital, Harvard Medical School', '75 Francis Street',
         'Boston', 'MA', '02115', 'USA', '2010-11-01 17:44:41', 'canano_admin'),
        (28639242, 'MIT_ChemEngineeringD', 'Department of Chemical Engineering, Massachusetts Institute of Technology',
         '77 Massachusetts Avenue', 'Cambridge', 'MA', '02139', 'USA', '2010-11-01 17:48:38', 'canano_admin'),
        (28639243, 'GIST_LifeScienceD',
         'Research Center for Biomolecular Nanotechnology, Department of Life Science, Gwangju Institute of Science and Technology,',
         'Buk-gu', 'Gwangju', '', '500-712', 'South Korea', '2008-08-20 00:00:00', 'canano_admin'),
        (30048256, 'WSU_DPS', 'Department of Pharmaceutical Sciences, Wayne State University', '259 Mack Avenue',
         'Detroit', 'MI', '48202', 'USA', '2010-12-14 11:38:39', 'canano_admin'),
        (30048257, 'NRCWE', 'National Research Center for the Working Environment', 'Lerso Parkalle 105', 'Copenhagen',
         '', 'DK-2100', 'Denmark', '2010-12-21 15:41:10', 'canano_admin'),
        (30048258, 'AIST_HTRC', '', '', '', '', '', '', '2011-01-10 13:24:24', 'canano_admin'),
        (30048259, 'STANFORD_ChemD', 'Department of Chemistry', ' Stanford University', 'Stanford', 'CA', '94305', 'USA',
         '2011-01-14 16:09:51', 'canano_admin'),
        (30146560, 'Childrens Hospital Los Angeles', '4650 Sunset Boulevard SRT 302',
         'Developmental Therapeutics Program', 'Los Angeles', 'CA', '90027', 'USA', '2011-02-18 02:23:22',
         'canano_admin'),
        (32636928, 'DC', 'Thayer School of Engineering', 'Dartmouth College', 'Hanover', 'NH', '03755', 'USA',
         '2012-06-13 14:39:47', 'canano_admin'),
        (33128448, 'UT_UMG_MDACC_RU_UTA', 'Department of Nanomedicine and Biomedical Engineering',
         'The University of Texas Health Science Center at Houston,', 'Houston', 'TX', '', 'USA', '2012-06-27 11:51:03',
         'canano_admin'),
        (33128449, 'UTHSCH_UMG_MDACC_RU_UTA', 'Department of Nanomedicine and Biomedical Engineering',
         'The University of Texas Health Science Center at Houston', 'Houston', 'TX', '', 'USA', '2012-06-27 11:51:03',
         'canano_admin'),
        (36765696, 'JHU_KSU', 'Department of Materials Science and Engineering', 'Johns Hopkins University', 'Baltimore',
         'MD', '21218', 'USA', '2012-11-27 13:09:15', 'canano_admin'),
        (36765697, 'STANFORD_OM', 'Molecular Imaging Program, Department of Radiology and Bio-X Program ',
         'Stanford University School of Medicine', 'Stanford', 'CA', '94305', 'USA', '2012-12-14 14:06:01',
         'canano_admin'),
        (36765698, 'STANFORD_MIPS', 'Molecular Imaging Program, Department of Radiology and Bio-X Program ',
         'Stanford University School of Medicine', 'Stanford', 'CA', '94305', 'USA', '2013-01-24 12:45:11',
         'canano_admin'),
        (37978112, 'YALE', 'Department of Biomedical and Environmental Engineering',
         'Yale University School of Engineering and Applied Sciences', 'New Haven', 'CT', '06511', 'USA',
         '2013-05-16 14:30:20', 'canano_admin'),
        (39092224, 'CUK', 'Department of Otolaryngology-Head and Neck Surgery',
         'College of Medicine, The Catholic University of Korea', '', '', '', 'Republic of Korea', '2013-07-25 11:30:18',
         'canano_admin'),
        (39092225, 'KNUT', 'Department of Chemical & Biological Engineering',
         'Korea National University of Transportation', 'Chungju', '', '380-702', 'Republic of Korea',
         '2013-07-25 11:34:33', 'canano_admin'),
        (39616512, 'QUB',
         'The Centre for Infection and Immunity, School of Medicine, Dentistry and Biomedical Sciences, Queen''s University Belfast',
         'University Road', 'Belfast', '', 'BT9 7AE', 'United Kingdom', '2013-09-03 13:57:35', 'canano_admin'),
        (40697856, 'EMORY_Surgery', 'Departments of Surgery, Radiology and Imaging Sciences',
         'Emory University School of Medicine', 'Atlanta', 'GA', '30322', 'USA', '2013-12-06 12:34:50', 'canano_admin'),
        (40697857, 'EMORY_Radiology_Imaging_Sciences', 'Department of Radiology and Imaging Sciences',
         'Emory University School of Medicine', 'Atlanta', 'GA', '30322', 'USA', '2013-12-06 12:38:23', 'canano_admin'),
        (41385984, 'NWU_ChemD_CLPI', 'Department of Chemistry, Chemistry of Life Processes Institute',
         'Northwestern University', 'Evanston', 'IL', '60208', 'USA', '2014-01-17 11:18:33', 'canano_admin'),
        (41385985, 'NWU_MedD',
         'Department of  Medicine, Lurie 4-113, Feinberg School of Medicine, Northwestern University',
         '303 East Superior Street', 'Chicago', 'IL', '60611', 'USA', '2014-01-17 11:23:09', 'canano_admin'),
        (41975808, 'UTSMC', 'Department of Radiology', 'University of Texas Southwestern Medical Center', 'Dallas', 'TX',
         '75390', 'USA', '2014-03-28 11:27:14', 'canano_admin'),
        (43220992, 'NCSR \"Demokritos\"',
         'Sol-Gel Laboratory, Institute for Advanced Materials, Physicochemical Processes,  Nanotechnology & Microsystems, NCSR \"Demokritos\"',
         '15310 Aghia Paraskevi', 'Attikis', '', '', 'Greece', '2014-05-07 12:20:36', 'canano_admin'),
        (43810816, 'NWU_NeurologyD',
         'Ken and Ruth Davee Department of Neurology, The Northwestern Brain Tumor Institute, The Robert H. Lurie Comprehensive Cancer Center, Northwestern University',
         '303 East Superior', 'Chicago', 'IL', '60611', 'United States', '2014-06-09 11:25:35', 'canano_admin'),
        (45383680, 'WU_KLACBM',
         'Key Laboratory of Analytical Chemistry for Biology and Medicine (Ministry of Education), College of Chemistry and Molecular Sciences',
         'State Key Laboratory of Virology, and Wuhan Institute of Biotechnology, Wuhan University', 'Wuhan', '',
         '430072', 'People''s Republic of China', '2014-09-01 12:24:29', 'canano_admin'),
        (45973504, 'Caltech_ChemEngineering', 'Chemical Engineering  ', 'California Institute of Technology', 'Pasadena',
         'CA', '91125', 'United States', '2014-10-20 13:11:04', 'canano_admin'),
        (47611904, 'SJTU-SchoolofMedicine',
         'Department of Pharmacology, Institute of Medical Sciences, Shanghai Jiao Tong University School of Medicine',
         '280 South Chongqing Road', 'Shanghai', '', '', 'China', '2015-01-09 13:35:12', 'canano_admin'),
        (47611906, 'BRICH-Molecular_Pharmacology', 'City of Hope Comprehensive Cancer Center', 'Beckman Center',
         'Duarte', 'CA', '91010', 'USA', '2015-01-26 12:04:57', 'canano_admin'),
        (48398336, 'JHU_Pathology', 'Department of Pathology, Johns Hopkins School of Medicine',
         '733 N. Broadway, MRB 639', 'Baltimore', 'MD', '21205', 'USA', '2015-04-14 12:45:57', 'canano_admin'),
        (49020928, 'UI_UC_DMSE', 'Department of Materials Science and Engineering',
         'University of Illinois at Urbana–Champaign', 'Urbana', 'IL', '61801', 'USA', '2015-07-02 13:05:08',
         'canano_admin'),
        (49020929, 'UI-UC_DVCM', 'Department of Veterinary Clinical Medicine',
         'University of Illinois at Urbana–Champaign', 'Urbana', 'IL', '61801', 'USA', '2015-07-02 13:08:24',
         'canano_admin'),
        (49020930, 'UI--UC_DMSE', 'Department Materials Science and Engineering',
         'University of Illinois at Urbana–Champaign', 'Urbana', 'IL', '61801', 'USA', '2015-07-02 13:12:45',
         'canano_admin'),
        (49020931, 'UI-UC_DFSHN', 'Department of Food Science and Human Nutrition',
         'University of Illinois at Urbana–Champaign', 'Urbana', 'IL', '61801', 'USA', '2015-07-02 13:16:27',
         'canano_admin'),
        (49020932, 'UI-UC_DMSE', 'Department Materials Science and Engineering',
         'University of Illinois at Urbana–Champaign', 'Urbana', 'IL', '61801', 'USA', '2015-07-03 10:21:04',
         'canano_admin'),
        (50167808, 'RU_BMC',
         'Division of Molecular Imaging, Department of Radiology Baylor College of Medicine, BCM 360',
         'One Baylor Plaza', 'Houston', 'TX', '77030', 'USA', '2015-09-04 10:23:02', 'canano_admin'),
        (50167809, 'RU_ChemD',
         'Department of Chemistry Department of Electrical and Computer Engineering Rice University', '6100 Main Street',
         'Houston', 'TX', '77005', 'USA', '2015-09-10 12:39:04', 'canano_admin'),
        (50167810, 'BCM_RadiolD', 'test', 'test', 'test', 'md', '20850', 'usa', '2015-09-10 12:42:34', 'canano_admin'),
        (50987011, 'UToronto_IBBE',
         'Institute of Biomaterials and Biomedical Engineering Donnelly Centre for Cellular and Biomolecular Research Department of Chemical Engineering Department of Chemistry',
         'University of Toronto', 'Toronto', 'CA-ON', '', 'Canada', '2015-10-08 12:09:43', 'canano_admin'),
        (53379072, 'UChicago', '929 E 57st.', '', 'CHICAGO', 'IL', '60615', 'US', '2015-11-19 18:14:33', 'canano_admin'),
        (53379073, 'Caltech', '1200 E California Blvd', '', 'Pasadena', 'CA', '91125', 'USA', '2015-11-19 18:33:57',
         'canano_admin'),
        (54394880, 'UL_BCC', 'Brown Cancer Center, University of Louisville, CTRB 309', '505 Hancock Street',
         'Louisville', 'KY', '40202', 'USA', '2016-04-27 10:13:21', 'canano_admin'),
        (57901056, 'OSU_CP', 'College of Pharmacy, The Ohio State University',
         'Biomedical Research Tower, Rm. 418, 460 W 12th Ave.', 'Columbus', 'OH', '43210', 'USA', '2016-09-21 13:32:21',
         'canano_admin'),
        (58884096, 'UCLA', '570 Westwood plaza CNSI 6511', '', 'Los Angeles', 'CA', '90095', 'USA',
         '2016-11-01 12:52:27', 'LiuX'),
        (59736064, 'MCCRC_CR', 'Clinical Research, Mary Crowley Cancer Research Center', '1700 Pacific Ave., Suite 1100',
         'Dallas', 'TX', '75201', 'USA', '2016-12-07 14:09:08', 'canano_admin'),
        (59736065, 'UTMDACC_DGMO',
         'Department of Genitourinary Medical Oncology, University of Texas, MD Anderson Cancer Center',
         '1155 Pressler, Unit 1374', 'Houston', 'TX', '77030', 'USA', '2016-12-13 12:23:23', 'canano_admin'),
        (59736066, 'GU_DOnc', 'Department of Oncology, Experimental Therapeutics Division',
         'Georgetown University Medical Center, TRB/E420, 3970 Reservoir Rd NW', 'Washington', 'DC', '20057-1469', 'USA',
         '2016-12-15 14:33:55', 'canano_admin'),
        (60522496, 'MC2TCN', '1275 York Ave', '', 'New York', 'NY', '10065', 'USA', '2017-01-06 14:41:17',
         'canano_admin'),
        (61407232, 'CWRU_BiomedEngDep', '2071 Martin Luther King Jr. Drive, Wickenden Building', '', 'Cleveland', 'OH',
         '44106', 'USA', '2017-03-15 10:41:16', 'canano_admin'),
        (62619648, 'UNC_CNDD',
         'Center for Nanotechnology in Drug Delivery, Eshelman School of Pharmacy, University of North Carolina at Chapel Hill',
         'Genetic Medicine Building, Room 1094, Campus Box 7362', 'Chapel Hill', 'NC', '27599', 'USA',
         '2017-05-02 13:08:15', 'canano_admin'),
        (62619649, 'JMUW_CCTMS', 'Functional Polymer Materials, Chair for Chemical Technology of Materials Synthesis',
         'Julius Maximilians Universitat Wuerzburg, Rontgenring 11, 97070', 'Wuerzburg', '', '97070', 'Germany',
         '2017-05-02 13:19:00', 'canano_admin'),
        (63832064, 'SZMC_HU_NCL', 'Shaare Zedek Medical Center - Oncology Institute', 'POB 3235', 'Jerusalem', '',
         '91031', 'Israel', '2017-08-01 13:16:19', 'canano_admin'),
        (64913408, 'MGH-CenterSystBiol', 'Center for Systems Biology, Massachusetts General Hospital',
         'Harvard Medical School', 'Boston', 'MA', '02114', 'USA', '2017-09-15 12:50:25', 'canano_admin'),
        (64913409, 'BWH-LabNanomatBiomat', 'Laboratory of Nanomedicine and Biomaterials, Department of Anesthesiology',
         'Brigham and Women''s Hospital, Harvard Medical School', 'Boston', 'MA', '02115', 'USA', '2017-09-15 12:52:11',
         'canano_admin');
/*!40000 ALTER TABLE `organization`
    ENABLE KEYS */;
UNLOCK TABLES;


--
-- Default data for table `instrument`
--

LOCK TABLES `instrument` WRITE;
/*!40000 ALTER TABLE `instrument`
    DISABLE KEYS */;
INSERT INTO `instrument`
VALUES (6, 'flow cytometer', 'Becton Dickinson', 'FACS Calibur', '2009-10-14 09:17:05', 'canano_admin'),
       (8552448, 'zeta potential analyzer', 'Malvern', 'Zetasizer 1000', '2009-10-14 09:17:05', 'canano_admin'),
       (9502721, 'zeta potential analyzer', 'Malvern', 'Zetasizer Nano ZS', '2009-10-14 09:17:05', 'canano_admin'),
       (13795328, 'dynamic light scattering instrument', 'Malvern', 'Zetasizer Nano ZS', '2009-10-14 13:44:14',
        'canano_admin'),
       (13795329, 'electrophoretic light scattering instrument', 'Malvern', 'Zetasizer Nano ZS', '2009-10-14 13:54:34',
        'canano_admin'),
       (13795330, 'fluorescence excitation device', '', 'home made fluorescence excitation device',
        '2009-10-14 15:02:30', 'canano_admin'),
       (13795331, 'cooled digital camera', 'Hamamatsu', 'Orca II BT 512 G', '2009-10-14 15:04:41', 'canano_admin'),
       (14647296, '', 'FEI', 'Tecnai 10', '2009-10-22 14:42:54', 'canano_admin'),
       (14647297, 'research microscope', 'Olympus', 'BH2', '2009-10-22 15:45:13', 'canano_admin'),
       (14647298, 'digital camera', 'Soft Imaging Systems', 'MegaView III', '2009-10-27 11:13:40', 'canano_admin'),
       (14647299, '', 'FEI', 'Tecnai 10', '2009-10-27 11:14:05', 'canano_admin'),
       (14647300, '', 'Molecular Devices', 'Gemini EM', '2009-10-27 16:03:04', 'canano_admin'),
       (14647301, '', '', 'Burker chamber', '2009-10-29 09:25:12', 'canano_admin'),
       (14647302, 'transmission electron microscope', 'FEI', 'Tecnai 10', '2009-10-29 09:58:28', 'canano_admin'),
       (14647303, '', '', 'Burker chamber', '2009-10-29 10:58:34', 'canano_admin'),
       (15106048, 'hemocytometer', '', '', '2009-11-02 14:31:31', 'canano_admin'),
       (15106049, 'gas sorption detector', 'Micromeritics', 'FlowSorb II 2300', '2009-11-06 10:36:16', 'canano_admin'),
       (15106050, 'gas sorption detector', 'Micromeritics', 'Gemini V', '2009-11-06 10:36:15', 'canano_admin'),
       (15106051, 'flow cytometer', 'Becton Dickinson', ' FACS Calibur', '2009-11-06 16:52:34', 'canano_admin'),
       (15106052, 'flow cytometer', 'Becton Dickinson', 'FACSCalibur', '2009-11-09 08:52:43', 'canano_admin'),
       (15106053, 'flow cytometer', 'Becton Dickinson', ' FACSCalibur', '2009-11-09 10:31:03', 'canano_admin'),
       (15106054, 'laser diffraction instrument', 'Malvern', 'Metasizer 2000', '2009-11-11 09:06:05', 'canano_admin'),
       (15106055, 'scanning electron microscope', 'Zeiss', 'LEO 1530', '2009-11-11 10:57:09', 'canano_admin'),
       (15106056, 'scanning tunneling microscope', 'Zeiss', 'LEO 1530', '2009-11-11 11:24:38', 'canano_admin'),
       (15106057, 'spectrophotometer', 'Varian', 'FTS 7000', '2009-11-11 11:32:43', 'canano_admin'),
       (15106058, '', 'Philips', 'XDC-700 Guinier–Hagg type camera', '2009-11-11 11:41:07', 'canano_admin'),
       (15106059, '', 'Philips', 'XDC-700 Guinier-Hagg type camera', '2009-11-11 11:41:41', 'canano_admin'),
       (15106060, 'X-ray photoelectron spectrometer', 'Kratos Analytical', 'AXIS Ultra DLD', '2009-11-11 11:46:26',
        'canano_admin'),
       (15106061, 'atomic absorption spectrometer', 'PerkinElmer', 'AAnalyst 800', '2009-11-11 13:46:14',
        'canano_admin'),
       (15106062, 'laser diffraction instrument', 'Malvern', 'Mastersizer 2000', '2009-11-11 14:59:15', 'canano_admin'),
       (15106063, 'X-ray diffraction spectrometer', 'Philips', 'XDC-700 Guinier–Hagg type camera',
        '2009-11-12 08:20:34', 'canano_admin'),
       (15106064, 'atomic absorption spectrometer', 'PerkinElmer', 'Analyst 800', '2009-11-12 08:26:40',
        'canano_admin'),
       (15106065, 'X-ray diffraction spectrometer', 'Philips', 'XDC-700 Guinier-Hagg type camera',
        '2009-11-12 11:45:46', 'canano_admin'),
       (15663104, 'nuclear magnetic resonance spectrometer', 'Varian', 'INOVA-400', '2009-12-10 15:53:46',
        'canano_admin'),
       (15663105, 'nuclear magnetic resonance instrument', 'Varian', 'INOVA-400', '2009-12-11 08:13:20',
        'canano_admin'),
       (15663106, 'spectrophotometer', 'Molecular Devices', 'VersaMax', '2009-12-23 10:21:14', 'canano_admin'),
       (15663107, 'spectrophotometer', 'Molecular Devices', 'Gemini XPS', '2009-12-23 10:45:52', 'canano_admin'),
       (15663108, 'transmission electron microscope', 'Hitachi', 'H 7000', '2009-12-30 10:54:27', 'canano_admin'),
       (15663109, 'transmission electron microscope', 'JEOL', '1400', '2010-01-05 11:27:04', 'canano_admin'),
       (15663110, '', 'CPS Instruments', 'Disc Centrifuge', '2010-01-05 11:32:22', 'canano_admin'),
       (15663111, 'spectrophotometer', 'Varian', '50', '2010-01-05 11:49:04', 'canano_admin'),
       (15663112, 'dynamic light scattering instrument', 'Malvern', 'Zetasizer Nano S90', '2010-01-05 12:27:28',
        'canano_admin'),
       (15663113, 'spectrophotometer', 'Varian', '', '2010-01-05 12:41:30', 'canano_admin'),
       (15663114, 'electrophoretic light scattering instrument', 'Malvern', 'Zetasizer Nano S90', '2010-01-05 12:48:45',
        'canano_admin'),
       (15663115, 'spectrophotometer', 'Dynatech', 'MR5000', '2010-01-05 13:26:56', 'canano_admin'),
       (15663116, '', 'Wyatt Technologies', 'HELEOS', '2010-01-07 12:39:09', 'canano_admin'),
       (15663117, 'spectrophotometer', 'Waters', '2489 UV/Visible detector', '2010-01-07 12:39:08', 'canano_admin'),
       (15663118, 'separation column', 'Waters', '2695 Separations Module', '2010-01-07 12:39:07', 'canano_admin'),
       (15663119, 'multi angle light scattering detector', 'Wyatt Technologies', 'HELEOS ', '2010-01-07 12:52:36',
        'canano_admin'),
       (15663120, 'refractometer', 'Wyatt Technologies', 'Optilab rEX', '2010-01-07 12:52:37', 'canano_admin'),
       (15663121, 'control module', 'Waters', 'Delta 600', '2010-01-07 13:30:09', 'canano_admin'),
       (15663122, 'HPLC autosampler', 'Waters', '717 Plus Autosampler', '2010-01-07 13:54:44', 'canano_admin'),
       (15663123, 'spectrophotometer', 'Waters', '2996 photodiode array detector', '2010-01-07 13:54:43',
        'canano_admin'),
       (15663124, 'fraction collector', 'Waters', 'Fraction  Collector III', '2010-01-07 13:58:18', 'canano_admin'),
       (15663125, 'separation column', 'TosoHaas', 'G 3000 PW 05762 (300 mm x 7.5 mm, 10 mm)', '2010-01-07 17:15:30',
        'canano_admin'),
       (15663126, 'separation column', 'TosoHaas', 'TSK-Gel Guard PHW 06762 (75 mm x 7.5 mm, 12 mm) ',
        '2010-01-07 17:15:28', 'canano_admin'),
       (15663127, 'separation column', 'TosoHaas', 'G 4000 PW (300 mm x 7.5 mm, 17 mm) ', '2010-01-07 17:15:31',
        'canano_admin'),
       (15663128, 'separation column', 'TosoHaas', 'G 2000 PW 05761 (300 mm x 7.5 mm, 10 mm) ', '2010-01-07 17:15:29',
        'canano_admin'),
       (15663129, 'separation column', 'TosoHaas', 'G 3000 PW 05762 (300 mm x 7.5 mm, 12 microm)',
        '2010-01-08 10:05:01', 'canano_admin'),
       (15663130, 'guard column', 'TosoHaas', 'TSK-Gel Guard PHW 06762 (7.5 mm x 7.5 mm, 13 microm) ',
        '2010-01-08 10:04:59', 'canano_admin'),
       (15663131, '', 'TosoHaas', 'G 4000 PW 05107 (300 mm x 7.5 mm, 17 microm) ', '2010-01-08 10:05:02',
        'canano_admin'),
       (15663132, 'separations module', 'Waters', '2695 Separations Module', '2010-01-08 10:04:55', 'canano_admin'),
       (15663133, 'separation column', 'TosoHaas', ' G 2000 PW 05761 (300 mm x 7.5 mm, 12 microm)',
        '2010-01-08 10:05:00', 'canano_admin'),
       (15663134, 'separation column', 'TosoHaas', 'G3000PW 05762 (300 mm x 7.5 mm, 12 microm)', '2010-01-08 10:07:02',
        'canano_admin'),
       (15663135, 'separation column', 'TosoHaas', 'G4000PW 05107 (300 mm x 7.5 mm, 17 microm) ', '2010-01-08 10:07:03',
        'canano_admin'),
       (15663136, 'separation column', 'TosoHaas', 'G2000PW 05761 (300 mm x 7.5 mm, 12 microm) ', '2010-01-08 10:07:01',
        'canano_admin'),
       (15663137, 'separation column', 'TosoHaas', 'G4000PW 05107 (300 mm x 7.5 mm, 17 microm', '2010-01-08 10:28:50',
        'canano_admin'),
       (15663138, 'separation column', 'TosoHaas', 'G4000PW 05763 (300 mm x 7.5 mm, 17 microm) ', '2010-01-08 12:03:36',
        'canano_admin'),
       (15663139, 'separation column', 'TosoHaas', 'G4000PW 05763 (300 mm x 7.5 mm, 17 microm', '2010-01-08 12:09:13',
        'canano_admin'),
       (15663140, 'transmission electron microscope', 'JEOL', '1220', '2010-01-14 11:25:16', 'canano_admin'),
       (15663141, 'atomic force microscope', 'Park Systems', 'XE-100', '2010-01-14 15:44:12', 'canano_admin'),
       (15663142, 'balance', 'Sartorius', 'MC 5', '2010-01-14 16:23:54', 'canano_admin'),
       (15663143, 'dynamic light scattering instrument', 'Malvern', 'Zetamaster', '2010-01-19 16:16:59',
        'canano_admin'),
       (15663144, 'digital imaging capture system', 'Point Electronic GmBh', 'DISS', '2010-01-19 16:25:23',
        'canano_admin'),
       (15663145, 'scanning electron microscope', 'Zeiss', 'DSM 940A', '2010-01-19 16:25:22', 'canano_admin'),
       (15663146, 'electrophoretic light scattering instrument', 'Malvern', 'Zetamaster', '2010-01-19 16:28:15',
        'canano_admin'),
       (15663147, 'elemental analysis instrument', 'LECO', 'CHN-900', '2010-01-19 16:46:35', 'canano_admin'),
       (15663148, 'liquid chromatograph/mass spectrometer ion-trap system', 'Agilent', '1100 series LC',
        '2010-01-20 09:36:33', 'canano_admin'),
       (15663149, 'evaporative light scattering detector', 'Alltech', 'ELSD', '2010-01-20 09:44:00', 'canano_admin'),
       (15663150, 'spectrophotometer', 'Labsystems', 'iEMS Reader MF', '2010-01-22 13:12:36', 'canano_admin'),
       (15663151, 'evaporative light scattering detector', 'Alltech', 'CHN-900', '2010-01-22 15:24:37', 'canano_admin'),
       (15663152, 'separation column', 'Agilent', 'reversed-phase NH2-Zorbax  (4.6mm x 150mm, 5 microm)',
        '2010-01-22 15:24:36', 'canano_admin'),
       (15663153, 'spectrophotometer', 'Tecan', 'GENios', '2010-01-25 08:42:10', 'canano_admin'),
       (15663154, 'research microscope with fluorescence source', 'Olympus', 'CH40-URFLT50', '2010-01-25 10:07:46',
        'canano_admin'),
       (15663155, 'gamma camera', 'Siemens Medical', 'e.cam dual-head variable-angle system', '2010-01-25 13:53:25',
        'canano_admin'),
       (15663156, 'immersion transducer', 'Panametrics', 'V324', '2010-01-26 12:07:33', 'canano_admin'),
       (15663157, 'ultrasonic pulser-receiver', 'Panametrics', 'Panametrics 5900', '2010-01-26 12:21:20',
        'canano_admin'),
       (15663158, '4 axis programmable stage controller', 'Aerotech', 'Unidex 12', '2010-01-26 13:12:59',
        'canano_admin'),
       (15663159, 'gas chromatograph', 'Agilent', '6890', '2010-01-26 15:24:55', 'canano_admin'),
       (15663160, 'ultrasonic pulser-receiver', 'Panametrics', '5900', '2010-01-26 16:06:51', 'canano_admin'),
       (15663161, 'dynamic light scattering instrument', 'Malvern', 'Zetasizer', '2010-01-28 11:20:31', 'canano_admin'),
       (15663162, 'spectrophotometer', 'Hitachi', 'F-4500 fluorescence spectrophotometer', '2010-01-28 14:07:22',
        'canano_admin'),
       (15663163, 'nuclear magnetic resonance instrument', 'Bruker', 'minispec mq20', '2010-02-09 09:29:16',
        'canano_admin'),
       (15663164, 'dynamic light scattering instrument', 'Malvern', 'Zetasizer 1000', '2010-02-09 13:51:22',
        'canano_admin'),
       (15663165, '', 'Malvern', 'Zetasizer 1000', '2010-02-09 13:52:42', 'canano_admin'),
       (15663166, '', 'Malvern', 'Zetasizer 1000', '2010-02-10 12:05:37', 'canano_admin'),
       (15663167, '', 'Malvern', 'Zetasizer 1000', '2010-02-11 12:57:42', 'canano_admin'),
       (15663168, '', 'Malvern', 'Zetasizer 1000', '2010-02-11 13:01:34', 'canano_admin'),
       (15663169, '', 'Malvern', 'Zetasizer 1000', '2010-02-11 13:05:30', 'canano_admin'),
       (15663170, 'electrophoretic light scattering instrument', 'Malvern', 'Zetasizer 1000', '2010-02-11 13:20:22',
        'canano_admin'),
       (15663171, 'gamma counter', 'Packard', 'Riastar', '2010-02-15 10:36:07', 'canano_admin'),
       (15663172, 'research microscope', 'Olympus', 'BX40', '2010-02-15 15:22:19', 'canano_admin'),
       (15663173, 'dynamic light scattering instrument', 'Malvern', 'Zetasizer 4', '2010-02-18 10:56:57',
        'canano_admin'),
       (15663174, 'single-sided NMR probe', 'ACT GmbH', 'Profile  NMR-MOUSE®', '2010-02-24 15:45:40', 'canano_admin'),
       (15663175, 'nuclear magnetic resonance spectrometer', 'Bruker', 'minispec', '2010-02-24 15:45:39',
        'canano_admin'),
       (15663176, 'spectrophotometer', '', '', '2010-02-25 09:15:37', 'canano_admin'),
       (15663177, 'spectrophotometer', '', '', '2010-02-25 12:13:40', 'canano_admin'),
       (15663178, 'transmission electron microscope', 'Philips', 'EM 420', '2010-03-02 14:31:41', 'canano_admin'),
       (15663179, 'maldi-tof mass spectrometer', 'Applied Biosystems', 'Voyager-DE PRO ', '2010-03-02 14:57:07',
        'canano_admin'),
       (15663180, 'scintillation counter', 'Packard', '', '2010-03-02 15:48:56', 'canano_admin'),
       (15663181, 'dynamic light scattering instrument', 'Wyatt Technologies', 'DynaPro', '2010-03-02 17:09:48',
        'canano_admin'),
       (15663182, 'MRI scanner', 'Siemens Medical', 'MAGNETOM Trio, A Tim System 3T', '2010-03-03 09:23:19',
        'canano_admin'),
       (15663183, 'inductively coupled plasma-atomic emission spectrometer', 'Thermo Scientific',
        'TJA IRIS Advantage/1000', '2010-03-03 10:39:33', 'canano_admin'),
       (15663184, '', 'Quantum Design', 'MPMS-XL', '2010-03-03 10:59:41', 'canano_admin'),
       (15663185, 'SQUID sample magnetometer', 'Quantum Design', 'MPMS-XL', '2010-03-03 13:09:10', 'canano_admin'),
       (15663186, 'MRI scanner', 'GE Healthcare', 'Excite 1.5 T', '2010-03-04 09:37:24', 'canano_admin'),
       (15663187, 'MRI scanner', 'GE Healthcare', 'Systems Revision 12.0 M5', '2010-03-04 09:47:33', 'canano_admin'),
       (15663188, 'PET scanner', 'Siemens Medical', 'microPET R4', '2010-03-04 11:15:25', 'canano_admin'),
       (15663189, 'laser light source', 'B&W Tek', '', '2010-03-05 15:37:13', 'canano_admin'),
       (15663190, 'spectrophotometer', 'Varian', 'Cary 50', '2010-03-05 17:25:32', 'canano_admin'),
       (15663191, 'research microscope with fluorescence source', 'Nikon', 'TE2000', '2010-03-05 17:56:46',
        'canano_admin'),
       (15663192, 'research microscope', 'Nikon', 'TE2000', '2010-03-08 10:00:10', 'canano_admin'),
       (15663193, 'maldi-tof mass spectrometer', 'Micromass', 'TofSpec-2E', '2010-03-08 16:06:28', 'canano_admin'),
       (15663194, 'zeta potential analyzer', 'Malvern', 'Zetasizer Nano ZS ZEN3600', '2010-03-08 16:11:13',
        'canano_admin'),
       (15663195, 'zeta potential analyzer', 'Malvern', 'Zetasizer Nano ZS ZEN 3600', '2010-03-08 16:15:41',
        'canano_admin'),
       (15663196, 'digital camera', 'Hamamatsu', 'ORCA-HR', '2010-03-08 17:04:50', 'canano_admin'),
       (15663197, 'transmission electron microscope', 'Philips', 'CM-100', '2010-03-08 17:04:49', 'canano_admin'),
       (15663198, 'transmission electron microscope', 'Philips', 'CM 100', '2010-03-09 08:52:33', 'canano_admin'),
       (15663199, 'electrophoretic light scattering instrument', 'Malvern', 'Zetasizer Nano ZS ZEN3600',
        '2010-03-09 08:57:17', 'canano_admin'),
       (15663200, 'electrophoretic light scattering instrument', 'Malvern', 'Zetasizer Nano ZS ZEN 3600',
        '2010-03-09 10:05:42', 'canano_admin'),
       (15663201, 'nuclear magnetic resonance spectrometer', 'Varian', 'Unity Inova', '2010-03-09 13:33:34',
        'canano_admin'),
       (15663202, 'nuclear magnetic resonance spectrometer', 'Bruker', 'DRX500', '2010-03-10 09:13:01', 'canano_admin'),
       (15663203, 'spectrophotometer', 'PerkinElmer', 'Lambda 20', '2010-03-10 10:43:51', 'canano_admin'),
       (15663204, 'transmission electron microscope', 'Philips', 'CM100', '2010-03-10 14:14:35', 'canano_admin'),
       (15663205, 'NMR spectrometer', 'Varian', 'Unity Inova', '2010-03-11 11:14:43', 'canano_admin'),
       (15663206, 'inverted research microscope', 'Olympus', 'XR71', '2010-03-11 11:42:15', 'canano_admin'),
       (15663207, 'laser scanning confocal microscope', 'Olympus', 'FluoView 500', '2010-03-11 11:42:14',
        'canano_admin'),
       (15663208, 'spectrophotometer', 'Agilent', '8453', '2010-03-15 09:02:33', 'canano_admin'),
       (15663209, 'transmission electron microscope', 'JEOL', '2010F', '2010-03-15 09:10:10', 'canano_admin'),
       (15663210, 'spectrophotometer', 'Photon Technology International', 'FluoDia T70', '2010-03-17 16:50:57',
        'canano_admin'),
       (15663211, 'spectrophotometer', 'BioTek', 'PowerWave', '2010-03-18 12:39:20', 'canano_admin'),
       (15663212, 'digital camera', 'Olympus', 'DP20', '2010-03-18 12:54:34', 'canano_admin'),
       (15663213, 'inverted research microscope', 'Olympus', 'IX51', '2010-03-18 12:54:33', 'canano_admin'),
       (15663214, 'digital camera', 'Olympus', 'DP70', '2010-03-19 09:20:31', 'canano_admin'),
       (15663215, 'flow cytometer', 'Guava Technologies/Millipore', 'EasyCite Mini', '2010-03-22 09:29:40',
        'canano_admin'),
       (15663216, 'inductively coupled plasma-atomic emission spectrometer', 'Horiba', 'ULTIMA 2',
        '2010-03-29 15:25:43', 'canano_admin'),
       (15663217, 'energy dispersive X-ray spectrometer', 'EDAX', 'Genesis 4000', '2010-03-29 15:39:19',
        'canano_admin'),
       (15663218, 'scanning transmission electron microscope', 'Hitachi', 'HD2300', '2010-03-29 15:39:18',
        'canano_admin'),
       (15663219, 'spectrophotometer', 'Biorad', '680', '2010-03-29 15:44:37', 'canano_admin'),
       (16646144, 'transmission electron microscope', 'Zeiss', '902', '2010-04-12 10:13:52', 'canano_admin'),
       (16646145, 'spectrophotometer', 'Biorad', '550', '2010-04-12 10:36:13', 'canano_admin'),
       (16646146, 'laser scanning confocal microscope', 'Zeiss', 'LSM 510', '2010-04-13 10:44:15', 'canano_admin'),
       (16646147, 'surface plasmon resonance instrument', 'GE Healthcare', 'Biacore X', '2010-04-13 14:35:51',
        'canano_admin'),
       (20000011, '', 'Agilent', '', '2009-10-06 12:29:01', 'canano_admin'),
       (25373952, '', 'Malvern', '', '2009-10-10 16:37:34', 'canano_admin'),
       (25439488, '', 'Wyatt Technologies', '', '2009-10-12 12:29:43', 'canano_admin'),
       (25439489, '', 'Malvern', '', '2009-10-12 12:35:55', 'canano_admin'),
       (25439490, 'dynamic light scattering instrument', 'Malvern', '', '2009-10-12 12:38:05', 'canano_admin'),
       (25636096, 'spectrophotometer', 'Thermo Electron', 'Evolution 300', '2009-10-14 17:45:54', 'canano_admin'),
       (26804224, 'spectrophotometer', 'BioTek', 'Synergy HT', '2010-05-11 10:20:36', 'canano_admin'),
       (26804225, 'spectrofluorometer', 'Molecular Devices', 'Gemini EM', '2010-05-11 10:26:37', 'canano_admin'),
       (26804226, 'scanning electron microscope', 'Hitachi', 'S-4700', '2010-05-13 14:37:59', 'canano_admin'),
       (26804227, 'dynamic light scattering instrument', 'Brookhaven Instruments', '90Plus', '2010-05-13 14:45:16',
        'canano_admin'),
       (26804228, 'electrophoretic light scattering instrument', 'Brookhaven Instruments', 'ZetaPlus',
        '2010-05-13 14:53:54', 'canano_admin'),
       (26804229, 'spectrophotometer', 'Biorad', '3550', '2010-05-13 15:00:21', 'canano_admin'),
       (26804230, 'flow cytometer', 'Dako', 'CyAn ADP', '2010-05-13 17:32:28', 'canano_admin'),
       (26804231, 'research microscope', 'Olympus', '', '2010-05-13 18:05:07', 'canano_admin'),
       (26804232, 'research microscope', 'Leica', 'DMI4000B', '2010-05-14 11:52:11', 'canano_admin'),
       (27459584, 'coulter counter', 'Beckman/Coulter', 'Z2 COULTER COUNTER', '2010-06-04 17:43:07', 'canano_admin'),
       (27459585, '', 'JEOL', '1400', '2010-06-07 16:06:11', 'canano_admin'),
       (27459586, 'differential centrifugal sedimentation instrument', 'CPS Instruments', 'DCS', '2010-06-07 16:14:44',
        'canano_admin'),
       (27459587, 'scintillation counter', 'Packard', 'Riastar', '2010-06-07 16:35:36', 'canano_admin'),
       (28213248, 'electrophoretic light scattering instrument', 'Brookhaven Instruments', '90Plus',
        '2010-06-09 10:20:06', 'canano_admin'),
       (28213249, 'microarray scanner', 'PerkinElmer', 'ScanArray ExpressHT', '2010-06-09 11:22:52', 'canano_admin'),
       (28213250, 'microarray scanner', 'Affymetrix', 'GeneChip Scanner 3000', '2010-06-09 13:49:13', 'canano_admin'),
       (28213251, 'bioanalyzer', 'Agilent', '2100 Bioanalyzer ', '2010-06-09 13:56:06', 'canano_admin'),
       (28213252, 'qRT-PCR instrument', 'Roche Applied Science', 'Lightcycler II', '2010-06-10 12:30:19',
        'canano_admin'),
       (28213253, 'thermal cycler', 'Roche Applied Science', 'Lightcycler II', '2010-06-10 14:16:02', 'canano_admin'),
       (28213254, '', 'Roche Applied Science', 'Lightcycler II', '2010-06-10 14:16:46', 'canano_admin'),
       (28213255, 'transmission electron microscope', 'JEOL', 'JEM 2020', '2010-06-11 17:49:47', 'canano_admin'),
       (28213256, 'spectrophotometer', 'Shimadzu', 'UV-3600', '2010-06-11 18:05:11', 'canano_admin'),
       (28213257, 'spectrofluorometer', 'Jobin Yvon', 'Fluorolog-3', '2010-06-11 18:13:31', 'canano_admin'),
       (28475392, 'digital camera', 'Olympus', 'DP71', '2010-06-15 14:14:26', 'canano_admin'),
       (28475393, 'MRI scanner', 'GE Healthcare', 'HDx', '2010-06-15 15:29:35', 'canano_admin'),
       (28475394, 'inverted research microscope', 'Olympus', 'IX71', '2010-06-16 15:21:09', 'canano_admin'),
       (28475395, ' fluorescence lifetime microscope system ', 'Picoquant', 'MicroTime 200', '2010-06-17 10:09:40',
        'canano_admin'),
       (28475396, ' fluorescence lifetime microscope system ', 'OBB Corp', 'EasyLife L', '2010-06-22 11:49:34',
        'canano_admin'),
       (28475397, 'electrophoretic light scattering instrument', 'Malvern', 'Zetasizer Nano ZS model ZEN 3600',
        '2010-06-22 13:13:26', 'canano_admin'),
       (28475398, 'nuclear magnetic resonance instrument', 'Varian', 'Unity Inova', '2010-06-22 13:57:07',
        'canano_admin'),
       (28475399, 'electrophoretic light scattering instrument', 'Malvern', 'Zetasizer Nano ZS  ZEN 3600',
        '2010-06-22 15:03:52', 'canano_admin'),
       (28475400, 'spectrophotometer', 'PerkinElmer', 'Spectrum GX', '2010-06-24 16:49:17', 'canano_admin'),
       (28475401, 'fourier transform infrared spectrophotometer', 'PerkinElmer', 'Spectrum GX', '2010-06-24 16:53:56',
        'canano_admin'),
       (28475402, 'inductively coupled plasma-atomic emission spectrometer', 'PerkinElmer', 'Optima 2000 DV',
        '2010-06-24 17:04:03', 'canano_admin'),
       (28475403, 'electrophoretic light scattering instrument', 'Brookhaven Instruments', 'ZetaPALS',
        '2010-06-25 14:49:25', 'canano_admin'),
       (28475404, 'scanning electron microscope', 'Hitachi', 'S-4800', '2010-06-25 14:55:21', 'canano_admin'),
       (28475405, 'spectrophotometer', 'Shimadzu', 'UV160U', '2010-07-12 13:38:11', 'canano_admin'),
       (28475406, 'imaging system', 'Kodak', 'Gel Logic 100', '2010-07-13 16:41:11', 'canano_admin'),
       (28475407, 'research microscope', 'Olympus', 'BX61', '2010-07-13 16:53:50', 'canano_admin'),
       (28475408, 'flow cytometer', 'Beckman/Coulter', 'EPICS ALTRA', '2010-07-13 16:57:29', 'canano_admin'),
       (28475409, 'transmission electron microscope', 'JEOL', '', '2010-07-15 14:57:54', 'canano_admin'),
       (28475410, 'dual absorbance detector', 'Waters', '2487', '2010-07-15 15:03:27', 'canano_admin'),
       (28475411, 'separation column', 'Agilent', 'ZORBAX 5 microm 4.6 x 150 mm', '2010-07-16 16:58:15',
        'canano_admin'),
       (28475412, 'centrifugal filter unit', 'Millipore', 'Centricon', '2010-07-16 17:17:59', 'canano_admin'),
       (28475413, 'separation column', 'Agilent', 'ZORBAX 5 microm 4.6 mm x 150 mm', '2010-07-16 18:10:32',
        'canano_admin'),
       (28475414, 'separation column', 'Agilent', 'ZORBAX 5 microm 4.6 x 150 mm 883995-902', '2010-07-16 18:12:37',
        'canano_admin'),
       (28475415, 'separation column', 'Agilent', 'ZORBAX 5 um 4.6 mm x 150 mm 883995-902', '2010-07-16 18:15:16',
        'canano_admin'),
       (28475416, 'separation column', 'Waters', 'Spherisorb 5 um, 4.6 mm x 150 mm PSS839568', '2010-07-16 18:24:45',
        'canano_admin'),
       (28475417, 'ultrasonic pulser-receiver', 'Panametrics', '5900 6-mm diameter, 25-mm focal length',
        '2010-07-22 09:46:11', 'canano_admin'),
       (28475418, 'spectrofluorometer', 'Hitachi', 'F-4500 fluorescence spectrophotometer', '2010-07-23 11:16:44',
        'canano_admin'),
       (28475419, 'spectrofluorometer', 'Hitachi', 'F-4500', '2010-07-23 11:19:09', 'canano_admin'),
       (28475420, 'spectrophotometer', 'Hewlett-Packard', '8453', '2010-08-02 15:15:25', 'canano_admin'),
       (28475421, 'spectrophotometer', 'Ocean Optics', 'S2000', '2010-08-02 15:32:42', 'canano_admin'),
       (28475422, 'wavelength dispersive spectrometer', 'JEOL', '733', '2010-08-02 16:00:06', 'canano_admin'),
       (28475423, 'transmission electron microscope', 'JEOL', '2000FX', '2010-08-02 17:35:28', 'canano_admin'),
       (28475424, 'purification system', 'Amersham Pharmacia Biotech', 'AKTAprime', '2010-08-03 10:08:25',
        'canano_admin'),
       (28475425, 'spectrofluorometer', 'Ocean Optics', 'USB2000-FL', '2010-08-03 10:11:42', 'canano_admin'),
       (28475426, 'flow cytometer', 'BD Biosciences', 'LSR II', '2010-08-09 17:09:17', 'canano_admin'),
       (28475427, 'inverted research microscope', 'Nikon', 'T2000', '2010-08-10 12:50:31', 'canano_admin'),
       (28475428, 'fluorescence inverted microscope', 'Nikon', '', '2010-08-16 13:43:54', 'canano_admin'),
       (28475429, 'fluorescence inverted microscope', '', '', '2010-08-17 17:37:16', 'canano_admin'),
       (28475430, 'flow cytometer', '', '', '2010-08-17 17:42:40', 'canano_admin'),
       (28475431, 'dynamic light scattering instrument', 'Malvern', 'Zetasizer Nano', '2010-08-17 18:00:36',
        'canano_admin'),
       (28475432, 'electrophoretic light scattering instrument', 'Malvern', 'Zetasizer Nano', '2010-08-17 18:03:51',
        'canano_admin'),
       (28475433, 'spectrofluorometer', '', '', '2010-08-17 18:14:52', 'canano_admin'),
       (28475434, 'thermal cycler', 'Biorad', 'iCycler', '2010-08-18 10:29:59', 'canano_admin'),
       (28475435, 'flow cytometer', 'Guava Technologies/Millipore', 'easyCyte', '2010-08-24 10:01:53', 'canano_admin'),
       (28475436, 'inductively coupled plasma mass spectrometer', 'Thermo Scientific', '', '2010-08-24 10:18:27',
        'canano_admin'),
       (28475437, 'spectrofluorometer', 'Jobin Yvon', 'Fluorolog-3 FL3-22', '2010-08-24 14:21:18', 'canano_admin'),
       (28475438, 'thermal cycler', '', '', '2010-08-25 14:56:36', 'canano_admin'),
       (28475439, 'spectrofluorometer', 'Photon Technology International', 'FluoDia T70', '2010-08-25 15:23:16',
        'canano_admin'),
       (28475440, 'spectrofluorometer', 'Molecular Devices', 'SpectraMax Gemini EM', '2010-08-30 16:57:17',
        'canano_admin'),
       (28475441, 'dynamic light scattering instrument', '', '', '2010-09-08 17:48:16', 'canano_admin'),
       (28475442, 'transmission electron microscope', '', '', '2010-09-15 17:54:19', 'canano_admin'),
       (28475443, 'laser light source', 'RPMC Lasers', '810-nm diode laser', '2010-09-16 09:51:02', 'canano_admin'),
       (28475444, 'infrared camera', 'FLIR', 'ThermaCAM S60', '2010-09-16 10:10:21', 'canano_admin'),
       (28475445, 'spectrophotometer', 'Molecular Devices', 'SpectraMax', '2010-09-16 10:26:21', 'canano_admin'),
       (28475446, 'laser light source', '', '', '2010-09-16 10:33:01', 'canano_admin'),
       (28475447, 'micro CT scanner', 'GE Healthcare', 'eXplore Locus', '2010-09-16 10:39:02', 'canano_admin'),
       (28475448, 'Raman spectrometer', 'Horiba', 'LabRAM HR 800', '2010-09-23 10:19:27', 'canano_admin'),
       (28475449, 'scanning electron microscope', '', '', '2010-10-18 18:08:32', 'canano_admin'),
       (28475450, 'electron spin resonance spectrometer', 'JEOL', 'ES-FE3XG', '2010-10-19 09:54:18', 'canano_admin'),
       (28475451, 'electron spin resonance spectrometer', 'JEOL', 'JES-FE3XG', '2010-10-19 09:55:39', 'canano_admin'),
       (28475452, 'electrophoretic light scattering instrument', 'Malvern', 'Zetasizer Nano ZS90',
        '2010-10-19 14:16:42', 'canano_admin'),
       (28475453, 'spectrophotometer', 'Molecular Devices', 'SpectraMax Plus', '2010-10-19 14:32:01', 'canano_admin'),
       (28475454, 'spectrofluorometer', 'Molecular Devices', 'Gemini XPS', '2010-10-19 14:32:53', 'canano_admin'),
       (28475455, 'dynamic light scattering instrument', 'Malvern', 'Zetasizer Nano ZS90', '2010-10-19 15:10:39',
        'canano_admin'),
       (28475456, 'electrophoretic light scattering instrument', 'Malvern', 'Malvern Zetasizer Nano ZS90',
        '2010-10-19 15:19:07', 'canano_admin'),
       (28475457, 'gas sorption detector', 'Micromeritics', 'ASAP 2020', '2010-10-25 17:35:29', 'canano_admin'),
       (28475458, 'spectrophotometer', 'Princeton Instruments', 'Acton', '2010-10-25 17:43:53', 'canano_admin'),
       (28475459, 'research microscope', 'Nikon', '', '2010-10-25 17:47:09', 'canano_admin'),
       (28475460, 'fourier transform infrared spectrophotometer', 'Thermo Scientific', 'Nicolet 6700',
        '2010-10-26 09:49:20', 'canano_admin'),
       (28475461, 'industrial microscope', 'Nikon', 'ECLIPSE LV150', '2010-10-26 10:08:15', 'canano_admin'),
       (28475462, '', 'Nikon', 'ECLIPSE LV150', '2010-10-26 10:10:05', 'canano_admin'),
       (28475463, 'cooled digital camera', 'Photometrics', 'CoolSNAP HQ', '2010-10-26 10:10:06', 'canano_admin'),
       (28475464, 'research microscope', 'Nikon', 'ECLIPSE LV150', '2010-10-26 10:11:26', 'canano_admin'),
       (28475465, 'inverted microscope', 'Nikon', '', '2010-10-26 10:16:17', 'canano_admin'),
       (28475466, 'research microscope with fluorescence source', '', '', '2010-10-26 10:36:44', 'canano_admin'),
       (28475467, 'multiphoton laser scanning microscope', 'Biorad', 'Radiance 2100/AGR-3Q', '2010-10-26 10:41:09',
        'canano_admin'),
       (28475468, 'multi photon confocal laser scanning microscope ', 'Biorad', 'Radiance 2100/AGR-3Q',
        '2010-10-26 15:57:41', 'canano_admin'),
       (28475469, 'spectrophotometer', 'Hewlett-Packard', '8452A', '2010-10-26 17:57:35', 'canano_admin'),
       (28475470, 'inductively coupled plasma-atomic emission spectrometer', 'PerkinElmer', 'Optima 3000 DV',
        '2010-10-27 13:55:32', 'canano_admin'),
       (28475471, 'imaging system', 'Caliper Life Sciences', 'IVIS 200', '2010-10-27 14:10:19', 'canano_admin'),
       (28475472, 'inverted microscope', '', '', '2010-10-28 15:17:13', 'canano_admin'),
       (28475473, 'scanning electron microscope', 'JEOL', '6320FV', '2010-11-02 15:13:08', 'canano_admin'),
       (28475474, 'HPLC system', 'Agilent', '1100', '2010-11-03 09:58:09', 'canano_admin'),
       (28475475, 'separation column', 'Phenomenex', 'Curosil-PFP, 250 x 4.6 mm, 5 um', '2010-11-03 10:04:17',
        'canano_admin'),
       (28475476, 'scintillation counter', 'Packard', 'Tri-Carb Scintillation Analyzer', '2010-11-08 10:45:31',
        'canano_admin'),
       (28475477, 'deconvolution fluorescence microscope', 'Applied Precision', 'Delta Vision RT',
        '2010-11-08 13:11:42', 'canano_admin'),
       (28475478, 'dynamic light scattering instrument', 'Brookhaven Instruments', 'ZetaPALS', '2010-11-09 15:39:49',
        'canano_admin'),
       (28475479, 'transmission electron microscope', 'JEOL', 'JEM-200CX', '2010-11-10 17:35:41', 'canano_admin'),
       (28475480, 'spectrophotometer', 'Molecular Devices', 'SpectraMax Plus384', '2010-11-11 12:00:42',
        'canano_admin'),
       (28475481, 'separation column', 'Phenomenex', 'Curosil-PFP 250 x 4.6 mm, 5 um', '2010-11-11 13:00:39',
        'canano_admin'),
       (28475482, 'separation column', 'Phenomenex', 'Curosil-PFP 250 x 4.6 mm 5 um', '2010-11-11 13:32:29',
        'canano_admin'),
       (28475483, 'spectrophotometer', 'Varian', 'Cary 5000', '2010-11-16 17:20:15', 'canano_admin'),
       (28475484, 'spectrophotometer', 'Varian', 'Cary 500', '2010-11-16 17:20:14', 'canano_admin'),
       (28475485, 'nuclear magnetic resonance spectrometer', 'Bruker', '400-MHz 1H NMR', '2010-11-17 14:52:27',
        'canano_admin'),
       (28475486, 'scintillation counter', 'PerkinElmer', 'Tri-Carb Scintillation Analyzer', '2010-11-19 09:55:37',
        'canano_admin'),
       (29032448, 'spectrofluorometer', 'Shimadzu', 'RF-PC100', '2010-11-22 10:55:45', 'canano_admin'),
       (29032449, 'transmission electron microscope', 'JEOL', 'JEM 100X', '2010-11-23 12:04:24', 'canano_admin'),
       (29032450, 'inverted research microscope', 'Nikon', 'Eclipse TE2000-U', '2010-11-24 11:14:22', 'canano_admin'),
       (29491200, 'spectrophotometer', 'BioTek', '', '2010-11-30 15:11:26', 'canano_admin'),
       (29491201, 'brightfield microscope', '', '', '2010-11-30 17:03:49', 'canano_admin'),
       (29491202, 'electrophoretic light scattering instrument', '', '', '2010-12-08 18:07:05', 'canano_admin'),
       (29491203, 'X-ray photoelectron spectrometer', '', '', '2010-12-08 18:18:15', 'canano_admin'),
       (29491204, 'dynamic light scattering instrument', 'Brookhaven Instruments', 'ZetaPlus', '2010-12-15 10:54:45',
        'canano_admin'),
       (29491205, 'gas sorption detector', 'Micromeritics', 'ASAP 2000', '2010-12-21 15:51:24', 'canano_admin'),
       (29491206, 'digital camera', 'Gatan', '', '2010-12-21 16:19:33', 'canano_admin'),
       (29491207, 'transmission electron microscope', 'JEOL', 'JEM-3010', '2010-12-21 16:19:32', 'canano_admin'),
       (29491208, 'dynamic light scattering instrument', 'PSS', 'Nicomp 380', '2010-12-21 16:23:45', 'canano_admin'),
       (29491209, 'elemental analysis instrument', 'Fisons Instruments/Thermo Scientific', 'NA 1500 NCS',
        '2010-12-21 16:54:23', 'canano_admin'),
       (29491210, 'inductively coupled plasma mass spectrometer', 'PerkinElmer', 'Elan 6100', '2010-12-21 16:57:45',
        'canano_admin'),
       (29491211, 'inductively coupled plasma mass spectrometer', 'PerkinElmer', 'Elan 6100', '2010-12-21 16:57:44',
        'canano_admin'),
       (29491212, 'spectrofluorometer', 'PerkinElmer', 'Victor 2 Model 1420', '2010-12-21 17:35:22', 'canano_admin'),
       (29491213, 'fluorescence microscope', 'ChemoMetec', 'NucleoCounter', '2010-12-22 11:52:52', 'canano_admin'),
       (29491214, 'flow cytometer', 'BD Biosciences', 'FACSCanto', '2010-12-22 12:04:06', 'canano_admin'),
       (29491215, 'fluorescence microscope', 'Olympus', '', '2010-12-22 12:38:59', 'canano_admin'),
       (29491216, 'dynamic light scattering instrument', 'Photal Otsuka', 'DSL-7000', '2011-01-10 13:44:14',
        'canano_admin'),
       (29491217, 'transmission electron microscope', 'Zeiss', '', '2011-01-10 13:52:51', 'canano_admin'),
       (29491218, 'X-ray diffraction spectrometer', 'JEOL', 'JSX-3201', '2011-01-10 14:02:39', 'canano_admin'),
       (29491219, 'spectrophotometer', 'Thermo Scientific', '', '2011-01-10 14:33:57', 'canano_admin'),
       (29491220, 'bioanalyzer', 'Agilent', '2100', '2011-01-10 15:26:39', 'canano_admin'),
       (29491221, 'spectrophotometer', 'Thermo Scientific', 'NanoDrop 1000', '2011-01-10 15:28:18', 'canano_admin'),
       (29491222, 'microarray scanner', 'Agilent', 'Microarray Scanner', '2011-01-10 16:48:10', 'canano_admin'),
       (29491223, 'spectrophotometer', 'Agilent', 'Cary 6000i', '2011-01-14 16:43:32', 'canano_admin'),
       (29491224, 'atomic force microscope', '', '', '2011-01-14 18:07:15', 'canano_admin'),
       (30375936, 'dynamic light scattering instrument', 'Wyatt Technologies', 'DynaPro Titan', '2011-02-18 03:10:30',
        'canano_admin'),
       (30769152, 'flow cytometer', 'BD Biosciences', 'BD LSR-II (BD) ', '2011-02-28 05:39:12', 'canano_admin'),
       (31653888, '', 'PerkinElmer', '', '2011-10-17 16:52:43', 'canano_guest'),
       (31653889, 'dynamic light scattering instrument', 'Beckman/Coulter', '', '2011-10-17 16:52:42', 'canano_guest'),
       (31653890, 'atomic force microscope', 'Wyatt Technologies', '', '2011-10-18 08:33:36', 'canano_guest'),
       (31653891, '', 'Test', '', '2011-10-18 12:24:40', 'canano_guest'),
       (32047104, '', 'Applied Biosystems', '', '2011-12-09 11:35:51', 'canano_admin'),
       (32309248, 'electron microprobe', 'BioLogics', '', '2012-02-29 16:26:22', 'canano_admin'),
       (32899072, 'VSM magnetometer', 'Lakeshore', 'VSM 7300 ', '2012-06-13 15:12:42', 'canano_admin'),
       (32899073, 'transmission electron microscope', 'FEI', 'Tecnai F20', '2012-06-13 15:56:11', 'canano_admin'),
       (32899074, 'X-ray diffraction spectrometer', 'Rigaku', 'D/Max', '2012-06-14 16:09:24', 'canano_admin'),
       (32899075, 'fourier transform infrared spectrophotometer', 'Thermo Scientific', 'Nicolet Avatar FTIR 330',
        '2012-06-14 16:20:18', 'canano_admin'),
       (32899076, 'fiber temperature sensor', 'Luxtron', '', '2012-06-15 12:29:21', 'canano_admin'),
       (33488896, 'digital camera', 'Nikon', 'DQC-FS', '2012-06-28 17:05:44', 'canano_admin'),
       (33947648, 'thermogravimetric analyzer', 'TA Instruments', 'QA5000', '2012-07-10 12:29:33', 'canano_admin'),
       (33947649, 'atomic force microscope', 'Asylum Research', 'MFP-3D', '2012-07-10 12:49:05', 'canano_admin'),
       (33947650, 'AFM probe', 'Budget Sensors', 'TAP300Al-G', '2012-07-10 12:53:28', 'canano_admin'),
       (33947651, 'spectrophotometer', 'Molecular Devices', 'SpectraMax M5', '2012-07-10 13:03:57', 'canano_admin'),
       (33947652, 'inverted research microscope', 'Olympus', 'IX81', '2012-07-12 12:31:18', 'canano_admin'),
       (34471936, 'gas sorption detector', 'Micromeritics', 'ASAP 202', '2012-07-26 15:27:01', 'canano_admin'),
       (34471937, 'transmission electron microscope', 'JEOL', '2010', '2012-07-26 15:36:37', 'canano_admin'),
       (34471938, 'scanning electron microscope', 'Hitachi', 'S-5200', '2012-07-26 15:40:14', 'canano_admin'),
       (35323904, 'confocal laser scanning microscope', 'Carl Zeiss', 'LSM 510 META', '2012-08-27 16:48:28',
        'canano_admin'),
       (35323905, 'flow cytometer', 'Dako', 'MoFlo', '2012-08-28 12:51:56', 'canano_admin'),
       (35323906, 'flow cytometer', 'Becton Dickinson', '', '2012-08-28 13:13:55', 'canano_admin'),
       (35880960, 'laser diffraction instrument', 'Horiba', 'LS950', '2012-09-25 13:13:15', 'canano_admin'),
       (35880961, 'surface plasmon resonance instrument', 'Biacore', 'T100', '2012-09-25 13:20:57', 'canano_admin'),
       (36208640, 'inductively coupled plasma-atomic emission spectrometer', 'Varian', 'Vista-PRO',
        '2012-10-15 14:10:42', 'canano_admin'),
       (36208641, 'laser diffraction instrument', 'Horiba', 'LA-950', '2012-10-29 13:57:12', 'canano_admin'),
       (36208642, 'liquid scintillation analyzer', 'PerkinElmer', 'Tri-Carb 2900', '2012-10-30 17:11:42',
        'canano_admin'),
       (36995072, 'spectrophotometer', 'Agilent', 'Varian Cary 50', '2012-11-27 14:26:31', 'canano_admin'),
       (36995073, 'quantum yield measurement system', 'Hamamatsu', 'C9920-02', '2012-11-27 14:48:11', 'canano_admin'),
       (36995074, 'Raman spectrometer', 'Renishaw', 'InVia Raman microscope', '2012-12-14 14:19:49', 'canano_admin'),
       (36995075, 'transmission electron microscope', 'FEI', 'Tecnai G2 X-Twin', '2013-01-24 14:43:35', 'canano_admin'),
       (36995076, 'spectrophotometer', 'BioTek', 'Synergy 4', '2013-01-24 15:07:07', 'canano_admin'),
       (36995077, 'photoacoustic spectrometer', 'Visualsonics', 'LAZR', '2013-01-24 15:24:09', 'canano_admin'),
       (36995078, 'photoacoustic imaging instrument', 'Endra', 'Nexus 128', '2013-01-25 14:00:19', 'canano_admin'),
       (36995079, 'inductively coupled plasma mass spectrometer', 'Thermo Scientific',
        'IRIS Advantage/1000 Radial ICAP  ', '2013-01-29 13:10:11', 'canano_admin'),
       (36995080, 'dynamic light scattering instrument', 'BD Biosciences', '', '2013-02-22 09:18:00', 'canano_admin'),
       (37519360, 'custom built small animal MRI scanner', '', '', '2013-02-27 12:37:24', 'canano_admin'),
       (37519361, 'photoacoustic imaging instrument', '', '', '2013-02-27 12:58:50', 'canano_admin'),
       (37519362, 'research microscope', 'Leica', 'DM2000', '2013-02-28 12:05:51', 'canano_admin'),
       (37519363, 'scanning electron microscope', 'FEI', 'Magellan XHR', '2013-02-28 12:08:35', 'canano_admin'),
       (37519364, 'confocal laser scanning microscope', 'Leica', 'TCS SP2 AOBS', '2013-02-28 12:10:34', 'canano_admin'),
       (37519365, 'scanning transmission electron microscope', 'FEI', 'Tecnai G2 X-Twin', '2013-02-28 12:11:54',
        'canano_admin'),
       (37519366, 'spectrophotometer', 'Beckman/Coulter', 'DU-640', '2013-03-11 13:27:42', 'canano_admin'),
       (37519367, 'inductively coupled plasma-atomic emission spectrometer', 'Thermo Scientific',
        'IRIS Advantage/1000 Radial ICAP  ', '2013-03-12 13:18:40', 'canano_admin'),
       (37519368, 'scanning transmission electron microscope', 'FEI', 'Tecnai F20', '2013-03-27 14:36:27',
        'canano_admin'),
       (37519369, 'qRT-PCR instrument', 'Eppendorf', 'Mastercycler ep realplex', '2013-03-28 10:26:34', 'canano_admin'),
       (37519370, 'fluorometer', 'Invitrogen', 'Qubit', '2013-04-04 11:20:52', 'canano_admin'),
       (37519371, 'positron emission tomograph', 'CTI Concorde Microsystems', 'microPET R4', '2013-04-16 12:20:04',
        'canano_admin'),
       (37519372, 'gamma counter', 'Packard', 'Cobra II', '2013-04-16 12:26:40', 'canano_admin'),
       (37847040, 'confocal laser scanning microscope', 'Biorad', 'MRC 600', '2013-04-24 11:45:55', 'canano_admin'),
       (37847041, 'SQUID sample magnetometer', 'Quantum Design', 'MPMS2', '2013-04-24 13:48:35', 'canano_admin'),
       (37847042, 'SQUID sample magnetometer', 'Quantum Design', '', '2013-04-25 12:51:57', 'canano_admin'),
       (37847043, 'fluorescence imaging system', 'Siemens Medical', 'bonSai', '2013-04-25 14:10:59', 'canano_admin'),
       (37847044, 'spectrophotometer', 'Beckman/Coulter', '', '2013-05-17 12:05:36', 'canano_admin'),
       (38699008, 'transmission electron microscope', 'FEI', 'BioTWIN', '2013-05-20 13:19:44', 'canano_admin'),
       (38699009, '', 'Beckman/Coulter', '', '2013-05-20 17:08:10', 'canano_admin'),
       (38699010, '', 'LaVision BioTec', '', '2013-05-24 12:26:36', 'canano_admin'),
       (38699011, 'microscope', 'Olympus', 'BX61WI', '2013-05-24 12:46:22', 'canano_admin'),
       (38699012, 'nuclear magnetic resonance spectrometer', 'Bruker', '', '2013-05-27 13:12:17', 'canano_admin'),
       (39256064, 'electrophoretic light scattering instrument', 'Photal Otsuka', 'ELS-8000', '2013-07-25 12:03:44',
        'canano_admin'),
       (39256065, 'nuclear magnetic resonance spectrometer', '', '', '2013-07-25 12:08:53', 'canano_admin'),
       (39256066, 'thermogravimetric analyzer', 'TA Instruments', 'QA50', '2013-07-25 12:16:25', 'canano_admin'),
       (39256067, 'spectrophotometer', 'Thermo Scientific', 'Varioskan Flash', '2013-07-25 15:06:55', 'canano_admin'),
       (39256068, 'dynamic light scattering instrument', 'Photal Otsuka', 'ELS-8000', '2013-07-26 14:28:59',
        'canano_admin'),
       (39256069, 'fourier transform infrared spectrophotometer', '', '', '2013-07-29 12:05:27', 'canano_admin'),
       (39256070, 'imaging system', 'Kodak', 'Image Station 4000MM ', '2013-07-29 13:49:21', 'canano_admin'),
       (39878656, 'flow cytometer', 'BD Biosciences', 'FACSCanto II', '2013-09-03 14:42:51', 'canano_admin'),
       (39878657, 'inverted microscope', 'Nikon', 'TE2000', '2013-09-04 10:15:08', 'canano_admin'),
       (39878658, 'fluorescence inverted microscope', 'Nikon', 'TE2000', '2013-09-04 10:15:42', 'canano_admin'),
       (39878659, 'flow cytometer', 'Becton Dickinson', 'FACSCanto II', '2013-09-04 11:05:37', 'canano_admin'),
       (39878660, 'fluorescence inverted microscope', 'Nikon', 'TE2000-U', '2013-09-04 11:30:27', 'canano_admin'),
       (39878661, 'research microscope', 'Leica', 'DM5500', '2013-09-04 11:34:02', 'canano_admin'),
       (39878662, 'research upright microscope', 'Leica', 'DM5500', '2013-09-04 11:34:59', 'canano_admin'),
       (39878663, 'OCT microscope', 'Michelson Diagnostics', 'EX1301', '2013-09-05 12:30:33', 'canano_admin'),
       (39878664, 'flow cytometer', 'BD Biosciences', 'FACSAria II', '2013-09-05 12:50:11', 'canano_admin'),
       (39878665, 'gamma counter', 'PerkinElmer', 'Wallac Wizard 1480', '2013-11-07 12:27:29', 'canano_admin'),
       (39878666, 'hemocytometer', 'Abbott', 'Cell-Dyn 3500', '2013-11-07 12:30:19', 'canano_admin'),
       (39878667, 'fourier transform infrared spectrophotometer', 'Thermo Scientific', 'Nicolet 380',
        '2013-11-11 14:23:12', 'canano_admin'),
       (39878668, 'nuclear magnetic resonance spectrometer', 'Bruker', 'AVANCE 400 FT', '2013-11-11 14:51:34',
        'canano_admin'),
       (39878669, 'nuclear magnetic resonance instrument', 'Bruker', 'AVANCE 400 FT', '2013-11-12 13:21:03',
        'canano_admin'),
       (39878670, 'transmission electron microscope', 'JEOL', 'JEM-100CX', '2013-11-13 10:05:03', 'canano_admin'),
       (39878671, 'scanning electron microscope', 'JEOL', 'JSM-7600', '2013-11-13 14:53:34', 'canano_admin'),
       (40239104, 'photoacoustic spectrometer', 'Endra', 'Nexus 128', '2013-11-25 11:10:30', 'canano_admin'),
       (40239105, 'Raman spectrometer', 'Renishaw', 'inVia', '2013-11-27 14:48:34', 'canano_admin'),
       (40239106, 'transmission electron microscope', 'Hitachi', 'H-7500', '2013-12-06 13:19:29', 'canano_admin'),
       (40239107, 'research microscope', '', '', '2013-12-06 13:42:53', 'canano_admin'),
       (40239108, 'spectrophotometer', 'Molecular Devices', 'SpectraMax Plus 384', '2013-12-06 14:57:58',
        'canano_admin'),
       (40239109, 'MRI scanner', 'Siemens Medical', 'Magneton Trio, a Tim System ', '2013-12-09 12:57:45',
        'canano_admin'),
       (40239110, 'HPLC system', 'Beckman/Coulter', '', '2013-12-11 12:46:38', 'canano_admin'),
       (41680896, 'inductively coupled plasma mass spectrometer', 'Thermo Scientific', 'XSERIES 2',
        '2014-01-17 12:36:46', 'canano_admin'),
       (41680897, 'transmission electron microscope', 'Hitachi', 'HF-2000', '2014-01-20 13:57:53', 'canano_admin'),
       (41680898, 'inductively coupled plasma optical emission spectrometer', 'Varian', 'Vista MPX',
        '2014-01-21 13:18:51', 'canano_admin'),
       (41680899, 'inductively coupled plasma mass spectrometer', 'Agilent', '7500CX', '2014-01-22 13:56:00',
        'canano_admin'),
       (41680900, 'inverted microscope', 'Olympus', 'IX50', '2014-01-27 12:27:56', 'canano_admin'),
       (41680901, 'solvent delivery module', 'Beckman/Coulter', 'System Gold 126 Solvent Module', '2014-01-27 13:35:42',
        'canano_admin'),
       (41680902, 'detector', 'Beckman/Coulter', 'System Gold 168 Detector', '2014-01-27 13:35:43', 'canano_admin'),
       (41680903, 'spectrophotometer', 'Biorad', 'SmartSpec 3000', '2014-01-29 11:07:51', 'canano_admin'),
       (41680904, 'small animal MRI scanner', 'Oxford Magnet Technology', '4.7 T small animal MRI scanner',
        '2014-01-29 12:07:01', 'canano_admin'),
       (41680905, 'console', 'Varian', 'UNITY INOVA', '2014-01-29 12:12:34', 'canano_admin'),
       (41680906, 'liquid chromatograph mass spectrometer', 'Shimadzu', 'LCMS-2020', '2014-02-26 12:33:55',
        'canano_admin'),
       (42369024, 'isocratic pump', 'Agilent', 'G1310A', '2014-03-28 13:40:50', 'canano_admin'),
       (42369025, 'refractive index detector', 'Wyatt Technologies', 'Optilab rEX', '2014-03-28 13:40:55',
        'canano_admin'),
       (42369026, 'separation column', 'TosoHaas', 'G4000PW 05763', '2014-03-28 13:40:53', 'canano_admin'),
       (42369027, 'detector', 'Wyatt Technologies', 'DAWN EOS', '2014-03-28 13:40:54', 'canano_admin'),
       (42369028, 'autosampler', 'Agilent', 'G1329A', '2014-03-28 13:40:51', 'canano_admin'),
       (42369029, 'guard column', 'TosoHaas', '06762', '2014-03-28 13:40:52', 'canano_admin'),
       (42369030, 'separation column', 'TosoHaas', 'TSKgel G4000PW 05763', '2014-03-28 13:43:08', 'canano_admin'),
       (42369031, 'guard column', 'TosoHaas', 'TSKgel Guard PW 06762', '2014-03-28 13:43:07', 'canano_admin'),
       (42369032, 'control module', 'Wyatt Technologies', 'Eclipse 2', '2014-03-28 15:08:28', 'canano_admin'),
       (42369033, 'multi-angle light scattering detector', 'Wyatt Technologies', 'DAWN EOS', '2014-03-28 15:08:29',
        'canano_admin'),
       (42467328, 'degasser', 'Agilent', 'G1379A', '2014-03-31 10:10:12', 'canano_admin'),
       (42467329, 'separation column', 'Agilent', 'Zorbax 300SB-C8', '2014-03-31 10:10:15', 'canano_admin'),
       (42467330, 'detector', 'Agilent', 'G1315B', '2014-03-31 10:10:16', 'canano_admin'),
       (42467331, 'capillary pump', 'Agilent', 'G1376A', '2014-03-31 10:10:13', 'canano_admin'),
       (42467332, 'HPLC autosampler', 'Agilent', 'G1377A', '2014-03-31 10:10:14', 'canano_admin'),
       (42467333, 'solvent delivery module', 'Shimadzu', 'LC-20AT', '2014-03-31 10:49:04', 'canano_admin'),
       (42467334, '[other]', 'Shimadzu', 'C-R3A', '2014-03-31 10:49:07', 'canano_admin'),
       (42467335, 'separation column', 'Agilent', 'Zorbax C-18', '2014-03-31 10:49:08', 'canano_admin'),
       (42467336, 'detector', 'Shimadzu', 'SPD-20A', '2014-03-31 10:49:05', 'canano_admin'),
       (42467337, 'HPLC autosampler', 'Shimadzu', 'SIL-20AC', '2014-03-31 10:49:06', 'canano_admin'),
       (42467338, 'integrator', 'Shimadzu', 'C-R3A', '2014-03-31 10:54:15', 'canano_admin'),
       (42467339, 'gamma counter', '', '', '2014-04-03 09:48:09', 'canano_admin'),
       (42467340, '', 'Xenogen', '', '2014-04-07 12:14:02', 'canano_admin'),
       (42467341, '', 'Xenogen', '', '2014-04-07 12:14:03', 'canano_admin'),
       (43384832, 'fourier transform infrared spectrophotometer', 'PerkinElmer', '100', '2014-05-07 12:53:06',
        'canano_admin'),
       (43384833, 'scanning electron microscope', 'FEI', 'Inspect', '2014-05-07 13:33:42', 'canano_admin'),
       (43384834, 'transmission electron microscope', 'FEI', 'CM20', '2014-05-08 10:54:03', 'canano_admin'),
       (43384835, 'powder diffractometer', 'Siemens', 'D500', '2014-05-08 11:00:39', 'canano_admin'),
       (43384836, 'VSM magnetometer', 'Princeton Applied Research', '155', '2014-05-08 11:14:46', 'canano_admin'),
       (43384837, 'magnetometer', 'FW Bell', '640', '2014-05-08 11:14:47', 'canano_admin'),
       (43384838, 'magnet power supply', 'Danfysik', 'SYSTEM 8000', '2014-05-08 11:16:50', 'canano_admin'),
       (43384839, 'induction heating system', 'Ameritherm', 'Easyheat 224', '2014-05-08 11:27:31', 'canano_admin'),
       (43384840, 'spectrophotometer', 'Jasco', 'V-650', '2014-05-08 12:17:01', 'canano_admin'),
       (43384841, 'fiber temperature sensor', '', 'RF-immune fiber optic probe', '2014-05-08 13:04:10', 'canano_admin'),
       (43384842, 'scintillation counter', 'Packard', 'Minaxi 5500', '2014-05-08 14:07:45', 'canano_admin'),
       (43384843, 'gamma camera', '', 'small animal gamma camera', '2014-05-08 14:18:06', 'canano_admin'),
       (43384844, 'spectrophotometer', 'SAEC Radim', 'Sirio S', '2014-05-09 10:36:21', 'canano_admin'),
       (43384845, 'fourier transform infrared spectrophotometer', 'PerkinElmer', 'Spectrum 100', '2014-05-12 11:24:17',
        'canano_admin'),
       (43384846, '', 'ChemoMetec', '', '2014-05-12 16:39:43', 'canano_admin'),
       (43646976, 'confocal microscope', 'Zeiss', 'LSM 510', '2014-05-23 15:38:35', 'canano_admin'),
       (43646977, 'qRT-PCR instrument', 'Applied Biosystems', '7500 Fast Real-Time PCR', '2014-06-10 13:10:04',
        'canano_admin'),
       (43646978, 'staining system', 'Dako', 'Autostainer Plus', '2014-06-11 13:39:38', 'canano_admin'),
       (43646979, 'staining system', 'Leica', 'BOND-MAX', '2014-06-11 13:39:39', 'canano_admin'),
       (43646980, 'inductively coupled plasma mass spectrometer', 'Thermo Fisher', 'XSERIES 2', '2014-06-12 13:01:27',
        'canano_admin'),
       (43646981, 'preclinical imaging system', 'PerkinElmer', 'IVIS Spectrum', '2014-06-20 16:09:31', 'canano_admin'),
       (44564480, 'small animal MRI scanner', 'Bruker', 'Biospec 94', '2014-06-23 13:10:41', 'canano_admin'),
       (44564481, 'laser ablation system', 'New Wave Research', 'UP213', '2014-06-23 13:50:20', 'canano_admin'),
       (44793856, 'cytometer', 'Invitrogen', 'Countess', '2014-07-22 12:15:56', 'canano_admin'),
       (44793857, 'double gel permeation column', 'Polymer Laboratories', 'PL-aquagel-OH-40', '2014-08-12 11:02:22',
        'canano_admin'),
       (44793858, 'HPLC system', 'Agilent', 'HP 1100', '2014-08-12 11:03:45', 'canano_admin'),
       (44793859, 'C-18 reverse phase column', 'Richard Scientific', 'HIRPB-4438', '2014-08-12 12:13:17',
        'canano_admin'),
       (44793860, 'fluorescence detector', 'Groton Technology', 'FD-500', '2014-08-12 12:27:52', 'canano_admin'),
       (44793861, 'positron emission tomograph', 'Siemens', 'Focus 220', '2014-08-12 15:08:20', 'canano_admin'),
       (44793862, 'small animal CT scanner', 'Siemens', 'MicroCat II', '2014-08-12 15:14:19', 'canano_admin'),
       (44793863, 'inductively coupled plasma mass spectrometer', '', '', '2014-08-14 12:47:17', 'canano_admin'),
       (45645824, 'magnetic separation instrument', 'Invitrogen', 'DynaMag-Spin', '2014-09-01 14:19:22',
        'canano_admin'),
       (45645825, 'spectrophotometer', 'Shimadzu', 'UV-2550', '2014-09-02 11:25:10', 'canano_admin'),
       (45645826, 'transmission electron microscope', 'FEI', 'Tecnai G2 20 TWIN', '2014-09-03 10:09:41',
        'canano_admin'),
       (45645827, 'VSM magnetometer', 'Lakeshore', '7410', '2014-09-03 10:41:56', 'canano_admin'),
       (45645828, 'inverted microscope', 'Nikon', 'Eclipse Ti-U', '2014-09-03 12:37:58', 'canano_admin'),
       (45645829, 'spectrofluorometer', 'Horiba', 'FluoroLog-3', '2014-09-03 15:14:20', 'canano_admin'),
       (45645830, 'inverted research microscope', 'Nikon', 'Eclipse Ti-U', '2014-09-04 12:42:57', 'canano_admin'),
       (45645831, 'imaging system', 'Andor', 'Revolution XD', '2014-09-05 10:50:45', 'canano_admin'),
       (45645832, 'confocal scanner unit', 'Yokogawa', 'CSU22', '2014-09-05 10:53:05', 'canano_admin'),
       (45645833, 'EMCCD camera', 'Andor', 'iXon DV885K', '2014-09-05 11:03:24', 'canano_admin'),
       (45645834, 'research microscope', 'Nikon', 'Eclipse Ti-U', '2014-09-05 11:39:08', 'canano_admin'),
       (45645835, 'digital camera', 'Nikon', 'DS-Ri1', '2014-09-05 11:41:02', 'canano_admin'),
       (45645836, 'thermal cycler', 'Biorad', '', '2014-09-05 11:51:07', 'canano_admin'),
       (45645837, 'thermal cycler', 'Applied Biosystems', 'Gene Amp PCR system 9700', '2014-10-02 13:45:12',
        'canano_admin'),
       (45645838, 'confocal laser scanning microscope', 'Zeiss', 'LSM 510-NLO', '2014-10-03 14:35:41', 'canano_admin'),
       (45645839, 'small animal MRI scanner', 'Bruker', 'Biospec 94/30', '2014-10-06 11:32:09', 'canano_admin'),
       (46202880, 'degasser', 'Agilent', '', '2014-10-20 14:51:31', 'canano_admin'),
       (46202881, 'double gel permeation column', 'Polymer Laboratories', 'PL aquagel - OH 40 8 um 300 x 7.5 mm',
        '2014-10-20 14:51:34', 'canano_admin'),
       (46202882, 'pump', 'Agilent', '', '2014-10-20 14:51:32', 'canano_admin'),
       (46202883, 'autosampler', 'Agilent', '', '2014-10-20 14:51:33', 'canano_admin'),
       (46202884, 'nuclear magnetic resonance spectrometer', 'Varian', 'Inova 500', '2014-10-21 10:42:40',
        'canano_admin'),
       (46202885, 'nuclear magnetic resonance spectrometer', 'Varian', 'Inova 600', '2014-10-21 10:43:57',
        'canano_admin'),
       (46202886, 'spectrophotometer', 'Tecan', 'Infinite 200', '2014-10-21 10:50:03', 'canano_admin'),
       (46202887, 'spectrofluorometer', 'Tecan', 'Infinite 200', '2014-10-21 11:19:27', 'canano_admin'),
       (46202888, 'HPLC system', 'Agilent', '', '2014-10-22 12:43:34', 'canano_admin'),
       (46202889, 'fluorescence detector', '', '', '2014-10-22 12:43:35', 'canano_admin'),
       (46202890, 'reverse phase column', '', '', '2014-10-22 12:43:36', 'canano_admin'),
       (46202891, 'reverse phase column', 'Phenomenex', 'Synergi 4 um Hydro-RP 80A', '2014-10-22 12:45:26',
        'canano_admin'),
       (46202892, 'guard column', '', '', '2014-10-22 12:46:49', 'canano_admin'),
       (46202893, 'HPLC system', '', '', '2014-10-23 11:32:09', 'canano_admin'),
       (46202894, 'transmission electron microscope', 'FEI', 'Tecnai T12', '2014-10-24 14:15:12', 'canano_admin'),
       (46202895, 'confocal laser scanning microscope', 'Zeiss', 'LSM 510 META', '2014-10-29 15:09:26', 'canano_admin'),
       (47022080, 'capillary electrophoresis instrument', 'Ameritherm', 'test', '2014-12-16 14:43:59', 'canano_admin'),
       (47644672, 'preclinical imaging system', 'Caliper Life Sciences', 'Xenogen IVIS 200', '2015-01-13 14:38:28',
        'canano_admin'),
       (47644673, 'digital camera', 'Leica', 'DFC 320', '2015-01-13 14:49:13', 'canano_admin'),
       (47644674, 'separation column', 'Dikma Technologies', 'Diamonsil C18', '2015-01-14 13:48:47', 'canano_admin'),
       (47644675, 'dual absorbance detector', 'Shimadzu', 'SPD-20A', '2015-01-14 13:48:46', 'canano_admin'),
       (47644676, 'flow cytometer', 'BD Biosciences', 'Accuri C6', '2015-01-16 11:56:48', 'canano_admin'),
       (47644677, 'reverse phase column', 'Dikma Technologies', 'Diamonsil C18', '2015-01-16 12:16:50', 'canano_admin'),
       (47644678, 'high content analysis reader', 'Thermo Scientific',
        'ArrayScan XTI High Content Analysis (HCA) Reader', '2015-01-16 14:46:28', 'canano_admin'),
       (47644679, 'guard column', 'Agilent', '', '2015-01-28 11:31:47', 'canano_admin'),
       (47644680, 'reverse phase column', 'Phenomenex', 'Synergi 4 um Hydro-RP 80 A', '2015-01-28 11:31:46',
        'canano_admin'),
       (47644681, 'fluorescence detector', 'Agilent', '', '2015-01-28 11:31:45', 'canano_admin'),
       (47644682, '', 'Phenomenex', 'Synergi 4 um Hydro-RP 80 A', '2015-01-28 12:15:12', 'canano_admin'),
       (47644683, 'digital camera', 'QImaging', '', '2015-01-28 13:30:50', 'canano_admin'),
       (47644684, 'thermal cycler', 'Applied Biosystems', '', '2015-01-29 11:37:37', 'canano_admin'),
       (47644685, 'bioanalyzer', 'Luminex', 'Flexmap 3D', '2015-01-29 13:00:24', 'canano_admin'),
       (47644686, 'bioanalyzer', 'Luminex', 'Luminex 100', '2015-01-29 13:00:23', 'canano_admin'),
       (47939584, 'genotyping system', 'Affymetrix', 'GeneChip Scanner 3000 7G', '2015-01-30 10:59:52', 'canano_admin'),
       (48300032, 'spectrophotometer', 'Shimadzu', 'SPD-20A', '2015-04-10 13:00:09', 'canano_admin'),
       (48300033, 'spectrophotometer', 'Shimadzu', 'SPD-2A', '2015-04-10 14:17:27', 'canano_admin'),
       (48300034, 'spectrophotometer', 'Thermo Fisher', 'Varioskan Flash Multimode Reader', '2015-04-10 14:42:54',
        'canano_admin'),
       (48300035, 'inverted microscope', 'Zeiss', 'Axio Vert.A1', '2015-04-10 14:54:00', 'canano_admin'),
       (48300036, 'spectrofluorometer', 'Thermo Fisher', 'Varioskan Flash Multimode Reader Type 3001',
        '2015-04-13 11:11:16', 'canano_admin'),
       (48300037, 'research microscope', 'Olympus', 'BX51', '2015-04-13 11:46:48', 'canano_admin'),
       (48300038, 'spectrofluorometer', 'Thermo Fisher', 'Varioskan Flash Multimode Reader', '2015-04-13 11:59:13',
        'canano_admin'),
       (48300039, 'confocal laser scanning microscope', 'Zeiss', 'LSM-510', '2015-04-13 15:04:08', 'canano_admin'),
       (48300040, 'nanoparticle tracking analyzer', 'Nanosight', 'LM10', '2015-04-15 13:52:06', 'canano_admin'),
       (48300041, 'confocal laser scanning microscope', 'Zeiss', 'LSM 510', '2015-04-16 14:29:39', 'canano_admin'),
       (49250304, 'thermogravimetric analyzer', 'TA Instruments', 'Q50', '2015-07-02 15:17:52', 'canano_admin'),
       (49250305, 'electrophoretic light scattering instrument', 'Malvern', 'Zetasizer Nano XS', '2015-07-03 14:25:15',
        'canano_admin'),
       (49250306, 'reverse phase column', 'Phenomenex', 'Luna C18 250 x 2.8 mm 5 um', '2015-07-03 14:37:10',
        'canano_admin'),
       (49250307, 'detector', 'Beckman/Coulter', '128', '2015-07-03 14:37:09', 'canano_admin'),
       (49250308, 'solvent delivery module', 'Beckman/Coulter', '126P', '2015-07-03 14:37:08', 'canano_admin'),
       (49250309, 'HPLC system', 'Beckman/Coulter', 'System Gold', '2015-07-03 14:37:07', 'canano_admin'),
       (49250310, 'spectrophotometer', 'PerkinElmer', 'Victor 3V', '2015-07-06 13:54:42', 'canano_admin'),
       (49250311, 'inverted microscope', 'Zeiss', 'Axiovert 200M', '2015-07-06 14:41:07', 'canano_admin'),
       (49250312, 'imaging system', 'Stanford Photonics', 'bioluminescence imaging system', '2015-07-08 10:42:03',
        'canano_admin'),
       (49250313, 'research upright microscope', 'Zeiss', 'Axioskop 49', '2015-07-08 10:45:19', 'canano_admin'),
       (49250314, 'research upright microscope', 'Zeiss', 'Axioskop 40', '2015-07-08 12:14:44', 'canano_admin'),
       (49250315, 'gamma counter', 'PerkinElmer', 'Wizard2', '2015-07-09 14:57:51', 'canano_admin'),
       (49250316, 'preclinical PET/CT scanner', 'Siemens', 'Inveon', '2015-07-13 13:49:47', 'canano_admin'),
       (49250317, 'preclinical small animal PET/CT scanner', 'Siemens', 'Inveon', '2015-07-14 11:16:28',
        'canano_admin'),
       (49250318, 'confocal laser scanning microscope', 'Zeiss', 'LSM 700', '2015-07-16 11:57:20', 'canano_admin'),
       (49250319, 'laser scanning confocal microscope', 'Zeiss', 'LSM 700', '2015-07-16 12:18:11', 'canano_admin'),
       (49250320, 'inverted microscope', 'Zeiss', 'Axiovert', '2015-07-16 12:28:21', 'canano_admin'),
       (49250321, 'spectrofluorometer', 'PerkinElmer', 'LS55', '2015-07-16 12:51:55', 'canano_admin'),
       (49250322, 'inverted research microscope', 'Zeiss', 'Axiovert 200M', '2015-07-16 12:54:15', 'canano_admin'),
       (50233344, 'dynamic light scattering instrument', 'Malvern', 'Zetasizer Nano series', '2015-09-04 12:27:34',
        'canano_admin'),
       (50233345, 'electrophoretic light scattering instrument', 'Malvern', 'Zetasizer Nano series',
        '2015-09-04 12:36:01', 'canano_admin'),
       (50233346, 'scanning electron microscope', 'FEI', 'Quanta 650', '2015-09-04 12:39:03', 'canano_admin'),
       (50233347, 'digital thermometer', 'Omega', 'HH309A', '2015-09-04 14:24:17', 'canano_admin'),
       (50233348, 'diode laser', 'Diomed', '15 Plus', '2015-09-07 15:14:28', 'canano_admin'),
       (50233349, 'inductively coupled plasma mass spectrometer', 'PerkinElmer', 'ELAN 9000', '2015-09-08 12:05:58',
        'canano_admin'),
       (50233350, 'research upright microscope', 'Olympus', 'BX 41', '2015-09-08 15:42:00', 'canano_admin'),
       (50233351, 'ICCD camera', 'Princeton Instruments', 'PI-MAX', '2015-09-09 10:46:43', 'canano_admin'),
       (50233352, 'diode laser', 'Angiodynamics', 'Diomed 15 Plus', '2015-09-09 10:52:13', 'canano_admin'),
       (50233353, 'scanning electron microscope', 'FEI', 'Quanta 650 FEG', '2015-09-09 13:01:50', 'canano_admin'),
       (50233354, 'inductively coupled plasma mass spectrometer', 'PerkinElmer', 'ELA 9000', '2015-09-11 13:12:36',
        'canano_admin'),
       (51412992, 'transmission electron microscope', 'FEI', 'Tecnai 20', '2015-10-22 10:46:25', 'canano_admin'),
       (52002816, 'bioanalyzer', 'Alltech', 'test', '2015-10-29 11:23:05', 'canano_admin'),
       (52002817, 'induction heating system', 'Abbott', 'test', '2015-10-29 11:26:41', 'canano_admin'),
       (52002818, 'coagulation monitor', 'Amersham Pharmacia Biotech', 'test', '2015-10-29 11:28:45', 'canano_admin'),
       (52002819, 'deconvolution fluorescence microscope', 'B&W Tek', 'test', '2015-10-29 11:30:44', 'canano_admin'),
       (55083008, 'confocal microscope', 'Nikon', 'A1', '2016-04-29 11:53:12', 'canano_admin'),
       (55083009, 'spectrofluorometer', 'BioTek', 'Synergy HT', '2016-05-02 11:51:08', 'canano_admin'),
       (55083010, 'preclinical imaging system', 'Carestream', 'Kodak Image Station 4000MM', '2016-05-03 11:02:25',
        'canano_admin'),
       (55803904, 'dynamic light scattering instrument', 'Luxtron', 'Zetasizer Nano ZS', '2016-05-11 12:13:52',
        'canano_admin'),
       (55803905, 'spectrophotometer', 'Varian', 'Cary 100 BIO', '2016-05-11 12:45:13', 'canano_admin'),
       (55803906, '', 'Malvern', 'Zetasizer Nano ZS', '2016-05-16 11:46:02', 'canano_admin'),
       (55803907, 'spectrofluorometer', 'Varian', 'Cary 100 BIO', '2016-05-16 12:24:19', 'canano_admin'),
       (56295424, '', 'Malvern', 'Zetasizer Nano', '2016-05-25 10:16:34', 'canano_admin'),
       (56295425, 'inductively coupled plasma-atomic emission spectrometer', 'PerkinElmer', 'Optima 3000',
        '2016-05-25 11:11:22', 'canano_admin'),
       (56295426, 'preclinical imaging system', 'Carestream', 'In-Vivo FX MS PRO', '2016-05-25 11:35:59',
        'canano_admin'),
       (56295427, 'digital camera', 'Leica', 'DFC420', '2016-05-26 11:22:52', 'canano_admin'),
       (56295428, 'spectrofluorometer', 'BMG LABTECH', 'PHERAstar Plus', '2016-06-01 11:34:10', 'canano_admin'),
       (56295429, 'detector', 'Waters', '2996', '2016-06-09 14:45:36', 'canano_admin'),
       (56295430, 'separation module', 'Waters', '2695', '2016-06-09 14:45:35', 'canano_admin'),
       (56295431, 'separation column', 'Waters', 'SunFire C8 (5 um 4.6 mm x 75 mm)', '2016-06-09 14:45:34',
        'canano_admin'),
       (56295432, 'size exclusion column', 'Tosoh Bioscience', 'TSKgel G4000 SWxl', '2016-06-10 11:44:57',
        'canano_admin'),
       (56295433, 'dialysis device', 'Thermo Scientific', '88402', '2016-06-10 12:12:08', 'canano_admin'),
       (56983552, 'thermogravimetric analyzer', 'TA Instruments', 'Q5000', '2016-07-15 13:25:22', 'canano_admin'),
       (56983553, 'preclinical imaging system', 'Caliper Life Sciences', 'IVIS Lumina', '2016-07-18 12:58:30',
        'canano_admin'),
       (56983554, 'spectrofluorometer', 'Molecular Devices', 'SpectraMax M5', '2016-07-20 10:59:38', 'canano_admin'),
       (58261504, 'preclinical imaging system', 'Caliper Life Sciences', 'IVIS Lumina II', '2016-10-17 11:15:07',
        'canano_admin'),
       (58261505, 'flow cytometer', 'Beckman/Coulter', 'CyAn ADP', '2016-10-17 16:53:18', 'canano_admin'),
       (58261506, '', 'Beckman/Coulter', 'CyAn ADP', '2016-10-21 11:58:42', 'canano_admin'),
       (59375616, 'luminometer', 'BioTek', 'Synergy 4', '2016-11-08 11:56:09', 'canano_admin'),
       (59375617, 'qRT-PCR instrument', 'Applied Biosystems', 'Step-One Plus Real Time PCR  System',
        '2016-11-08 14:16:29', 'canano_admin'),
       (59375618, 'spectrofluorometer', 'Horiba', 'SPEX Fluolog-3', '2016-11-09 12:57:59', 'canano_admin'),
       (59375619, 'qRT-PCR instrument', 'Applied Biosystems', 'Step-One Plus Real Time PCR System',
        '2016-11-11 11:37:24', 'canano_admin'),
       (59375620, 'preclinical imaging system', 'Caliper Life Sciences', 'IVIS Spectrum', '2016-11-16 12:01:34',
        'canano_admin'),
       (59375621, 'confocal laser scanning microscope', 'Olympus', 'FV1000', '2016-11-16 12:50:17', 'canano_admin'),
       (59375622, 'temperature gradient gel electrophoresis instrument', 'Biometra', 'TGGE system',
        '2016-11-18 13:11:14', 'canano_admin'),
       (60096512, 'thermal cycler', 'MJ Research', '', '2016-12-08 11:07:52', 'canano_admin'),
       (61145088, 'scintillation counter', 'PerkinElmer', 'Tri-Carb 2000CA', '2017-01-25 11:48:05', 'canano_admin'),
       (61145089, 'scintillation counter', 'Packard', 'Tri-Carb 2000CA', '2017-01-25 13:25:30', 'canano_admin'),
       (61145090, 'spinning disk confocal microscope', 'PerkinElmer', 'UltraVIEW', '2017-01-26 11:42:07',
        'canano_admin'),
       (61145091, 'inductively coupled plasma mass spectrometer', 'PerkinElmer', 'ELAN DRC Plus', '2017-01-27 16:53:18',
        'canano_admin'),
       (61145092, 'spectrophotometer', 'BMG Labtech', 'FLUOstar Omega', '2017-01-30 09:51:57', 'canano_admin'),
       (61669376, 'transmission electron microscope', 'Zeiss', 'Libre 200 FE', '2017-03-15 12:11:09', 'canano_admin'),
       (61669377, 'spectrophotometer', 'Thermo Scientific', 'NanoDrop 2000', '2017-03-15 12:16:50', 'canano_admin'),
       (61669378, 'inverted research microscope', 'Zeiss', 'Axio Observer Z1', '2017-03-15 12:45:44', 'canano_admin'),
       (62914560, 'spectrofluorometer', 'PerkinElmer', 'LS 55', '2017-05-03 09:53:56', 'canano_admin'),
       (62914561, 'HPLC system', 'Agilent', '1200', '2017-05-03 12:35:55', 'canano_admin'),
       (62914562, 'reverse phase column', '', 'Nucleosil C18', '2017-05-03 12:35:56', 'canano_admin'),
       (62914563, 'transmission electron microscope', 'Zeiss', 'LEO EM 910', '2017-05-04 13:30:38', 'canano_admin'),
       (62914564, 'digital camera', 'Gatan', 'Orius SC1000', '2017-05-04 13:30:39', 'canano_admin'),
       (63275008, 'scintillation counter', 'Packard', 'Tri Carb 4000', '2017-05-08 12:16:49', 'canano_admin'),
       (64258048, 'electrophoretic light scattering instrument', 'Malvern', '', '2017-08-02 10:11:58', 'canano_admin'),
       (64258049, 'transmission electron microscope', 'FEI', 'Tecmai T12', '2017-08-02 10:37:50', 'canano_admin'),
       (64258050, 'digital camera', 'TVIPS', 'F224', '2017-08-02 10:37:51', 'canano_admin'),
       (64258051, 'bead-formed agarose-based gel filtration matrix', '', 'Sepharose 6B', '2017-08-02 12:06:58',
        'canano_admin'),
       (64258052, 'automated hematology analyzer', 'Sysmex', 'XE-2100', '2017-08-03 20:04:21', 'canano_admin'),
       (64258053, 'confocal laser scanning microscope', 'Zeiss', 'LSM 410', '2017-08-04 13:12:10', 'canano_admin'),
       (64258054, 'scintillation counter', 'Wallac', '1409', '2017-08-04 13:45:21', 'canano_admin'),
       (64847872, 'C-18 reverse phase column', '', 'Zorbax 300SB-C18 column', '2017-08-29 10:37:46', 'canano_admin'),
       (64847873, '', '', 'Dowex cation-exchange resin beads', '2017-08-29 10:48:45', 'canano_admin'),
       (64847874, 'reverse phase column', '', 'C8 column', '2017-08-29 10:54:12', 'canano_admin'),
       (64847875, 'spectrofluorometer', 'Kontron Instruments', 'SFM 25', '2017-08-29 10:55:53', 'canano_admin');
/*!40000 ALTER TABLE `instrument`
    ENABLE KEYS */;
UNLOCK TABLES;



LOCK TABLES `common_lookup` WRITE;
/*!40000 ALTER TABLE `common_lookup`
    DISABLE KEYS */;

INSERT INTO `common_lookup` (`common_lookup_pk_id`, `name`, `attribute`, `value`)
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
       (1027, 'material', 'value_unit','%'),
       (1028, 'material', 'value_unit','%mol'),
       (1029, 'material', 'value_unit','%mole'),
       (1030, 'material', 'value_unit','%wt'),
       (1031, 'material', 'value_unit','%wt/vol'),
       (1032, 'material', 'value_unit','%wt/wt'),
       (1033, 'material', 'value_unit','g'),
       (1034, 'material', 'value_unit','g/cm3'),
       (1035, 'material', 'value_unit','g/mL'),
       (1036, 'material', 'value_unit','Gy'),
       (1037, 'material', 'value_unit','L'),
       (1038, 'material', 'value_unit','M'),
       (1039, 'material', 'value_unit','mCi'),
       (1040, 'material', 'value_unit','mg'),
       (1041, 'material', 'value_unit','mg/mL'),
       (1042, 'material', 'value_unit','microCi'),
       (1043, 'material', 'value_unit','microCi/mg'),
       (1044, 'material', 'value_unit','mL'),
       (1045, 'material', 'value_unit','mM'),
       (1046, 'material', 'value_unit','mmol'),
       (1047, 'material', 'value_unit','mmol/L'),
       (1048, 'material', 'value_unit','mol'),
       (1049, 'material', 'value_unit','mol%'),
       (1050, 'material', 'value_unit','mole%'),
       (1051, 'material', 'value_unit','ng'),
       (1052, 'material', 'value_unit','nM'),
       (1053, 'material', 'value_unit','nmol'),
       (1054, 'material', 'value_unit','pmol'),
       (1055, 'material', 'value_unit','uCi/mg'),
       (1056, 'material', 'value_unit','ug'),
       (1057, 'material', 'value_unit','ug/mL'),
       (1058, 'material', 'value_unit','ug/uL'),
       (1059, 'material', 'value_unit','uL'),
       (1060, 'material', 'value_unit','uL/mL'),
       (1061, 'material', 'value_unit','uM'),
       (1062, 'material', 'value_unit','umol'),
       (1063, 'material', 'value_unit','wt%'),
       (1064, 'material', 'value_unit','wt/wt'),
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
       (1093, 'functionalization', 'type', 'small molecule');


/*!40000 ALTER TABLE `common_lookup`
    ENABLE KEYS */;
UNLOCK TABLES;
