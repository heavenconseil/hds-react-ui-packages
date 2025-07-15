#!/bin/bash

echo "🚀 Installation du CLI HDS UI..."

# Créer un dossier temporaire
TEMP_DIR=$(mktemp -d)
cd "$TEMP_DIR"

echo "📦 Téléchargement du CLI..."
git clone https://github.com/heavenconseil/hds-react-ui-packages.git
cd hds-react-ui-packages/cli

echo "🔧 Installation des dépendances..."
if command -v pnpm &> /dev/null; then
    pnpm install
    pnpm build
    pnpm link --global
elif command -v npm &> /dev/null; then
    npm install
    npm run build
    npm link
else
    echo "❌ Erreur: npm ou pnpm requis"
    exit 1
fi

# Nettoyer
cd ~
rm -rf "$TEMP_DIR"

echo "✅ Installation terminée!"
echo "🔧 Testez avec: hds-ui --help"
echo ""
echo "🔄 Pour mettre à jour le CLI :"
echo "   curl -sSL https://raw.githubusercontent.com/heavenconseil/hds-react-ui-packages/main/install.sh | bash"
