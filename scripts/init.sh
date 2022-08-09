#!/usr/bin/env bash
set -euo pipefail

if [[ -d website ]]; then

    echo "------------------------------"
    echo "-- Installing Dependencies ---"
    echo "------------------------------"

    cd website;
    yarn;
    cd ../;

else
    echo "website directory not found.";
fi;