#! /bin/bash
#
# Generate Units Dropdowns
#

# Set up .my.cmd with username and password first!

#read -p "Have you prepared ~/.my.cnf with username and password? Press return to continue... "
chmod 600 ~/.my.cnf

DATABASE=cananofive
CURR_CMD="SELECT name, value from common_lookup where attribute in (\"unit\", \"otherUnit\") order by name, value;"
mysql -D ${DATABASE} --batch -N -e "${CURR_CMD}"

