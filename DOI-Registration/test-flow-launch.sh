#!/usr/bin/env bash

export MY_VENV="your python virtualenv path e.g. /Users/username/PythonVEs/virtualEnvForIAM"
export INSTALL_LIBS="TRUE OR FALSE"
export USER="Your_username"
export PASSWORD="Your_password"
export PY_PATH="Path to python"
export TIER="test or prod"
export EXCEL_FILE="Excel-file-to-read.xlsx"
export ORIG_JSON_FILE="Path to JSON file"
export UPDATE_JSON_FILE="Path to update JSON file"

if [ -f "${HOME}/.bash_profile" ]; then
    source ${HOME}/.bash_profile
fi

ENV_FILE="./test-flow-launch-SetEnv.sh"

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

# Exit on error
set -e

pushd ${MY_VENV} > /dev/null
source bin/activate
popd > /dev/null
echo "Read speadsheet"
${PY_PATH}/python3 ./read_excel_doi_request.py ${TIER} ${EXCEL_FILE} ${ORIG_JSON_FILE}
# Get the new suffix out of the output!
echo "Register for DOI"
NEW_SUFFIX=`${PY_PATH}/python3 ./register_doi.py ${TIER} ${ORIG_JSON_FILE}`
echo ${NEW_SUFFIX} > new_suffix.txt
#NEW_SUFFIX=`cat new_suffix.txt`
echo "Test DOI update"
${PY_PATH}/python3 ./update_doi.py ${TIER} ${NEW_SUFFIX} ${UPDATE_JSON_FILE}
echo "Publish DOI"
${PY_PATH}/python3 ./publish_doi.py ${TIER} ${NEW_SUFFIX}
deactivate