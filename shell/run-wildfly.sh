cd /opt/wildfly-8.2.1.Final/bin

./jboss-cli.sh --file=/local/content/caNanoLab/artifacts/caNanoLab_modules.cli
./jboss-cli.sh --file=/local/content/caNanoLab/artifacts/caNanoLab_setup.cli
./jboss-cli.sh --file=/local/content/caNanoLab/artifacts/caNanoLab_deploy.cli

./standalone.sh --server-config=standalone-full.xml -b 0.0.0.0 -bmanagement 0.0.0.0
