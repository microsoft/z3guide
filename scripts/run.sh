#!/usr/bin/env bash
set -euo pipefail

if [[ -d website ]]; then
    echo "------------------------------"
    echo "--- Starting Local Server ----"
    echo "------------------------------"
    cd website;
    yarn clear; # this line is for removing the cache
    yarn start;
    cd ../;
else
    echo "website directory not found.";
fi;