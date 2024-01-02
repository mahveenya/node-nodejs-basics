import { readFile } from 'fs/promises'

const read = async () => {
  try {
    const fileData = await readFile('./src/fs/files/fileToRead.txt', { encoding: 'utf8' })
    console.log(fileData)
  } catch {
    throw new Error('FS operation failed')
  }
}

await read()
