# HDS UI - CLI

## 🚀 Installation

```bash
curl -sSL https://raw.githubusercontent.com/heavenconseil/hds-react-ui-packages/main/install.sh | bash
source ~/.bashrc  # puis tester : hds-ui --help
```

## 📦 Utilisation

```bash
# Dans votre projet React/Next.js
hds-ui init
hds-ui add cta
```

```tsx
import { CTA } from '@/components/ui/cta'

<CTA variant="primary">Mon bouton</CTA>
```

---

## � Cas particuliers

**CLI non trouvé :** `echo 'export PATH="$HOME/Library/pnpm:$PATH"' >> ~/.bashrc && source ~/.bashrc`

**Mise à jour :** `hds-ui update`

**Composants disponibles :** CTA (bouton avec variants)
