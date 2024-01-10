import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { opendir } from 'fs/promises'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const list = async () => {
  try {
    const dirToReadPath = join(__dirname, 'files')
    const dir = await opendir(dirToReadPath)
    for await (const dirent of dir) {
      console.log(dirent.name)
    }
  } catch(e) {
    throw new Error(`FS operation failed:\n${e.message}`)
  }
}

await list()
