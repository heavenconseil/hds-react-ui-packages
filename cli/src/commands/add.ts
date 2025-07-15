import { Command } from 'commander'
import axios from 'axios'
import fs from 'fs-extra'
import path from 'path'
import chalk from 'chalk'
import ora from 'ora'
import { getConfig } from '../utils/config.js'

export const addCommand = new Command()
  .name('add')
  .description('Ajouter un composant HDS UI')
  .argument('<component>', 'Nom du composant à ajouter')
  .action(async (componentName: string) => {
    const spinner = ora(`Ajout du composant ${componentName}...`).start()
    
    try {
      // Récupérer la configuration
      const config = await getConfig()
      
      // Récupérer les informations du composant depuis le registry
      const registryResponse = await fetchFromRegistry('registry.json', config)
      const registry = JSON.parse(registryResponse)
      
      const component = registry.components[componentName]
      if (!component) {
        spinner.fail(`Le composant "${componentName}" n'existe pas`)
        return
      }
      
      // Installer les dépendances si nécessaire
      if (component.dependencies?.length > 0) {
        spinner.text = 'Installation des dépendances...'
        // TODO: Ajouter l'installation automatique des dépendances
      }
      
      // Télécharger et sauvegarder les fichiers du composant
      for (const file of component.files) {
        const fileResponse = await fetchFromRegistry(`ui/${file.name}`, config)
        const filePath = path.join('src/components/ui', file.name)
        await fs.outputFile(filePath, fileResponse)
      }
      
      spinner.succeed(`✅ Composant ${componentName} ajouté avec succès!`)
      console.log(chalk.green(`Fichier créé: src/components/ui/${componentName}.tsx`))
      
    } catch (error) {
      spinner.fail(`Erreur lors de l'ajout du composant: ${error}`)
    }
  })

// Fonction pour récupérer depuis le registry GitHub
async function fetchFromRegistry(filePath: string, config: any): Promise<string> {
  // Récupérer le registry JSON
  const registryResponse = await axios.get(config.registryUrl)
  const registry = registryResponse.data
  
  if (filePath === 'registry.json') {
    return JSON.stringify(registry)
  }
  
  // Pour les fichiers de composants, utiliser les URLs dans le registry
  const componentName = filePath.replace('ui/', '').replace('.tsx', '')
  const component = registry.components[componentName]
  
  if (component && component.files[0].url) {
    const fileResponse = await axios.get(component.files[0].url)
    return fileResponse.data
  }
  
  // Pour les utilitaires
  if (filePath.startsWith('lib/')) {
    const utilName = filePath.replace('lib/', '').replace('.ts', '')
    const util = registry.utils[utilName]
    
    if (util && util.files[0].url) {
      const fileResponse = await axios.get(util.files[0].url)
      return fileResponse.data
    }
  }
  
  throw new Error(`Fichier ${filePath} non trouvé dans le registry`)
}
