#!/bin/bash

function run_containers_arm64() {
    echo "Starting app stack for arm64!"
    docker compose -f docker-compose-arm64.yaml up -d
}

function run_containers_amd64() {
    echo "Starting app stack for amd64!"
    docker compose -f docker-compose-amd64.yaml up -d
}

echo "Available functions:"
echo "run_containers_arm64\tApp stack containers for ARM64 architecture"
echo "run_containers_amd64\tApp stack containers for AMD64 architecture"
