#!/usr/bin/env bash

set -euxo pipefail

curl \
  --verbose \
  --user client: \
  -d grant_type=password \
  -d username=ben \
  -d password=benben \
  http://localhost:8080/oauth/token \
  | jq .
