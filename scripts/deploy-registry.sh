#!/bin/bash

echo "🚀 Déploiement du registry HDS UI sur GitHub heavenconseil"

# 1. Synchroniser le registry
echo "📦 Synchronisation du registry..."
pnpm sync-registry

# 2. Créer le repo GitHub s'il n'existe pas (public pour l'équipe)
echo "📁 Vérification du repo GitHub..."
gh repo create heavenconseil/hds-ui-registry --public --confirm 2>/dev/null || echo "✅ Repo existe déjà"

# 3. Initialiser le repo registry
if [ ! -d "registry/.git" ]; then
  echo "🔧 Initialisation du repo registry..."
  cd registry
  git init
  git remote add origin https://github.com/heavenconseil/hds-ui-registry.git
  cd ..
fi

# 4. Pusher les fichiers
echo "📤 Push vers GitHub..."
cd registry
git add .
git commit -m "Update registry - $(date)"
git push -u origin main --force

echo "✅ Registry déployé sur: https://github.com/heavenconseil/hds-ui-registry"
echo "🔗 URL du registry: https://raw.githubusercontent.com/heavenconseil/hds-ui-registry/main/registry.json"
echo ""
echo "📋 Vos collègues peuvent maintenant utiliser:"
echo "   npm install -g @heavenconseil/hds-cli"
echo "   hds-ui config  # Choisir 'GitHub d'équipe'"
echo "   hds-ui add cta"
