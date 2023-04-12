#! /bin/bash
#
#
# For cloud: https://cloud.google.com/sql/docs/mysql/import-export/import-export-sql

INSTANCE='instance-name'
PROJECT='project-name'
DATABASE='database-name'
STORAGE_BUCKET='gs://your-storage-bucket/'
PRE_STORAGE_FILE='PreConvert-Filename.sql'
PRE_STORAGE=${STORAGE_BUCKET}${PRE_STORAGE_FILE}

ENV_FILE="./DB-encoding-conversion-steps-SetEnv.sh"

if [ -f "${ENV_FILE}" ]; then
    source "${ENV_FILE}"
fi

gcloud sql export sql ${INSTANCE} ${PRE_STORAGE} --database=${DATABASE} --project=${PROJECT}
