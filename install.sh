#!/bin/bash

echo "🚀 Installation du CLI HDS UI..."

# Configurer pnpm si nécessaire
if command -v pnpm &> /dev/null; then
    if ! pnpm root -g &> /dev/null; then
        echo "🔧 Configuration de pnpm..."
        pnpm setup --force
        # Recharger les variables d'environnement
        if [ -f ~/.bashrc ]; then
            source ~/.bashrc
        elif [ -f ~/.zshrc ]; then
            source ~/.zshrc
        fi
    fi
fi

# Répertoire d'installation permanent
INSTALL_DIR="$HOME/.hds-ui"
echo "📁 Installation dans $INSTALL_DIR"

# Supprimer l'ancienne installation si elle existe
rm -rf "$INSTALL_DIR"
mkdir -p "$INSTALL_DIR"

echo "📦 Téléchargement du CLI..."
# Créer un dossier temporaire pour le clone
TEMP_DIR=$(mktemp -d)
cd "$TEMP_DIR"
git clone https://github.com/heavenconseil/hds-react-ui-packages.git
cd hds-react-ui-packages/cli

echo "🔧 Installation des dépendances..."
if command -v pnpm &> /dev/null; then
    pnpm install
    pnpm build
    
    # Copier vers le répertoire permanent
    echo "📋 Copie vers le répertoire permanent..."
    cp -r . "$INSTALL_DIR/"
    
    # Créer le lien global depuis le répertoire permanent
    cd "$INSTALL_DIR"
    pnpm link --global
    
elif command -v npm &> /dev/null; then
    npm install
    npm run build
    
    # Copier vers le répertoire permanent
    echo "� Copie vers le répertoire permanent..."
    cp -r . "$INSTALL_DIR/"
    
    # Créer le lien global depuis le répertoire permanent
    cd "$INSTALL_DIR"
    npm link
else
    echo "❌ Erreur: npm ou pnpm requis"
    exit 1
fi

# Nettoyer le dossier temporaire
cd ~
rm -rf "$TEMP_DIR"

# Vérifier que le CLI est accessible
if ! command -v hds-ui &> /dev/null; then
    echo "⚠️  Le CLI n'est pas dans le PATH. Configuration automatique..."
    
    # Obtenir le chemin du bin pnpm
    PNPM_GLOBAL_BIN=""
    if pnpm root -g &> /dev/null; then
        PNPM_GLOBAL_BIN="$(dirname $(which pnpm))"
    else
        PNPM_GLOBAL_BIN="$HOME/.local/share/pnpm"
    fi
    
    # Ajouter au shell approprié
    if [[ "$SHELL" == *"zsh"* ]]; then
        echo "export PATH=\"$PNPM_GLOBAL_BIN:\$PATH\"" >> ~/.zshrc
        echo "📝 Ajouté au ~/.zshrc. Rechargez avec: source ~/.zshrc"
    else
        echo "export PATH=\"$PNPM_GLOBAL_BIN:\$PATH\"" >> ~/.bashrc
        echo "📝 Ajouté au ~/.bashrc. Rechargez avec: source ~/.bashrc"
    fi
fi

echo "✅ Installation terminée!"
echo "🔧 Testez avec: hds-ui --help"
echo ""
echo "🔄 Pour mettre à jour le CLI :"
echo "   curl -sSL https://raw.githubusercontent.com/heavenconseil/hds-react-ui-packages/main/install.sh | bash"
