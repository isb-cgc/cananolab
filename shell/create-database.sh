#!/bin/bash

if [ -z "$CI" ]; then
    if ( "/home/vagrant/cananolab/shell/get_env.sh" ) ; then
        export $(cat ${ENV_FILE_PATH} | grep -v ^\# | xargs) 2> /dev/null
    else
        exit 1
    fi
    export HOME=/home/vagrant/cananolab
    export MYSQL_ROOT_USER=root
    export MYSQL_DB_HOST=localhost
    export DEBIAN_FRONTEND=noninteractive

    # MySQL Install
    echo "Installing MySQL..."
    # Select MySQL 5.7 or we're going to get 8.0
    # 8.0 isn't strictly speaking a problem but 5.7 is the current CloudSQL instance
    apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 467B942D3A79BD29
    wget https://dev.mysql.com/get/mysql-apt-config_0.8.18-1_all.deb
    dpkg -i mysql-apt-config_0.8.18-1_all.deb
    apt-get update -qq
    debconf-set-selections <<< "mysql-apt-config mysql-apt-config/select-server select mysql-5.7"
    debconf-set-selections <<< "mysql-apt-config mysql-apt-config/repo-codename select buster"
    debconf-set-selections <<< "mysql-apt-config mysql-apt-config/repo-distro select debian"
    debconf-set-selections <<< "mysql-community-server mysql-community-server/lowercase-table-names select"
    debconf-set-selections <<< "mysql-community-server mysql-server/default-auth-override select Use Legacy Authentication Method (Retain MySQL 5.x Compatibility)"
    debconf-set-selections <<< "mysql-community-server mysql-community-server/root_password password $MYSQL_ROOT_PASSWORD"
    debconf-set-selections <<< "mysql-community-server mysql-community-server/root_password_again password $MYSQL_ROOT_PASSWORD"
    apt-get -y --allow-downgrades install mysql-community-server

    echo "Creating Databases..."
    mysql -u$MYSQL_ROOT_USER -p$MYSQL_ROOT_PASSWORD -h $MYSQL_DB_HOST -e "CREATE DATABASE $DATABASE_NAME"

    mysql -u$MYSQL_ROOT_USER -p$MYSQL_ROOT_PASSWORD -h $MYSQL_DB_HOST $DATABASE_NAME < ${HOME}/software/cananolab-webapp/db-scripts/2.4.0/UnitTest.sql
else
  echo "This script is not intended for use in CircleCI -- exiting!"
  exit 1
fi
