import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig(({ command }) => {
  const isServe = command === 'serve'
  
  return {
    plugins: [
      react(),
      ...(isServe ? [] : [
        dts({
          insertTypesEntry: true,
          include: ['src/**/*'],
          exclude: ['**/*.stories.tsx', '**/*.test.tsx', '**/main.tsx']
        })
      ])
    ],
    resolve: {
      alias: {
        '@': resolve('./src')
      }
    },
    build: isServe ? undefined : {
      lib: {
        entry: resolve('src/index.ts'),
        name: 'HDSReactUIPackages',
        formats: ['es', 'umd'],
        fileName: (format) => `index.${format === 'es' ? 'esm' : format}.js`
      },
      rollupOptions: {
        external: ['react', 'react-dom', 'tailwindcss'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            tailwindcss: 'tailwindcss'
          }
        }
      },
      sourcemap: true,
      emptyOutDir: true
    },
    css: {
      postcss: './postcss.config.js'
    }
  }
})