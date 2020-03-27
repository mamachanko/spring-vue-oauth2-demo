#!/usr/bin/env bash

set -euxo pipefail

cd "$(dirname "$0")"

cd ../client

yarn run lint
yarn run test
yarn run build
