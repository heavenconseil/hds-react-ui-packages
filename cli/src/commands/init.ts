import { Command } from 'commander'
import inquirer from 'inquirer'
import fs from 'fs-extra'
import path from 'path'
import chalk from 'chalk'

export const initCommand = new Command()
  .name('init')
  .description('Initialiser HDS UI dans votre projet')
  .action(async () => {
    console.log(chalk.blue('Initialisation de HDS UI...'))
    
    // Vérifier si c'est un projet Next.js ou Vite
    const projectType = await detectProjectType()
    
    // Créer les dossiers nécessaires
    await fs.ensureDir('src/components/ui')
    await fs.ensureDir('src/lib')
    
    // Copier le fichier utils
    const utilsContent = `import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`
    
    await fs.writeFile('src/lib/utils.ts', utilsContent)
    
    // Mettre à jour tsconfig.json pour les alias
    await updateTsConfig()
    
    console.log(chalk.green('✅ HDS UI initialisé avec succès!'))
    console.log(chalk.yellow('Vous pouvez maintenant ajouter des composants avec: hds-ui add [component]'))
  })

async function detectProjectType() {
  const packageJson = await fs.readJson('package.json')
  if (packageJson.dependencies?.['next'] || packageJson.devDependencies?.['next']) {
    return 'next'
  }
  if (packageJson.dependencies?.['vite'] || packageJson.devDependencies?.['vite']) {
    return 'vite'
  }
  return 'react'
}

async function updateTsConfig() {
  try {
    const tsConfigPath = 'tsconfig.json'
    if (await fs.pathExists(tsConfigPath)) {
      const tsConfig = await fs.readJson(tsConfigPath)
      
      if (!tsConfig.compilerOptions) {
        tsConfig.compilerOptions = {}
      }
      
      if (!tsConfig.compilerOptions.paths) {
        tsConfig.compilerOptions.paths = {}
      }
      
      tsConfig.compilerOptions.paths['@/*'] = ['./src/*']
      
      await fs.writeJson(tsConfigPath, tsConfig, { spaces: 2 })
      console.log(chalk.green('✅ tsconfig.json mis à jour'))
    }
  } catch (error) {
    console.log(chalk.yellow('⚠️  Impossible de mettre à jour tsconfig.json automatiquement'))
  }
}
