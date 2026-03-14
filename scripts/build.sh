#!/usr/bin/env bash
set -euo pipefail

# Run from repository root
cd "$(dirname "$0")/.."

EXTENSION_DIR="quick-search-extension"
ZIP_NAME="quick-search-v1.0.zip"

# Verify required icons exist
for size in 16 32 48 128; do
  icon="${EXTENSION_DIR}/icons/icon${size}.png"
  if [ ! -f "$icon" ]; then
    echo "ERROR: Missing icon: $icon"
    echo "Run 'npm run create-icons' first."
    exit 1
  fi
done

# Remove old ZIP if exists
rm -f "$ZIP_NAME"

# Create ZIP, excluding macOS metadata and git files
zip -r "$ZIP_NAME" "$EXTENSION_DIR" \
  -x "*.DS_Store" \
  -x "*/.git/*" \
  -x "__MACOSX/*"

echo "Created: $ZIP_NAME"
echo ""
echo "Contents:"
unzip -l "$ZIP_NAME"
