# HDS React UI Packages

Une bibliothèque de composants React moderne, compatible avec shadcn/ui.

## 🚀 Installation

Compatible avec shadcn/ui :

```bash
pnpm dlx shadcn@latest add https://raw.githubusercontent.com/heavenconseil/hds-react-ui-packages/main/registry/ui/cta.json
```

## 📦 Utilisation

```tsx
import { CTA } from '@/components/ui/cta'

<CTA variant="primary">Mon bouton</CTA>
```

## 🔧 Composants disponibles

**CTA :** `pnpm dlx shadcn@latest add https://raw.githubusercontent.com/heavenconseil/hds-react-ui-packages/main/registry/ui/cta.json`

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
<CTA loading>Chargement...</CTA>
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
