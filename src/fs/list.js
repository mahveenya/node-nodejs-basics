import { readdir, access } from 'fs/promises'

const list = async () => {
  try {
    await access('./src/fs/files')
    const files = await readdir('./src/fs/files/')
    const names = files.map(e => e.slice(0, e.indexOf('.')))
    console.table(names)
  } catch {
    throw new Error('FS operation failed')
  }
}

await list()
