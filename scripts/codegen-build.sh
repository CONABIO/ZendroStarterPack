#!/usr/bin/env bash

cd contexts
docker build --no-cache -f Dockerfile.code-generators -t zendrodb-code-generators:latest .
cd -
