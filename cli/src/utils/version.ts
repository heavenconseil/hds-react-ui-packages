import axios from 'axios'
import chalk from 'chalk'

const CURRENT_VERSION = '1.0.0'
const GITHUB_API_URL = 'https://api.github.com/repos/heavenconseil/hds-react-ui-packages/commits/main'

export async function checkForUpdates(): Promise<void> {
  try {
    const response = await axios.get(GITHUB_API_URL, { timeout: 2000 })
    const latestCommit = response.data.sha.substring(0, 7)
    
    // Stocker le dernier commit vérifié
    const fs = await import('fs-extra')
    const os = await import('os')
    const path = await import('path')
    
    const configDir = path.join(os.homedir(), '.hds-ui')
    const versionFile = path.join(configDir, 'version.json')
    
    await fs.ensureDir(configDir)
    
    let lastKnownCommit = ''
    try {
      const versionData = await fs.readJson(versionFile)
      lastKnownCommit = versionData.commit || ''
    } catch {
      // Fichier n'existe pas encore
    }
    
    if (lastKnownCommit !== latestCommit) {
      console.log(chalk.yellow('🔄 Une nouvelle version du CLI est disponible!'))
      console.log(chalk.gray(`   Lancez: ${chalk.white('hds-ui update')}`))
      console.log('')
      
      // Sauvegarder le nouveau commit
      await fs.writeJson(versionFile, { 
        version: CURRENT_VERSION,
        commit: latestCommit,
        lastCheck: Date.now()
      })
    }
    
  } catch {
    // Ignorer les erreurs de vérification (pas de réseau, etc.)
  }
}
