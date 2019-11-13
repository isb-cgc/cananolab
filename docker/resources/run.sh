#!/bin/bash
rm -rf /local/content/caNanoLab/artifacts/*
rm -rf /local/content/caNanoLab/config/*
rm -rf /usr/local/cananolab/software/cananolab-webapp/target/dist
rm -rf /opt/wildfly-8.2.1.Final/modules/com/mysql

cd /usr/local/cananolab/software/cananolab-webapp/
ant dist
cd /usr/local/cananolab/software/cananolab-webapp/target/dist/

cp caNanoLab.war /local/content/caNanoLab/artifacts
cd /usr/local/cananolab/software/cananolab-webapp/target/dist/common
cp bcprov-jdk15on-1.47.jar csmapi-5.2.jar mysql-connector-java-5.1.26.jar caNanoLab_modules.cli caNanoLab_setup.cli caNanoLab_deploy.cli /local/content/caNanoLab/artifacts

cp wikihelp.properties /local/content/caNanoLab/config

/opt/wildfly-8.2.1.Final/bin/jboss-cli.sh --file=/local/content/caNanoLab/artifacts/caNanoLab_modules.cli
/opt/wildfly-8.2.1.Final/bin/jboss-cli.sh --file=/local/content/caNanoLab/artifacts/caNanoLab_setup.cli
/opt/wildfly-8.2.1.Final/bin/jboss-cli.sh --file=/local/content/caNanoLab/artifacts/caNanoLab_deploy.cli
echo "DEPLOYED"
