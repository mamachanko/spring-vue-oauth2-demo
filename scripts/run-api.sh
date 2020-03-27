#!/usr/bin/env bash

curl \
  --verbose \
  --user client:secret \
  -d grant_type=password \
  -d username=user \
  -d password=password \
  http://localhost:8080/oauth/token \
  | jq .
