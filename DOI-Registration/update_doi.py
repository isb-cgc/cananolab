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

#
# A DOI record is updated by sending it JSON that includes *only the items you want to modify*.
# The URL needs to include the DOI, and the PUT method must be used
#

def main(args):

    if len(args) != 4:
        print(" Usage : %s <prod | test> <doi_suffix> <json_file>" % args[0])
        sys.exit(-1)

    tier = args[1]
    doi_suffix = args[2]
    json_file = args[3]

    if tier == "prod":
        server = "api.datacite.org"
        doi_prefix = "10.17917"
    else:
        server = "api.test.datacite.org"
        doi_prefix = "10.24368"

    with open(json_file, 'r') as file:
      payload = json.load(file)

    if 'prefix' in payload['data']['attributes']:
        print("JSON prefix does not belong in JSON")
        exit(-1)

    #
    # We only want to create drafts. So this key is not allowed:
    #

    if "event" in payload['data']['attributes']:
        print("Publish is a separate step")
        exit(-1)

    headers = {
        "accept": "application/vnd.api+json",
    }

    # Use PUT for updates, with DOI in the URL:
    url = f"https://{server}/dois/{doi_prefix}/{doi_suffix}"
    response = requests.put(url, auth=HTTPBasicAuth(USER, PASSWORD), headers=headers, json=payload)

    parsed = json.loads(response.text)
    print(json.dumps(parsed, indent=4))
    return

if __name__ == '__main__':
    main(sys.argv)