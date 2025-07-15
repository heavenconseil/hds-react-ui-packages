import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs'], // Changer vers CommonJS pour éviter les problèmes de require dynamique
  dts: true,
  banner: {
    js: '#!/usr/bin/env node'
  },
  clean: true,
  noExternal: ['chalk', 'ora', 'commander', 'axios', 'fs-extra'] // Bundle dependencies
})
