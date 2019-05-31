#!/bin/bash
#
# Copyright 2017 IBM Corp. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the “License”);
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#  https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an “AS IS” BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#

export WSK='wsk'                      # Set if not in your $PATH
MOCHA='mocha'                         # Set if not in your $PATH

# Capture the namespace where actions will be created
export OPENWHISK_HOST=`$WSK property get --apihost | sed -n -e 's/^whisk API host//p' | tr -d '\t '`
CURRENT_NAMESPACE=`$WSK property get --namespace | sed -n -e 's/^whisk namespace//p' | tr -d '\t '`
export OW_AUTH_KEY=`$WSK property get --auth | sed -n -e 's/^whisk auth//p' | tr -d '\t '`
if [ $CURRENT_NAMESPACE == '_' ]
then
    CURRENT_NAMESPACE=`$WSK namespace list | tail -1`
fi
echo "OpenWhisk Host is $OPENWHISK_HOST"
echo "Current namespace is $CURRENT_NAMESPACE"


function install() {
  $WSK action update hello hello.js   
  npm install
}



function testLocal() {
   $MOCHA
}


function testOW() {
   env TEST_OPENWHISK=true $MOCHA
}


function clean() {
   rm -rf node_modules
   $WSK action delete hello
}

function usage() {
   echo usage: driver.sh [--install] [--clean] [--testOW] [--testlocal] 
}


case "$1" in
"--install" )
install
;;
"--testLocal" )
testLocal
;;
"--testOW" )
testOW
;;
"--clean" )
clean
;;
* )
usage
;;
esac
