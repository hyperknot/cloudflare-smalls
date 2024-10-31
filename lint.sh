#!/usr/bin/env bash
set -e

biome check --write --unsafe .

prettier -w "**/*.md" "**/*.html"

