import fs from 'fs-extra'
import path from 'path'
import os from 'os'

export interface RegistryConfig {
  type: 'github-team' | 'github-raw'
  registryUrl?: string
}

const CONFIG_DIR = path.join(os.homedir(), '.hds-ui')
const CONFIG_FILE = path.join(CONFIG_DIR, 'config.json')

export async function getConfig(): Promise<RegistryConfig> {
  try {
    await fs.ensureDir(CONFIG_DIR)
    
    if (await fs.pathExists(CONFIG_FILE)) {
      return await fs.readJson(CONFIG_FILE)
    }
    
    // Configuration par défaut pour le registry d'équipe
    const defaultConfig: RegistryConfig = {
      type: 'github-team',
      registryUrl: 'https://raw.githubusercontent.com/heavenconseil/hds-react-ui-packages/main/registry/registry.json'
    }
    
    await fs.writeJson(CONFIG_FILE, defaultConfig, { spaces: 2 })
    return defaultConfig
  } catch (error) {
    throw new Error(`Erreur lors de la lecture de la configuration: ${error}`)
  }
}

export async function setConfig(config: RegistryConfig): Promise<void> {
  try {
    await fs.ensureDir(CONFIG_DIR)
    await fs.writeJson(CONFIG_FILE, config, { spaces: 2 })
  } catch (error) {
    throw new Error(`Erreur lors de l'écriture de la configuration: ${error}`)
  }
}
