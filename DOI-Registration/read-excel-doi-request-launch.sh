#!/usr/bin/env bash

export MY_VENV="your python virtualenv path e.g. /Users/username/PythonVEs/virtualEnvForIAM"
export INSTALL_LIBS="TRUE OR FALSE"
export PY_PATH="Path to python"
export EXCEL_FILE="Excel-file-to-read.xlsx"
export TIER="test or prod"
export JSON_FILE="JSON-file-to-write.json"
export PROD_PREFIX="prod repo ID"
export TEST_PREFIX="test repo ID"

if [ -f "${HOME}/.bash_profile" ]; then
    source ${HOME}/.bash_profile
fi

ENV_FILE="./read-excel-doi-request-launch-SetEnv.sh"

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
  ${PY_PATH}/python3 -m pip install openpyxl
  echo ${PYTHONPATH}
  echo "Libraries Installed"
  deactivate
fi

pushd ${MY_VENV} > /dev/null
source bin/activate
popd > /dev/null
${PY_PATH}/python3 ./read_excel_doi_request.py ${TIER} ${EXCEL_FILE} ${JSON_FILE}
deactivate