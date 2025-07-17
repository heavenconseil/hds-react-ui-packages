# HDS UI - Composants

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

---

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
