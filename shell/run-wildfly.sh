#!/bin/bash

cd /opt/wildfly-8.2.1.Final/bin

./standalone.sh --server-config=standalone-full.xml -b 0.0.0.0 -bmanagement 0.0.0.0 > /tmp/null &

ls -l /local/content/caNanoLab/artifacts/

./jboss-cli.sh --file=/local/content/caNanoLab/artifacts/caNanoLab_modules.cli
./jboss-cli.sh --file=/local/content/caNanoLab/artifacts/caNanoLab_setup.cli
./jboss-cli.sh --file=/local/content/caNanoLab/artifacts/caNanoLab_deploy.cli
