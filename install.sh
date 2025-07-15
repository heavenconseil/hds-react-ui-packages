#!/bin/bash

echo "🚀 Installation du CLI HDS UI..."

# Vérifier si npm ou pnpm est disponible
if command -v pnpm &> /dev/null; then
    echo "📦 Installation avec pnpm..."
    pnpm add -g git+https://github.com/heavenconseil/hds-react-ui-packages.git#main:cli
elif command -v npm &> /dev/null; then
    echo "📦 Installation avec npm..."
    npm install -g git+https://github.com/heavenconseil/hds-react-ui-packages.git#main:cli
else
    echo "❌ Erreur: npm ou pnpm requis"
    exit 1
fi

echo "✅ Installation terminée!"
echo "🔧 Testez avec: hds-ui --help"
