import { join } from 'path'
import { writeFile } from 'fs/promises'
import { __dirname } from '../__dirname.js'

const text = 'I am fresh and young'

const create = async () => {
  try {
    const newFilePath = join(__dirname, 'fs', 'files', 'fresh.txt')
    await writeFile(newFilePath, text, { flag: 'ax' })
  } catch {
    throw new Error(`FS operation failed:\n${e.message}`)
  }
}

await create()
