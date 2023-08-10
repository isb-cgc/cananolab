#!/bin/bash

# Location of the example.env file
# This is NOT a relative path. This should be an absolute path on the VM.
# The default value assumes a SECURE_LOCAL_PATH setting of ../parenDir/secure_files/
# If you need to place your example.env in another location, you must create a file named
# secure_path.env and place it in the Git Repository's root. This script will then
# look for it an apply that value as the location of the example.env.

if [ ! -f "/home/vagrant/cananolab/secure_path.env" ]; then
    echo "No secure_path.env found - using default value of /home/vagrant/secure_files/.env."
    echo "If your .env is not at this location, you must make a secure_path.env file with the absolute"
    echo "path to the .env file (including the file) as its only entry."
    export ENV_FILE_PATH=/home/vagrant/secure_files/.env
else
    echo "secure_path.env setting found."
    export ENV_FILE_PATH=$(cat /home/vagrant/cananolab/secure_path.env)
    echo ".env file assumed to be found at ${ENV_FILE_PATH}"
fi

export IS_DEV=True
