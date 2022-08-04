#!/usr/bin/env bash
set -euo pipefail

CURR_DIR=$PWD;

CURR_VERSION=$(node website/get-z3-version.js);

cd website;

if UPGRADE_RESULTS=$(yarn upgrade z3-solver --latest 2>&1); then
    echo "$UPGRADE_RESULTS";
    echo "Z3 successfully upgraded to the latest version";
    yarn clear;
    if BUILD_RESULTS=$(yarn build 2>&1); then
        echo "$BUILD_RESULTS";
        echo "Website builds successfully with the latest z3-solver";
        exit 0;
    else
        echo "Failed to build z3-solver";
        echo "$BUILD_RESULTS";
        echo "Downgrading to the previous version";
        yarn add z3-solver@$CURR_VERSION;
    fi;
else
    echo "Failed to upgrade z3-solver to latest";
    echo "$UPGRADE_RESULTS";
    echo "Downgrading to the previous version";
    yarn add z3-solver@$CURR_VERSION;
fi;

cd $CURR_DIR;

