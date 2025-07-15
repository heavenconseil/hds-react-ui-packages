#!/usr/bin/env node

import fs from 'fs-extra'

async function syncRegistry() {
  console.log('📦 Synchronisation du registry...')
  
  try {
    // Lire le fichier CTA original
    const ctaContent = await fs.readFile('src/components/CTA/CTA.tsx', 'utf-8')
    
    // Adapter le contenu pour le registry (changer les imports)
    const registryCtaContent = ctaContent
      .replace(`import { cn } from '../../utils'`, `import { cn } from '@/lib/utils'`)
      .replace(`import { Picto } from '../Picto/Picto'`, `// Remplacer par votre composant d'icône`)
      .replace(/startIcon\?: string/g, 'startIcon?: ReactNode')
      .replace(/endIcon\?: string/g, 'endIcon?: ReactNode')
      .replace(/<Picto name={startIcon} size={size} \/>/g, '{startIcon}')
      .replace(/<Picto name={endIcon} size={size} \/>/g, '{endIcon}')
      .replace(`export default CTA as ForwardRefExoticComponent<CTAProps & RefAttributes<HTMLButtonElement>>`, `export { CTA }`)
    
    // Écrire dans le registry
    await fs.outputFile('registry/ui/cta.tsx', registryCtaContent)
    
    // Lire le fichier utils
    const utilsContent = await fs.readFile('src/utils/index.ts', 'utf-8')
    await fs.outputFile('registry/lib/utils.ts', utilsContent)
    
    console.log('✅ Registry synchronisé!')
    console.log('📁 Fichiers mis à jour:')
    console.log('  - registry/ui/cta.tsx')
    console.log('  - registry/lib/utils.ts')
    
  } catch (error) {
    console.error('❌ Erreur lors de la synchronisation:', error)
  }
}

syncRegistry()
