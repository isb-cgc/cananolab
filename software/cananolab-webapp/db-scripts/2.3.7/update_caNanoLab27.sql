CREATE TABLE `supplier` (
  `supplier_pk_id` bigint(20) NOT NULL,
  `supplier_name` varchar(200) NOT NULL,
  `lot` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`supplier_pk_id`),
  UNIQUE KEY `supplier_pk_id` (`supplier_pk_id`),
  KEY `supplier_pk_id_2` (`supplier_pk_id`),
  CONSTRAINT `supplier_ibfk_1` FOREIGN KEY (`supplier_pk_id`) REFERENCES `functionalizing_entity` (`functionalizing_entity_pk_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

insert into common_lookup
(common_lookup_pk_id, name, attribute, value) 
VALUES (1000, "protocol", "type", "functionalization");
