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

# Use environment vars for sensitive info, not the command line:

USER = os.environ["USER"]
PASSWORD = os.environ["PASSWORD"]
PROD_SERVER = os.environ["PROD_SERVER"]
TEST_SERVER = os.environ["TEST_SERVER"]
PROD_PREFIX = os.environ["PROD_PREFIX"]
TEST_PREFIX = os.environ["TEST_PREFIX"]

#
# A DOI record is updated by sending it JSON that includes *only the items you want to modify*.
# The URL needs to include the DOI, and the PUT method must be used
#

def main(args):

    if len(args) != 3:
        print(" Usage : %s <prod | test> <doi_suffix>" % args[0])
        sys.exit(-1)

    tier = args[1]
    doi_suffix = args[2]

    if tier == "prod":
        server = PROD_SERVER
        doi_prefix = PROD_PREFIX
    else:
        server = TEST_SERVER
        doi_prefix = TEST_PREFIX

    payload = {
      "data": {
        "type": "dois",
        "attributes": {
          "event": "publish"
        }
      }
    }

    headers = {
        "accept": "application/vnd.api+json",
    }

    # Use PUT for updates, with DOI in the URL:
    url = f"https://{server}/dois/{doi_prefix}/{doi_suffix}"

    #
    # Look towards setting a date when the DOI is registered. We need to get the existing record and
    # submit all of them, new and old
    #

    if False:
        now_date = datetime.today().strftime('%Y-%m-%d')
        date = {
           "date": now_date,
           "dateType": "Accepted",
           "dateInformation": None
        }

        date_response = requests.get(url, auth=HTTPBasicAuth(USER, PASSWORD), headers=headers)
        date_info = json.loads(date_response.text)
        date_attributes = date_info['data']['attributes']
        date_array = []
        if 'dates' in date_attributes:
            date_array = attributes['dates']
        date_array.append(date)
        payload["data"]['attributes']['dates'] = date_array

    # Use PUT for updates, with DOI in the URL:

    response = requests.put(url, auth=HTTPBasicAuth(USER, PASSWORD), headers=headers, json=payload)

    parsed = json.loads(response.text)
    print(json.dumps(parsed, indent=4))
    return

if __name__ == '__main__':
    main(sys.argv)

