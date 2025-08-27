# HDS React UI Packages

Une bibliothèque de composants React moderne, compatible avec shadcn/ui.

## 🚀 Installation rapide

Ajoutez d'abord les utilitaires :
```bash
pnpm dlx shadcn@latest add https://raw.githubusercontent.com/heavenconseil/hds-react-ui-packages/main/registry/lib/utils.json
```

Puis installez les composants :
```bash
# Composant CTA (bouton avec variants)
pnpm dlx shadcn@latest add https://raw.githubusercontent.com/heavenconseil/hds-react-ui-packages/main/registry/ui/cta.json

# Composant Picto (système d'icônes)
pnpm dlx shadcn@latest add https://raw.githubusercontent.com/heavenconseil/hds-react-ui-packages/main/registry/ui/picto.json

# Composant HDSCard (Container)
pnpm dlx shadcn@latest add https://raw.githubusercontent.com/heavenconseil/hds-react-ui-packages/main/registry/ui/hdscard.json

# Composant HDSCarousel (Slider)
pnpm dlx shadcn@latest add https://raw.githubusercontent.com/heavenconseil/hds-react-ui-packages/main/registry/ui/hdscarousel.json

# Composant Selector (Sélecteur)
pnpm dlx shadcn@latest add https://raw.githubusercontent.com/heavenconseil/hds-react-ui-packages/main/registry/ui/selector.json
```

## 📦 Utilisation

```tsx
import { CTA } from '@/components/ui/cta'
import { Picto } from '@/components/ui/picto'

// Bouton CTA avec variants
<CTA variant="primary" size="lg">Mon bouton</CTA>
<CTA variant="secondary" isLoading>Chargement...</CTA>

// Système d'icônes
<Picto name="heart" size="medium" />
<Picto name="check" size="small" className="text-green-500" />
```

## 🔧 Composants disponibles

### Utils
**Utils :** `pnpm dlx shadcn@latest add https://raw.githubusercontent.com/heavenconseil/hds-react-ui-packages/main/registry/lib/utils.json`

### UI Components
**CTA :** `pnpm dlx shadcn@latest add https://raw.githubusercontent.com/heavenconseil/hds-react-ui-packages/main/registry/ui/cta.json`

**Picto :** `pnpm dlx shadcn@latest add https://raw.githubusercontent.com/heavenconseil/hds-react-ui-packages/main/registry/ui/picto.json`

## 🎨 Variants du CTA

```tsx
<CTA variant="primary">Primary</CTA>
<CTA variant="secondary">Secondary</CTA>  
<CTA variant="outline">Outline</CTA>
<CTA variant="ghost">Ghost</CTA>
<CTA variant="destructive">Destructive</CTA>

<CTA size="sm">Small</CTA>
<CTA size="default">Default</CTA>
<CTA size="lg">Large</CTA>

<CTA href="/path">Lien</CTA>
<CTA isLoading>Chargement...</CTA>
```

## 🎯 Icônes Picto disponibles

```tsx
<Picto name="check" size="medium" />
<Picto name="close" size="medium" />
<Picto name="heart" size="medium" />
<Picto name="star" size="medium" />
<Picto name="user" size="medium" />
<Picto name="plus" size="medium" />
<Picto name="error" size="medium" />

// Tailles disponibles: 'small' | 'medium' | 'large'
```

## 🏗️ Développement

```bash
# Installer les dépendances
pnpm install

# Démarrer le serveur de développement
pnpm dev

# Construire les composants
pnpm build

# Lancer Storybook
pnpm storybook
```

## 📚 Documentation

- **Storybook** : Documentation interactive des composants
- **Registry** : Format compatible shadcn/ui pour l'installation
- **TypeScript** : Support complet des types

## 🎯 Prérequis

- React 18+
- TypeScript
- Tailwind CSS v4+
- Un projet configuré avec shadcn/ui

## 📄 License

MIT
