# HDS React UI Packages

Une bibliothèque de composants UI moderne pour Heaven Conseil, construite avec React 19, TypeScript et Tailwind CSS 4.

## 🚀 Installation rapide avec CLI (Équipe Heaven Conseil)

Pour les membres de l'équipe, utilisez notre CLI pour ajouter rapidement des composants :

```bash
# Installation du CLI
npm install -g git+https://github.com/heavenconseil/hds-react-ui-packages.git#main:cli

# Ou avec le script d'installation
curl -sSL https://raw.githubusercontent.com/heavenconseil/hds-react-ui-packages/main/install.sh | bash

# Utilisation
hds-ui init
hds-ui add cta
```

📖 **[Guide complet pour l'équipe →](./README-TEAM.md)**

---

## Installation

```bash
npm install @heavenconseil/hds-react-ui-packages
# ou
pnpm add @heavenconseil/hds-react-ui-packages
# ou
yarn add @heavenconseil/hds-react-ui-packages
```

## Configuration

### 1. Importation des styles

Importez les styles CSS dans votre application :

```typescript
import '@heavenconseil/hds-react-ui-packages/dist/style.css'
```

### 2. Configuration Tailwind CSS

Ajoutez le chemin vers les composants dans votre configuration Tailwind :

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@heavenconseil/hds-react-ui-packages/dist/**/*.js'
  ],
  // ... reste de votre configuration
}
```

## Utilisation

```typescript
import { CTA, Picto } from '@heavenconseil/hds-react-ui-packages'

function App() {
  return (
    <div>
      <CTA variant="primary" onClick={() => console.log('Clicked!')}>
        Mon Bouton
      </CTA>
      
      <Picto name="star" size="medium" />
    </div>
  )
}
```

## Composants Disponibles

### CTA (Call To Action)

Bouton polyvalent avec plusieurs variantes et tailles.

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'
- `size`: 'small' | 'medium' | 'large'
- `startIcon`: string (nom de l'icône)
- `endIcon`: string (nom de l'icône)
- `loading`: boolean
- `disabled`: boolean
- `expand`: boolean (pleine largeur)
- `href`: string (pour les liens)

### Picto

Système d'icônes basé sur Heroicons.

**Props:**
- `name`: string (nom de l'icône)
- `size`: 'small' | 'medium' | 'large' | 'selecttabs'
- `className`: string (classes CSS additionnelles)

## Développement

### Scripts disponibles

```bash
# Développement
pnpm dev

# Build de la bibliothèque
pnpm build

# Lancer Storybook
pnpm storybook

# Build Storybook
pnpm build-storybook

# Publication
pnpm publish:package
```

### Structure du projet

```
src/
├── components/
│   ├── CTA/
│   │   ├── CTA.tsx
│   │   └── CTA.stories.tsx
│   └── Picto/
│       ├── Picto.tsx
│       └── Picto.stories.tsx
├── utils/
│   └── index.ts
├── index.ts
└── index.css
```

## Migration depuis un projet existant

1. Copiez vos composants `.tsx` dans `src/components/[NomComposant]/`
2. Adaptez les imports pour utiliser les utilitaires internes
3. Ajoutez les exports dans `src/index.ts`
4. Créez des stories Storybook pour documenter les composants
5. Testez avec `pnpm build`

## Technologies

- **React 19** - Dernière version de React
- **TypeScript** - Typage statique
- **Tailwind CSS 4** - Framework CSS utilitaire
- **Vite** - Bundler moderne
- **Storybook** - Documentation et test des composants

## Licence

MIT