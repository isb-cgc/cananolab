#! /bin/bash
#
# To convert database:
#
# Add a downtime message to the header page (lines 35-37 in:
# software/cananolab-client-new/src/app/cananolab-client/header/header.component.html) and
# deploy with a few days lead time
#
# System offline (Change load balancer default route to backend offline bucket)
# Wait for this message to propagate
# Do a backup dump SQL (SA needs storage object write for this)
# Convert
# Do a post-conversion dump
# Compare before and after. Will see encoding changes as well as text->textmedium
# Change setting in Cloud SQL to new encoding
# Comment out downtime message in the header page (lines 35-37 in:
# software/cananolab-client-new/src/app/cananolab-client/header/header.component.html)
# Redeploy (needed to reset database connection and remove header)
#
# System online

# For cloud: https://cloud.google.com/sql/docs/mysql/import-export/import-export-sql

SQL_HOME='path to mysql on desktop'
INSTANCE='instance-name'
PROJECT='project-name'
DATABASE='database-name'
STORAGE_BUCKET='gs://your-storage-bucket/'
PRE_STORAGE_FILE='PreConvert-Filename.sql'
POST_STORAGE_FILE='PostConvert-Filename.sql'
PRE_STORAGE=${STORAGE_BUCKET}${PRE_STORAGE_FILE}
POST_STORAGE=${STORAGE_BUCKET}${POST_STORAGE_FILE}
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

SQL_SA=$(gcloud sql instances describe ${INSTANCE} --project=${PROJECT} | grep serviceAccountEmailAddress | sed 's/.*: //')

# To import, the SQL SA needs to be able to read from the bucket, export needs write:

gcloud projects add-iam-policy-binding ${PROJECT} --member=serviceAccount:${SQL_SA} --role=roles/storage.objectAdmin

gcloud sql export sql ${INSTANCE} ${PRE_STORAGE} --database=${DATABASE} --project=${PROJECT}

# Set up .my.cmd with username and password first!

read -p "Have you prepared ~/.my.cnf with username and password? Press return to continue... "
chmod 600 ~/.my.cnf

echo "Step 1: Alter database default"
${SQL_HOME}/mysql -h ${DB_IP} --ssl-mode=VERIFY_CA --verbose \
   --ssl-cert=${CERT_DIR}/${CERT_FILE} --ssl-key=${CERT_DIR}/${KEY_FILE} --ssl-ca=${CERT_DIR}/${CA_FILE} \
   -B -e "ALTER DATABASE ${DATABASE} CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci"

echo "Step 2: Convert each table"
${SQL_HOME}/mysql -D ${DATABASE} -h ${DB_IP} -B -N --ssl-mode=VERIFY_CA \
   --ssl-cert=${CERT_DIR}/${CERT_FILE} --ssl-key=${CERT_DIR}/${KEY_FILE} --ssl-ca=${CERT_DIR}/${CA_FILE} \
   -e "SHOW TABLES" | sed 's/^/`/' | sed 's/$/`/' | awk '{print "SET foreign_key_checks = 0; ALTER TABLE", $1, "CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci; SET foreign_key_checks = 1; "}' \
   | mysql -D ${DATABASE} -h ${DB_IP} --ssl-mode=VERIFY_CA --verbose \
    --ssl-cert=${CERT_DIR}/${CERT_FILE} --ssl-key=${CERT_DIR}/${KEY_FILE} --ssl-ca=${CERT_DIR}/${CA_FILE}

echo "Step 3: Show each table encoding"
${SQL_HOME}/mysql -D ${DATABASE} -h ${DB_IP} -B -N --ssl-mode=VERIFY_CA \
   --ssl-cert=${CERT_DIR}/${CERT_FILE} --ssl-key=${CERT_DIR}/${KEY_FILE} --ssl-ca=${CERT_DIR}/${CA_FILE} \
    -e "SHOW TABLES" | awk '{printf "SELECT CCSA.character_set_name, CCSA.collation_name FROM information_schema.`TABLES` T,information_schema.COLLATION_CHARACTER_SET_APPLICABILITY CCSA WHERE CCSA.collation_name = T.table_collation AND T.table_schema = \"'${DATABASE}'\" AND T.table_name = \"%s\";", $1}' \
   | mysql -D ${DATABASE} -h ${DB_IP} --ssl-mode=VERIFY_CA --verbose \
    --ssl-cert=${CERT_DIR}/${CERT_FILE} --ssl-key=${CERT_DIR}/${KEY_FILE} --ssl-ca=${CERT_DIR}/${CA_FILE}

echo "Step 4: mysqlcheck"
${SQL_HOME}/mysqlcheck -h ${DB_IP} --auto-repair --optimize --ssl-mode=VERIFY_CA \
   --ssl-cert=${CERT_DIR}/${CERT_FILE} --ssl-key=${CERT_DIR}/${KEY_FILE} --ssl-ca=${CERT_DIR}/${CA_FILE} ${DATABASE}

echo "Step 5: export transformed database"
gcloud sql export sql ${INSTANCE} ${POST_STORAGE} --database=${DATABASE} --project=${PROJECT}

echo "Step 6 diff the exports"

gsutil cp ${PRE_STORAGE} /tmp
gsutil cp ${POST_STORAGE} /tmp
diff /tmp/${PRE_STORAGE_FILE} /tmp/${POST_STORAGE_FILE} > ${HOME}/database_diff.txt
rm /tmp/${PRE_STORAGE_FILE} /tmp/${POST_STORAGE_FILE}
