import { Command } from 'commander'
import { getConfig, setConfig, RegistryConfig } from '../utils/config.js'
import chalk from 'chalk'

export const configCommand = new Command()
  .name('config')
  .description('Configurer le registry HDS UI')
  .option('--reset', 'Remettre la configuration par défaut')
  .action(async (options: { reset?: boolean }) => {
    if (options.reset) {
      const defaultConfig: RegistryConfig = {
        type: 'github-team',
        registryUrl: 'https://raw.githubusercontent.com/heavenconseil/hds-react-ui-packages/main/registry/registry.json'
      }
      await setConfig(defaultConfig)
      console.log(chalk.green('✅ Configuration remise par défaut!'))
      return
    }
    
    const config = await getConfig()
    console.log(chalk.blue('📋 Configuration actuelle:'))
    console.log(chalk.gray(`Type: ${config.type}`))
    console.log(chalk.gray(`Registry URL: ${config.registryUrl}`))
    console.log('')
    console.log(chalk.yellow('💡 Utilisez --reset pour remettre la configuration par défaut'))
  })
