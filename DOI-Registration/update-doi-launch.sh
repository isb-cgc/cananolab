#!/usr/bin/env bash

export MY_VENV="your python virtualenv path e.g. /Users/username/PythonVEs/virtualEnvForIAM"
export INSTALL_LIBS="TRUE OR FALSE"
export USER="Your_username"
export PASSWORD="Your_password"
export PY_PATH="Path to python"
# Note DOI prefix is set by the tier
export DOI_SUFFIX="DOI suffix to update"
export TIER="test or prod"
export JSON_FILE="Path to JSON file"
export PROD_SERVER="prod host"
export TEST_SERVER="test host"
export PROD_PREFIX="prod repo ID"
export TEST_PREFIX="test repo ID"

if [ -f "${HOME}/.bash_profile" ]; then
    source ${HOME}/.bash_profile
fi

ENV_FILE="./update-doi-launch-SetEnv.sh"

if [ -f "${ENV_FILE}" ]; then
    source "${ENV_FILE}"
fi

export PYTHONPATH=${MY_VENV}/lib

# Install PIP + Dependencies. Make the test TRUE the first time you run this:

if [ "${INSTALL_LIBS}" = "TRUE" ]; then
  pushd ${MY_VENV} > /dev/null
  source bin/activate
  popd > /dev/null
  echo "Installing Python Libraries..."
  ${PY_PATH}/python3 -m pip install pip
  ${PY_PATH}/python3 -m pip install wheel
  ${PY_PATH}/python3 -m pip install requests
  ${PY_PATH}/python3 -m pip install openpyxl
  echo ${PYTHONPATH}
  echo "Libraries Installed"
  deactivate
fi

pushd ${MY_VENV} > /dev/null
source bin/activate
popd > /dev/null
${PY_PATH}/python3 ./update_doi.py ${TIER} ${DOI_SUFFIX} ${JSON_FILE}
deactivate