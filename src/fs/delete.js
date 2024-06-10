import { join } from 'path'
import { unlink } from 'fs/promises'
import { __dirname } from '../__dirname.js'

const remove = async () => {
  try {
    const fileToRemovePath = join(__dirname, 'fs', 'files', 'fileToRemove.txt')
    await unlink(fileToRemovePath)
  } catch {
    throw new Error(`FS operation failed:\n${e.message}`)
  }
}

await remove()
