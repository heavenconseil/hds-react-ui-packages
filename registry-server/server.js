import express from 'express'
import cors from 'cors'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())

// Chemin vers le registry
const REGISTRY_PATH = path.join(__dirname, '../registry')

// Route pour récupérer le registry.json
app.get('/registry.json', async (req, res) => {
  try {
    const registryFile = await fs.readFile(path.join(REGISTRY_PATH, 'registry.json'), 'utf-8')
    res.json(JSON.parse(registryFile))
  } catch (error) {
    res.status(404).json({ error: 'Registry not found' })
  }
})

// Route pour récupérer les fichiers de composants
app.get('/ui/:filename', async (req, res) => {
  try {
    const { filename } = req.params
    const filePath = path.join(REGISTRY_PATH, 'ui', filename)
    const fileContent = await fs.readFile(filePath, 'utf-8')
    
    res.type('text/plain').send(fileContent)
  } catch (error) {
    res.status(404).json({ error: 'Component file not found' })
  }
})

// Route pour récupérer les utilitaires
app.get('/lib/:filename', async (req, res) => {
  try {
    const { filename } = req.params
    const filePath = path.join(REGISTRY_PATH, 'lib', filename)
    const fileContent = await fs.readFile(filePath, 'utf-8')
    
    res.type('text/plain').send(fileContent)
  } catch (error) {
    res.status(404).json({ error: 'Lib file not found' })
  }
})

// Route de santé
app.get('/health', (req, res) => {
  res.json({ status: 'OK', registry: 'HDS UI Registry Server' })
})

app.listen(PORT, () => {
  console.log(`🚀 HDS Registry Server running on http://localhost:${PORT}`)
  console.log(`📁 Registry path: ${REGISTRY_PATH}`)
})
