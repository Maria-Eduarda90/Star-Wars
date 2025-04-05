#!/bin/bash

set -e

# Remove tags locais e busca as tags remotas
git tag -l | xargs git tag -d
git fetch --tags

VERSION_TYPE=${1:-patch}  # patch | minor | major

# Pega última tag ou assume v0.0.0 se não tiver nenhuma
LAST_TAG=$(git describe --tags --abbrev=0 2>/dev/null || echo "v0.0.0")

# Remove o "v" e separa os números
VERSION=${LAST_TAG#v}
IFS='.' read -r MAJOR MINOR PATCH <<< "$VERSION"

# Guarda os valores anteriores para uso com major
PREV_MINOR=$MINOR

# Faz o bump da versão
case "$VERSION_TYPE" in
  major)
    MAJOR=$((MAJOR + 1))
    MINOR=$PREV_MINOR
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

# Verifica se a tag já existe no repositório remoto e ajusta se necessário
git fetch --tags
echo "Última tag: $LAST_TAG"
echo "Nova tag tentativa: $NEW_TAG"
while git ls-remote --tags origin "$NEW_TAG" | grep -q "$NEW_TAG"; do
  echo "Tag $NEW_TAG já existe no repositório remoto. Incrementando patch."
  PATCH=$((PATCH + 1))
  NEW_TAG="v$MAJOR.$MINOR.$PATCH"
done

# Cria e envia a nova tag
git config user.name "GitHub Actions"
git config user.email "actions@github.com"
sleep 2
git tag "$NEW_TAG"
git push origin "$NEW_TAG"

# Cria e envia a nova branch release/vX.Y.Z
git checkout -b "release/$NEW_TAG"
git push origin "release/$NEW_TAG"

echo "✅ Nova versão: $NEW_TAG"
