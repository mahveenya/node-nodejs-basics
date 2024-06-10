import { join } from 'path'
import fs from 'fs/promises'
import { __dirname } from '../__dirname.js'

const rename = async () => {
  try {
    const wrongFilenamePath = join(
      __dirname,
      'fs',
      'files',
      'wrongFilename.txt',
    )
    const properFilenamePath = join(
      __dirname,
      'fs',
      'files',
      'properFilename.md',
    )
    await fs.rename(wrongFilenamePath, properFilenamePath)
  } catch {
    throw new Error(`FS operation failed:\n${e.message}`)
  }
}

await rename()
