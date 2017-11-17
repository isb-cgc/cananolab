LOCK TABLES `target` WRITE;
Alter table target DROP FOREIGN KEY FK_target_function;
Alter table target ADD CONSTRAINT `FK_target_function` FOREIGN KEY (`targeting_function_pk_id`) REFERENCES `nano_function` (`function_pk_id`) on delete cascade;
UNLOCK TABLES;

LOCK TABLES `common_lookup` WRITE;
insert into common_lookup (`common_lookup_pk_id`, `name`,`attribute`, `value` ) values (63307779, 'cytotoxicity', 'otherDatumName', 'cell viability B');
insert into common_lookup (`common_lookup_pk_id`, `name`,`attribute`, `value` ) values (63307780, 'cytotoxicity', 'otherDatumName', 'cell viability C');
insert into common_lookup (`common_lookup_pk_id`, `name`,`attribute`, `value` ) values (63307781, 'Number Modifier','numberModifier','<' );
insert into common_lookup (`common_lookup_pk_id`, `name`,`attribute`, `value` ) values (63307782, 'Number Modifier','numberModifier','>' );
insert into common_lookup (`common_lookup_pk_id`, `name`,`attribute`, `value` ) values (63307783, 'Number Modifier','numberModifier','=' );
insert into common_lookup (`common_lookup_pk_id`, `name`,`attribute`, `value` ) values (63307784, 'Number Modifier','numberModifier','~' );
UNLOCK TABLES;

LOCK TABLES `datum` WRITE;
alter table `datum` add column `numberMod` varchar(20) default '=';
UNLOCK TABLES;

LOCK TABLES `instrument` WRITE;
delete from instrument where created_by = 'DATA_MIGRATION';
UNLOCK TABLES;