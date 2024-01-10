import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { unlink } from 'fs/promises'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const remove = async () => {
  try {
    const fileToRemovePath = join(__dirname, 'files', 'fileToRemove.txt')
    await unlink(fileToRemovePath)
  } catch {
    throw new Error(`FS operation failed:\n${e.message}`)
  }
}

await remove()
