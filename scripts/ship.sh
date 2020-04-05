#!/usr/bin/env bash

set -euxo pipefail

cd "$(dirname "$0")"

./build.sh

git push

set +x
echo
echo successfully shipped 🚢
echo
say successfully shipped
