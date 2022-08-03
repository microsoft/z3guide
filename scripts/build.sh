#!/usr/bin/env bash
set -euo pipefail

if [[ -d website ]]; then

    echo "------------------------------"
    echo "-- Building Docusaurus -------"
    echo "------------------------------"

    cd website;
    yarn && yarn build;
    cd ../;

else
    echo "website directory not found.";
fi;