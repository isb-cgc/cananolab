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
    export DEBIAN_FRONTEND=noninteractive

    # MySQL Install
    echo "Installing MySQL..."
    sudo -E debconf-set-selections <<< "mysql-server-5.7 mysql-server/root_password password ${MYSQL_ROOT_PASSWORD}"
    sudo -E debconf-set-selections <<< "mysql-server-5.7 mysql-server/root_password_again password ${MYSQL_ROOT_PASSWORD}"
    sudo -E debconf-set-selections <<< "mysql-apt-config mysql-apt-config/select-server select mysql-5.7"
    sudo -E debconf-set-selections <<< "mysql-community-server mysql-community-server/root-pass password ${MYSQL_ROOT_PASSWORD}"
    sudo -E debconf-set-selections <<< "mysql-community-server mysql-community-server/re-root-pass password ${MYSQL_ROOT_PASSWORD}"
    apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 467B942D3A79BD29
    wget https://dev.mysql.com/get/mysql-apt-config_0.8.24-1_all.deb
    dpkg -i mysql-apt-config_0.8.24-1_all.deb
    apt-get update
    sudo -E apt-get -y install mysql-server

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
