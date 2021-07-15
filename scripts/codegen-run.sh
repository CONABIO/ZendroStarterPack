#!/usr/bin/env bash

docker run --rm -it -v $(pwd):/opt --user $(id -u):$(id -g) zendrodb-code-generators:latest bash
