import { readFile } from 'fs/promises'

const read = async () => {
  try {
    const fileData = await readFile('./src/fs/files/fileToRead.txt', { flag: 'r' })
    console.log(fileData.toString())
  } catch {
    throw new Error('FS operation failed')
  }
}

await read()
