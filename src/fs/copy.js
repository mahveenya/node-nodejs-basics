import { cp, access } from 'fs/promises'

const copy = async () => {
  try {
    await access('./src/fs/files')
    try {
      await cp('./src/fs/files', './src/fs/files_copy', {
        recursive: true,
        force: false,
        errorOnExist: true,
      })
    } catch {
      throw new Error('FS operation failed')
    }
  } catch {
    throw new Error('FS operation failed')
  }
}

await copy()
