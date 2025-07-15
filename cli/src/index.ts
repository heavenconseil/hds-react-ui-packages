#!/usr/bin/env node

import { Command } from 'commander'
import { addCommand } from './commands/add.js'
import { initCommand } from './commands/init.js'
import { configCommand } from './commands/config.js'

const program = new Command()

program
  .name('hds-ui')
  .description('CLI pour installer les composants HDS UI')
  .version('1.0.0')

program.addCommand(initCommand)
program.addCommand(addCommand)
program.addCommand(configCommand)

program.parse()
