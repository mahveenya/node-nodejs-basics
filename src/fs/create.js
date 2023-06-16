import { writeFile } from 'fs/promises'

const text = 'I am fresh and young'

const create = async () => {
  try {
    await writeFile('./src/fs/files/fresh.txt', text, { flag: 'ax' })
  } catch (e) {
    throw new Error('FS operation failed')
  }
}

await create()
