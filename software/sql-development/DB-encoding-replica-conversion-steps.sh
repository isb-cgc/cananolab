#! /bin/bash
#
# To check that replica converted as well, and to set the DB flags of the replica:
#


SQL_HOME='path to mysql on desktop'
INSTANCE='instance-name'
PROJECT='project-name'
DATABASE='database-name'
DB_IP='ip-address'
CERT_DIR='cetificate-dir-path'
CERT_FILE='client-cert.pem'
KEY_FILE='client-key.pem'
CA_FILE='server-ca.pem'
DB_USER='database user'

ENV_FILE="./DB-encoding-conversion-steps-SetEnv.sh"

if [ -f "${ENV_FILE}" ]; then
    source "${ENV_FILE}"
fi

# Set up .my.cmd with username and password first!

read -p "Have you prepared ~/.my.cnf with username and password? Press return to continue... "
chmod 600 ~/.my.cnf

echo "Step 3: Show each table encoding"
${SQL_HOME}/mysql -D ${DATABASE} -h ${DB_IP} -B -N --ssl-mode=VERIFY_CA \
   --ssl-cert=${CERT_DIR}/${CERT_FILE} --ssl-key=${CERT_DIR}/${KEY_FILE} --ssl-ca=${CERT_DIR}/${CA_FILE} \
    -e "SHOW TABLES" | awk '{printf "SELECT CCSA.character_set_name, CCSA.collation_name FROM information_schema.`TABLES` T,information_schema.COLLATION_CHARACTER_SET_APPLICABILITY CCSA WHERE CCSA.collation_name = T.table_collation AND T.table_schema = \"'${DATABASE}'\" AND T.table_name = \"%s\";", $1}' \
   | mysql -D ${DATABASE} -h ${DB_IP} --ssl-mode=VERIFY_CA --verbose \
    --ssl-cert=${CERT_DIR}/${CERT_FILE} --ssl-key=${CERT_DIR}/${KEY_FILE} --ssl-ca=${CERT_DIR}/${CA_FILE}

#
# The database instance needs flags:
#

FLAGS=$(gcloud sql instances describe ${INSTANCE} --project=${PROJECT} | awk '/databaseFlags:/, /ipConfiguration:/' | grep "name\|value" | \
        tr -d '\n' | sed 's/ - name:/,/g' | sed 's/   value:/=/g' | tr -d " " | sed 's/\x27//g' | sed 's/,/--database-flags=/')

FLAGS="${FLAGS},character_set_server=utf8mb4"

echo "Flags will be " ${FLAGS}
read -r -p "Are you sure? [y/N] " response
if [[ ! "${response}" =~ ^([yY][eE][sS]|[yY])$ ]]; then
    echo "Exiting"
    exit
fi

gcloud sql instances patch ${INSTANCE} --project=${PROJECT} ${FLAGS}