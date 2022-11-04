#!/bin/bash

if [ -z "$CI" ]; then
    if ( "/home/vagrant/cananolab/shell/get_env.sh" ) ; then
        export $(cat ${ENV_FILE_PATH} | grep -v ^# | xargs) 2> /dev/null
    else
        exit 1
    fi
    export HOME=/home/vagrant/cananolab
    export MYSQL_ROOT_USER=root
    export MYSQL_DB_HOST=localhost

    printenv | grep MYSQL_

    echo "Creating Databases..."

    mysql -u "${MYSQL_ROOT_USER}" -h "${MYSQL_DB_HOST}" -p"${MYSQL_ROOT_PASSWORD}" -e "CREATE DATABASE ${DATABASE_NAME};"

    echo "Creating Database users..."
    mysql -u "${MYSQL_ROOT_USER}" -h "${MYSQL_DB_HOST}" -p"${MYSQL_ROOT_PASSWORD}" -e "CREATE USER '${DATABASE_USER}'@'%' IDENTIFIED BY '${DATABASE_PASSWORD}';"
    mysql -u "${MYSQL_ROOT_USER}" -h "${MYSQL_DB_HOST}" -p"${MYSQL_ROOT_PASSWORD}" -e "CREATE USER '${DATABASE_USER}'@'localhost' IDENTIFIED BY '${DATABASE_PASSWORD}';"

    echo "Granting permissions to database users..."
    mysql -u "${MYSQL_ROOT_USER}" -h "${MYSQL_DB_HOST}" -p"${MYSQL_ROOT_PASSWORD}" -e "GRANT ALL PRIVILEGES ON *.* TO '${DATABASE_USER}'@'%';"
    mysql -u "${MYSQL_ROOT_USER}" -h "${MYSQL_DB_HOST}" -p"${MYSQL_ROOT_PASSWORD}" -e "GRANT ALL PRIVILEGES ON *.* TO '${DATABASE_USER}'@'localhost';"

    echo "Loading test database:"
    mysql -u$MYSQL_ROOT_USER -p$MYSQL_ROOT_PASSWORD -h $MYSQL_DB_HOST $DATABASE_NAME < ${HOME}/software/cananolab-webapp/db-scripts/2.4.0/UnitTest.sql

    echo "Database loaded."
else
  echo "This script is not intended for use in CircleCI -- exiting!"
  exit 1
fi
