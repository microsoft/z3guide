#!/usr/bin/env bash
set -euo pipefail

if [[ -d website ]]; then
    cd website;
    yarn start;
    cd ../;
else
    echo "website directory not found.";
fi;