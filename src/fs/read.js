import { join } from 'path'
import { open } from 'fs/promises'
import { __dirname } from '../__dirname.js'

const read = async () => {
  try {
    const fileToReadPath = join(__dirname, 'fs', 'files', 'fileToRead.txt')

    const fileHandle = await open(fileToReadPath)
    const fileSize = (await fileHandle.stat()).size
    const buffer = Buffer.alloc(fileSize)
    const offset = 0
    const length = fileSize
    const position = 0

    await fileHandle.read(buffer, offset, length, position)

    await fileHandle.on('close', () => {
      console.log(buffer.toString())
    })

    await fileHandle.close()
  } catch (e) {
    throw new Error(`FS operation failed:\n${e.message}`)
  }
}

await read()
