#!/usr/bin/env bash

set -euxo pipefail

cd "$(dirname "$0")"

./build-client.sh
./build-api.sh

git push

set +x
echo successfully shipped 🚢
say successfully shipped
