#! /bin/bash
#
# Copyright 2022, Institute for Systems Biology
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
# ---------------------------------------
#
# See: https://mathiasbynens.be/notes/mysql-utf8mb4
# See: https://dev.mysql.com/doc/refman/8.0/en/charset-unicode-conversion.html
# See: https://www.a2hosting.com/kb/developer-corner/mysql/convert-mysql-database-utf-8
#

#
# Run this: SHOW VARIABLES WHERE Variable_name LIKE 'character\_set\_%' OR Variable_name LIKE 'collation%'
# Current database: canano
#
#+--------------------------+-------------------+
#| Variable_name            | Value             |
#+--------------------------+-------------------+
#| character_set_client     | utf8              |
#| character_set_connection | utf8              |
#| character_set_database   | latin1            |
#| character_set_filesystem | binary            |
#| character_set_results    | utf8              |
#| character_set_server     | utf8              |
#| character_set_system     | utf8              |
#| collation_connection     | utf8_general_ci   |
#| collation_database       | latin1_swedish_ci |
#| collation_server         | utf8_general_ci   |
#+--------------------------+-------------------+

#
# Useful commands to check encoding:
# SELECT default_character_set_name FROM information_schema.SCHEMATA S WHERE schema_name = "dbname";
#
# SELECT CCSA.character_set_name FROM information_schema.`TABLES` T,information_schema.`COLLATION_CHARACTER_SET_APPLICABILITY` CCSA WHERE CCSA.collation_name = T.table_collation AND T.table_schema = "dbname" AND T.table_name = "tablename";
#
#
# We want to look at all the fields in the DB and see if any are in danger with going from 1 byte/char to max of 4 bytes/char.
#
# cat table_dump.txt | awk  '{gsub("\\\\n","\n")};1' | grep -v "PRIMARY KEY" | grep -v "UNIQUE KEY" | grep -v "Create Table" \
#  | grep -v ENGINE | grep -v KEY | grep -v CONSTRAINT | sed 's/.*`.*` //' | sed 's/ .*//' | sort | uniq
# bigint
# datetime
# decimal(22,0)
# decimal(22,3)
# decimal(30,10)
# decimal(30,3)
# int
# text
# tinyint
# tinyint(1)
# varchar(1)
# varchar(10)
# varchar(100)
# varchar(20)
# varchar(200)
# varchar(2000)
# varchar(255)
# varchar(32)
# varchar(50)
# varchar(500)
# varchar(63)
#
# Note that there is no risk upon conversion of "Mojibake" (https://en.wikipedia.org/wiki/Mojibake) since the
# latin set used in the database is valid UNICODE as-is. For future use, fields that accepted e.g. 10 latin characters
# might now only accept two four-byte emojis
#

#
# Note: this assumes you have put user and password into file ~/.my.cnf.
#
# [client]
# user=username
# password=password
#
# Then set permissions!
# chmod 0600 ~/.my.cnf

DB_NAME=canano

#
# Set default characters for future  tables:
#
mysql -B -e "ALTER DATABASE ${DB_NAME} CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci"

#
# For every table, change the encoding:
#
mysql -D ${DB_NAME} -B -N -e "SHOW TABLES" | sed 's/^/`/' | sed 's/$/`/' | awk '{print "SET foreign_key_checks = 0; ALTER TABLE", $1, "CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci; SET foreign_key_checks = 1; "}' | mysql -D ${DB_NAME}

#
# Repair and optimize:
#
mysqlcheck ${DB_NAME} --auto-repair --optimize


#
# Following conversion, if any column needs e.g. a length tweak, here is the syntax:
#
# ALTER TABLE table_name CHANGE column_name column_name VARCHAR(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

#
# Following upgrade:
#

#SHOW VARIABLES WHERE Variable_name LIKE 'character\_set\_%' OR Variable_name LIKE 'collation%';
#+--------------------------+--------------------+
#| Variable_name            | Value              |
#+--------------------------+--------------------+
#| character_set_client     | utf8mb4            |
#| character_set_connection | utf8mb4            |
#| character_set_database   | utf8mb4            |
#| character_set_filesystem | binary             |
#| character_set_results    | utf8mb4            |
#| character_set_server     | utf8mb4            |
#| character_set_system     | utf8mb3            |
#| collation_connection     | utf8mb4_0900_ai_ci |
#| collation_database       | utf8mb4_general_ci |
#| collation_server         | utf8mb4_0900_ai_ci |
#+--------------------------+--------------------+
