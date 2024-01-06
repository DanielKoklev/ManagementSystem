#!/bin/bash

function build_amd64() {
    echo "Building for AMD 64 architecture!!!"
    docker buildx build --platform linux/amd64 -t university-project-app-backend-amd64 .
    echo "Building finished!!"
}

function build_arm64() {
    echo "Building for ARM 64 architecture!!!"
    docker buildx build --platform linux/arm64 -t university-project-app-backend .
    echo "Building finished!!"
}

function build_all(){
    echo "Building for both architectures!!!"
    build_amd64
    build_arm64
}

echo "Available functions:"
echo "build_amd64\tBuild for AMD64 architecture"
echo "build_arm64\tBuild for ARM64 architecture"
echo "build_all\tBuild for both architectures"