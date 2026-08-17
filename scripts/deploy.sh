#!/usr/bin/env bash
#
# Publishes the static export to the `gh-pages` branch, which GitHub Pages
# serves directly. This avoids user-defined GitHub Actions workflows entirely.
#
# Usage:  npm run deploy
#
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_ROOT"

# GitHub Pages serves this project site from /<repo>/, so the export has to be
# built with that base path or every /_next/* asset 404s at the domain root.
REPO_NAME="$(basename "$REPO_ROOT")"
BASE_PATH="/${REPO_NAME}"
BRANCH="gh-pages"

echo "==> Building static export with basePath ${BASE_PATH}"
rm -rf out
NEXT_PUBLIC_BASE_PATH="$BASE_PATH" npx next build

if [ ! -f out/index.html ]; then
  echo "ERROR: build produced no out/index.html — aborting." >&2
  exit 1
fi

# Without this, GitHub Pages runs the content through Jekyll, which silently
# drops every directory starting with an underscore — including _next.
touch out/.nojekyll

REMOTE_URL="$(git remote get-url origin)"
SOURCE_SHA="$(git rev-parse --short HEAD)"
GIT_NAME="$(git config user.name || echo 'deploy')"
GIT_EMAIL="$(git config user.email || echo 'deploy@localhost')"

STAGING="$(mktemp -d)"
trap 'rm -rf "$STAGING"' EXIT

cp -R out/. "$STAGING/"

echo "==> Publishing to ${BRANCH}"
(
  cd "$STAGING"
  git init -q -b "$BRANCH"
  git add -A
  git -c user.name="$GIT_NAME" -c user.email="$GIT_EMAIL" \
    commit -q -m "Deploy site from ${SOURCE_SHA}"
  # gh-pages holds only generated output, so a single-commit force push keeps
  # the branch from accumulating build history.
  git push -f -q "$REMOTE_URL" "$BRANCH"
)

echo "==> Done. Deployed ${SOURCE_SHA} to ${BRANCH}."
