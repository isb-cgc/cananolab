#!/bin/sh
npm install
rm -rf '/local/home/wildfly8a/cananolab_new_client'
ng build --base-href '.' --configuration 'production' --output-path '/local/home/wildfly8a/cananolab_new_client'
cd '/local/home/wildfly8a/cananolab_new_client'
jar -cvf ROOT.war *
cp ROOT.war /local/content/caNanoLab/artifacts/
