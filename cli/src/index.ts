import { Command } from 'commander'
import { addCommand } from './commands/add.js'
import { initCommand } from './commands/init.js'
import { configCommand } from './commands/config.js'
import { updateCommand } from './commands/update.js'
import { checkForUpdates } from './utils/version.js'

const program = new Command()

program
  .name('hds-ui')
  .description('CLI pour installer les composants HDS UI')
  .version('1.0.0')

program.addCommand(initCommand)
program.addCommand(addCommand)
program.addCommand(configCommand)
program.addCommand(updateCommand)

// Vérifier les mises à jour en arrière-plan
checkForUpdates()

program.parse()
