#!/bin/bash
export NODE_OPTIONS=--openssl-legacy-provider
cd cananolab-client-new/
rm -rf /tmp/cananolab_new_client
ng build --base-href / --output-path /tmp/cananolab_new_client
# cd /tmp/cananolab_new_client
# jar -cvf cananolab_new_client.war *

JBOSS=/users/mi/wildfly-23.0.2.Final/bin/jboss-cli.sh
$JBOSS --file=/Users/mi/software/cananolab/software/caNanoLab_deploy_frontend.cli
