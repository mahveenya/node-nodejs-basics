import { join } from 'path'
import { opendir } from 'fs/promises'
import { __dirname } from '../__dirname.js'

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
