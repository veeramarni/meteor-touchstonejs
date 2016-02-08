#!/usr/bin/env bash

#---------------
# Get Less path of the touchstone to update in the package.js
#

lessDir=".npm/package/node_modules/touchstonejs/less"

arrayPath=$(find $lessDir -name "*.less" -print);
for fl in $arrayPath
do
echo "'$fl',"
done