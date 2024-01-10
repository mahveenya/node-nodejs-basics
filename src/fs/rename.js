import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import fs from 'fs/promises'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const rename = async () => {
  try {
    const wrongFilenamePath = join(__dirname, 'files', 'wrongFilename.txt')
    const properFilenamePath = join(__dirname, 'files', 'properFilename.md')
    await fs.rename(wrongFilenamePath, properFilenamePath)
  } catch {
    throw new Error(`FS operation failed:\n${e.message}`)
  }
}

await rename()
