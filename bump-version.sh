#!/bin/bash

set -e

VERSION_TYPE=${1:-patch}  # patch | minor | major

# Pega última tag ou assume v0.0.0 se não tiver nenhuma
LAST_TAG=$(git describe --tags --abbrev=0 2>/dev/null || echo "v0.0.0")

# Remove o "v" e separa os números
VERSION=${LAST_TAG#v}
IFS='.' read -r MAJOR MINOR PATCH <<< "$VERSION"

# Faz o bump da versão
case "$VERSION_TYPE" in
  major)
    MAJOR=$((MAJOR + 1))
    MINOR=0
    PATCH=0
    ;;
  minor)
    MINOR=$((MINOR + 1))
    PATCH=0
    ;;
  patch|*)
    PATCH=$((PATCH + 1))
    ;;
esac

NEW_TAG="v$MAJOR.$MINOR.$PATCH"

# Verificar se a tag já existe no repositório remoto
if git ls-remote --tags origin "$NEW_TAG" | grep -q "$NEW_TAG"; then
  echo "Tag $NEW_TAG já existe no repositório remoto. Incrementando a versão."
  PATCH=$((PATCH + 1))  # Incremente a versão patch, caso já tenha essa tag.
  NEW_TAG="v$MAJOR.$MINOR.$PATCH"
fi

# Cria e envia a nova tag
git config user.name "GitHub Actions"
git config user.email "actions@github.com"
git tag "$NEW_TAG"
git push origin "$NEW_TAG"

# Opcional: cria branch release/vX.Y.Z
git checkout -b "$NEW_TAG"
git push origin "$NEW_TAG"

echo "✅ Nova versão: $NEW_TAG"
