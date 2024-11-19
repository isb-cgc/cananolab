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

ENV_FILE="./GenerateDropDowns-SetEnv.sh"

if [ -f "${ENV_FILE}" ]; then
    source "${ENV_FILE}"
fi

input="/Users/bill/dropDowns.txt"
CURR_TYPE=""
CURR_NAME=""
touch dropDowns.tsv
while IFS= read -r line
do
  IS_TYPE=`echo ${line} | grep '^Characterization Type: '`
  IS_NAME=`echo ${line} | grep '^Characterization Name: '`
  if [ -n "${IS_TYPE}" ]; then
    CURR_TYPE=`echo ${IS_TYPE} | sed 's/Characterization Type: //'`
  elif [ -n "${IS_NAME}" ]; then
    CURR_NAME=`echo ${IS_NAME} | sed 's/Characterization Name: //'`
  else
    echo "\"${CURR_TYPE}\",\"${CURR_NAME}\",\"${line}\""  >> /Users/bill/dropDowns.csv
  fi
done < "$input"

exit
