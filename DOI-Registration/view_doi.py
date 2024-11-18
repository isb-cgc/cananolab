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
# A DOI record is viewed just by calling with a URL that includes the DOI, and using a GET
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

    headers = {
        "accept": "application/vnd.api+json",
    }

    # Use GET for views, with DOI in the URL:
    url = f"https://{server}/dois/{doi_prefix}/{doi_suffix}"
    response = requests.get(url, auth=HTTPBasicAuth(USER, PASSWORD), headers=headers)

    parsed = json.loads(response.text)
    print(json.dumps(parsed, indent=4))
    return

if __name__ == '__main__':
    main(sys.argv)