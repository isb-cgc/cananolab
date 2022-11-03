if [ -z "$CI" ]; then
    if ( "/home/vagrant/cananolab/shell/get_env.sh" ) ; then
        export $(cat ${ENV_FILE_PATH} | grep -v ^# | xargs) 2> /dev/null
    else
        exit 1
    fi
    export HOME=/home/vagrant/cananolab
    export MYSQL_ROOT_USER=root
    export MYSQL_DB_HOST=localhost

    # MySQL Install
    echo "Installing MySQL..."
    sudo debconf-set-selections <<< "mysql-server-5.7 mysql-server/root_password password $MYSQL_ROOT_PASSWORD"
    sudo debconf-set-selections <<< "mysql-server-5.7 mysql-server/root_password_again password $MYSQL_ROOT_PASSWORD"
    sudo DEBIAN_FRONTEND=noninteractive apt-get -qq -y --force-yes install mysql-server-5.7

    echo "Creating Databases..."
    mysql -u$MYSQL_ROOT_USER -p$MYSQL_ROOT_PASSWORD -h $MYSQL_DB_HOST -e "CREATE DATABASE $DATABASE_NAME"

    mysql -u$MYSQL_ROOT_USER -p$MYSQL_ROOT_PASSWORD -h $MYSQL_DB_HOST $DATABASE_NAME < ${HOME}/software/cananolab-webapp/db-scripts/2.4.0/UnitTest.sql
else
  echo "This script is not intended for use in CircleCI -- exiting!"
  exit 1
fi
