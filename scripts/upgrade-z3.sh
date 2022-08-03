#!/usr/bin/env bash
set -euo pipefail

CURR_DIR=$PWD;

CURR_VERSION=$(node website/get-z3-version.js);

cd website;

if UPGRADE_RESULTS=$(yarn upgrade z3-solver --frozen-lockfile 2>&1); then
    yarn clear;
    if BUILD_RESULTS=$(yarn build 2>&1); then
        echo "Successfully upgraded z3-solver to the latest version";
        exit 0;
    else
        echo "Failed to build z3-solver";
        echo "$BUILD_RESULTS";
        echo "Downgrading to the previous version";
        yarn add z3-solver@$CURR_VERSION --frozen-lockfile;
    fi;
else
    echo "Failed to upgrade z3-solver to latest";
    echo "$UPGRADE_RESULTS";
fi;

cd $CURR_DIR;

