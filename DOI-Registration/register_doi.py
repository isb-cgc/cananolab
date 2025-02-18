"""
Copyright 2020-2024, Institute for Systems Biology

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
"""

from pprint import pprint
import requests
from requests.auth import HTTPBasicAuth
import os
import json
import sys
from datetime import datetime

# Use environment vars for sensitive info, not the command line:

USER = os.environ["USER"]
PASSWORD = os.environ["PASSWORD"]
PROD_SERVER = os.environ["PROD_SERVER"]
TEST_SERVER = os.environ["TEST_SERVER"]
PROD_PREFIX = os.environ["PROD_PREFIX"]
TEST_PREFIX = os.environ["TEST_PREFIX"]

#
# A DOI record is created by sending it JSON that includes all the desired items.
# The URL does not include a DOI, and the POST method must be used. The JSON needs
# to include the DOI_PREFIX. Note this puts the
#

def main(args):
    if len(args) != 3:
        print(" Usage : %s <prod | test> <json_file>" % args[0])
        sys.exit(-1)

    tier = args[1]
    json_file = args[2]

    if tier == "prod":
        server = PROD_SERVER
        doi_prefix = PROD_PREFIX
    else:
        server = TEST_SERVER
        doi_prefix = TEST_PREFIX

    with open(json_file, 'r') as file:
        payload = json.load(file)

    if payload['data']['attributes']['prefix'] is None:
        payload['data']['attributes']['prefix'] = doi_prefix

    #
    # We only want to create drafts. So this key is not allowed:
    #

    if "event" in payload['data']['attributes']:
        print("Publish is a separate step")
        exit(-1)

    #
    # Look towards setting a date when the DOI is registered:
    #

    if False:
        now_date = datetime.today().strftime('%Y-%m-%d')
        attributes = payload['data']['attributes']
        attributes['dates'] = []
        date = {
           "date": now_date,
           "dateType": "Valid",
           "dateInformation": None
        }
        attributes['dates'].append(date)

    heading_row = True
    for row in fields.iter_rows():
        if heading_row:
            heading_row = False
            continue

        if row[0].value is not None:
            attributes['titles'][0]['title'] = row[0].value
            attributes['publicationYear'] = row[1].value
            attributes['version'] = row[2].value



    headers = {
        "accept": "application/vnd.api+json",
    }

    # Use POST for creation, with NO DOI in URL:
    url = f"https://{server}/dois"
    response = requests.post(url, auth=HTTPBasicAuth(USER, PASSWORD), headers=headers, json=payload)

    parsed = json.loads(response.text)
    if "errors" in parsed:
        print(json.dumps(parsed, indent=4))
        exit(-1)

    new_suffix = parsed['data']['attributes']['suffix']
    print(new_suffix)
    return

if __name__ == '__main__':
    main(sys.argv)
