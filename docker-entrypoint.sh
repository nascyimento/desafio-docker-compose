#!/bin/bash

echo "installing dependencies..."
npm install

exec "$@"
