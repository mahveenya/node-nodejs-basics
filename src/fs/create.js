import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { writeFile } from 'fs/promises'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const text = 'I am fresh and young'

const create = async () => {
  try {
    const newFilePath = join(__dirname, 'files', 'fresh.txt')
    await writeFile(newFilePath, text, { flag: 'ax' })
  } catch {
    throw new Error('FS operation failed')
  }
}

await create()
