#!/bin/sh

echo "Building ${RAILS_ENV}"

rm -f tmp/pids/puma.pid
./build/install_gems.sh

yarn install --check-files

# Do not auto-migrate for production environment
if [ "${RAILS_ENV}" != 'production' ]; then
  ./build/validate_migrated.sh
fi
