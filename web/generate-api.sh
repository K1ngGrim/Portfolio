#!/bin/bash

cp "../portfolio-strapi/specification.json" ./swagger.json
# remove the existing api folder
npx rimraf projects/strapi-lib/src/lib
# generate the api client
npx openapi-generator-cli generate --generator-key=strapi-api
# delete the swagger definition file
rm ./swagger.json
