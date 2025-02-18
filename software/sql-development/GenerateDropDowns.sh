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

# Set up .my.cmd with username and password first!

#read -p "Have you prepared ~/.my.cnf with username and password? Press return to continue... "
chmod 600 ~/.my.cnf


# SELECT name, value FROM common_lookup where attribute in ("assayType", "otherAssayType") AND name=order by name, value;

DATABASE=cananofive
input="/Users/bill/CharTypesClean.txt"
CURR_CAT=""
while IFS= read -r line
do
  IS_NOT_BLANK=`echo ${line} | grep -v '^ *$'`
  IS_CAT=`echo ${line} | grep '^assayCategory '`
  if [ -n "${IS_CAT}" ]; then
    CURR_CAT=`echo ${IS_CAT} | sed 's/ *assayCategory //'`
  elif [ -n "${IS_NOT_BLANK}" ]; then
    CURR_CMD="SELECT value FROM common_lookup where attribute in (\"assayType\", \"otherAssayType\") AND name=\"${IS_NOT_BLANK}\" order by name, value;"
    echo 'Characterization Type: ' ${CURR_CAT}
    echo 'Characterization Name: ' ${IS_NOT_BLANK}
    mysql -D ${DATABASE} --batch -N -e "${CURR_CMD}"
  fi
done < "$input"

exit
