# HDS UI - Guide d'installation et utilisation

## 🚀 Installation

### 1. Installer le CLI depuis GitHub
```bash
# Avec npm
npm install -g git+https://github.com/heavenconseil/hds-react-ui-packages.git#main:cli

# Ou avec pnpm
pnpm add -g git+https://github.com/heavenconseil/hds-react-ui-packages.git#main:cli
```

### 2. Vérifier l'installation
```bash
hds-ui --help
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
