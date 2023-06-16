import { unlink } from 'fs/promises'

const remove = async () => {
  try {
    await unlink('./src/fs/files/fileToRemove.txt')
  } catch {
    throw new Error('FS operation failed')
  }
}

await remove()
