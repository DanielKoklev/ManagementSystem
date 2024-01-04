#!/bin/bash

function run_containers_arm64() {
    echo "Starting app stack for arm64!"
    docker compose -f docker-compose-arm64.yaml up -d
}

function run_containers_amd64() {
    echo "Starting app stack for amd64!"
    docker compose -f docker-compose-amd64.yaml up -d
}