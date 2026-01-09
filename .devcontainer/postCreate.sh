
#!/usr/bin/env bash
set -euxo pipefail

ZIP_PATH="/opt/cypress/cypress.zip"
ZIP_URL="https://cdn.cypress.io/desktop/4.12.1/linux-x64/cypress.zip"
CACHE_DIR="/opt/cypress/cache"

mkdir -p "$(dirname "$ZIP_PATH")" "$CACHE_DIR"

if [[ -s "$ZIP_PATH" ]]; then
  echo "Cypress zip already present: $ZIP_PATH"
else
  echo "Downloading Cypress zip..."
  TMP="${ZIP_PATH}.tmp"
  rm -f "$TMP"
  curl --insecure --fail --location --show-error \
    -o "$TMP" \
    "$ZIP_URL"
  mv -f "$TMP" "$ZIP_PATH"
fi

unset CYPRESS_DOWNLOAD_MIRROR || true
npm config delete cypress_download_mirror || true

apt-get update
apt-get install -y libgtk-3-0t64 libgbm-dev libnotify-dev libnss3 libxss1 libasound2t64 libxtst6 xauth xvfb

CYPRESS_INSTALL_BINARY=0 npm install --legacy-peer-deps

export CYPRESS_CACHE_FOLDER="$CACHE_DIR"
export CYPRESS_INSTALL_BINARY="$ZIP_PATH"

npx cypress install --force

npx cypress verify || true
npx cypress cache path
npx cypress cache list || true
