# HDS UI - Guide d'installation et utilisation

## 🚀 Installation

### 1. Installation automatique (Recommandé)
```bash
# Si le repo est public :
curl -sSL https://raw.githubusercontent.com/heavenconseil/hds-react-ui-packages/main/install.sh | bash

# Si le repo est privé (accès requis) :
git clone https://github.com/heavenconseil/hds-react-ui-packages.git /tmp/hds-ui-install && \
cd /tmp/hds-ui-install && \
bash install.sh && \
cd ~ && rm -rf /tmp/hds-ui-install
```

### 2. Vérifier l'installation
```bash
hds-ui --help
```

> 🔧 **Si la commande `hds-ui` n'est pas trouvée** :
> 
> **Option 1 (Recommandé) :** Configurer pnpm automatiquement
> ```bash
> pnpm setup --force
> source ~/.bashrc  # ou source ~/.zshrc pour zsh
> ```
> 
> **Option 2 :** Ajouter manuellement au PATH
> ```bash
> # Pour bash
> echo 'export PATH="$HOME/.local/share/pnpm:$PATH"' >> ~/.bashrc
> source ~/.bashrc
> 
> # Pour zsh  
> echo 'export PATH="$HOME/.local/share/pnpm:$PATH"' >> ~/.zshrc
> source ~/.zshrc
> ```

## 🔄 Mise à jour

### Option 1: Commande update (Simple)
```bash
hds-ui update
```

### Option 2: Réinstallation complète
```bash
curl -sSL https://raw.githubusercontent.com/heavenconseil/hds-react-ui-packages/main/install.sh | bash
```

> 💡 **Le CLI vérifie automatiquement les mises à jour** et vous avertit quand une nouvelle version est disponible.

### 2. Configuration (optionnelle)

Le CLI utilise par défaut le registry d'équipe. Pour voir la configuration :
```bash
hds-ui config
```

Pour remettre la configuration par défaut :
```bash
hds-ui config --reset
```

## 📁 Registry dans hds-react-ui-packages

Le registry est hébergé directement dans notre repo principal :
- **Repo** : https://github.com/heavenconseil/hds-react-ui-packages
- **Registry JSON** : https://raw.githubusercontent.com/heavenconseil/hds-react-ui-packages/main/registry/registry.json
- **Composants** : https://raw.githubusercontent.com/heavenconseil/hds-react-ui-packages/main/registry/ui/[component].tsx

## 📦 Utilisation dans un projet

### Initialiser HDS UI dans votre projet
```bash
# Dans le dossier de votre projet React/Next.js
hds-ui init
```

### Ajouter des composants
```bash
# Ajouter le composant CTA
hds-ui add cta

# Le fichier sera créé dans src/components/ui/cta.tsx
```

### Utiliser le composant
```tsx
import { CTA } from '@/components/ui/cta'

export function MyComponent() {
  return (
    <CTA variant="primary" size="medium">
      Mon bouton
    </CTA>
  )
}
```

## 🛠️ Composants disponibles

- **CTA** : Bouton avec variants (primary, secondary, outline, ghost, destructive)

## 🆘 Dépannage

### Erreur "Component not found"
- Vérifiez que le repo `heavenconseil/hds-react-ui-packages` est accessible
- Vérifiez que le composant existe dans le registry

### Erreur "Registry not configured"
- Lancez `hds-ui config --reset` pour remettre la configuration par défaut

### Problème d'imports
- Vérifiez que votre `tsconfig.json` a l'alias `@/*` configuré
- `hds-ui init` devrait le faire automatiquement
