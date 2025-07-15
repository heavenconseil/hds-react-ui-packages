import { Command } from 'commander'
import { execSync } from 'child_process'
import chalk from 'chalk'
import ora from 'ora'

export const updateCommand = new Command()
  .name('update')
  .description('Mettre à jour le CLI HDS UI')
  .action(async () => {
    const spinner = ora('Mise à jour du CLI HDS UI...').start()
    
    try {
      // Télécharger et réinstaller le CLI
      const updateScript = `
        TEMP_DIR=$(mktemp -d)
        cd "$TEMP_DIR"
        git clone https://github.com/heavenconseil/hds-react-ui-packages.git
        cd hds-react-ui-packages/cli
        
        if command -v pnpm &> /dev/null; then
          pnpm install
          pnpm build  
          pnpm link --global --force
        else
          npm install
          npm run build
          npm link --force
        fi
        
        cd ~
        rm -rf "$TEMP_DIR"
      `
      
      execSync(updateScript, { stdio: 'pipe' })
      
      spinner.succeed('✅ CLI mis à jour avec succès!')
      console.log(chalk.green('🔧 Redémarrez votre terminal pour utiliser la nouvelle version'))
      
    } catch (error) {
      spinner.fail('❌ Erreur lors de la mise à jour')
      console.error(chalk.red(`Erreur: ${error}`))
      console.log(chalk.yellow('💡 Essayez la mise à jour manuelle:'))
      console.log(chalk.gray('curl -sSL https://raw.githubusercontent.com/heavenconseil/hds-react-ui-packages/main/install.sh | bash'))
    }
  })
