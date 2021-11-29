The scripts in this folder do the following.

caNano_starter_db.sql
    For an end user or developer wanting to start with a clean, empty database.
    It does contain fields to support lookups and dropdowns but no clinical or sample data

db_update_2.4.0.sql
    For use on an existing database to update it to support the 2.4.0 version of caNanoLab
    This script is meant to be run in our production environment to update from the 2.3.7 version

UnitTest.sql
    Similar to caNano_starter_db.sql, this creates a blank database.
    It then loads in known data to support JUnit testing

UnitTest_existingdata.sql
    This loads the same known data as UnitTest.sql but is meant to be run against an existing database
    It will add the UnitTest data without disturbing the existing data
    Used to allow unit testing against the existing Dev and QA databases.

caNano_Update_mysql.cli
    As part of our update of the mysql and bouncycastle jars, we need to update the modules in WildFly
    This was put here as it supports the database but is actually run using the jboss-cli.sh on WildFly

utf8_conversion.php
    The MySQL database before 2.4.0 is defined as latin1.  This script is meant to update to utf8

