#!/usr/bin/env bash

set -euxo pipefail

curl \
  --verbose \
  --user client:secret \
  -d grant_type=password \
  -d username=user \
  -d password=password \
  http://localhost:8080/oauth/token \
  | jq .
