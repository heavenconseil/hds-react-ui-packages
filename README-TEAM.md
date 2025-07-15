# HDS UI - Guide d'installation et utilisation

## 🚀 Installation rapide

```bash
curl -sSL https://raw.githubusercontent.com/heavenconseil/hds-react-ui-packages/main/install.sh | bash
source ~/.bashrc  # ou source ~/.zshrc pour zsh
hds-ui --help     # vérifier que ça marche
```

> � **Si `hds-ui` n'est pas trouvé** : `echo 'export PATH="$HOME/Library/pnpm:$PATH"' >> ~/.bashrc && source ~/.bashrc`

## 🔄 Mise à jour

```bash
hds-ui update
```

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

## 📦 Utilisation

```bash
# Dans votre projet React/Next.js
hds-ui init
hds-ui add cta
```

```tsx
import { CTA } from '@/components/ui/cta'

export function MyComponent() {
  return <CTA variant="primary">Mon bouton</CTA>
}
```

## 🛠️ Composants disponibles

- **CTA** : Bouton avec variants (primary, secondary, outline, ghost, destructive)

## 🆘 Dépannage

### CLI non trouvé après installation
```bash
# Configurer pnpm et réinstaller
pnpm setup --force
source ~/.bashrc  # ou source ~/.zshrc
# Puis réinstaller le CLI
git clone https://github.com/heavenconseil/hds-react-ui-packages.git /tmp/hds-ui-install && \
cd /tmp/hds-ui-install && \
bash install.sh && \
cd ~ && rm -rf /tmp/hds-ui-install
```

### Erreur "Component not found"
- Vérifiez que le repo `heavenconseil/hds-react-ui-packages` est accessible
- Vérifiez que le composant existe dans le registry

### Erreur "Registry not configured"
- Lancez `hds-ui config --reset` pour remettre la configuration par défaut

### Problème d'imports
- Vérifiez que votre `tsconfig.json` a l'alias `@/*` configuré
- `hds-ui init` devrait le faire automatiquement
