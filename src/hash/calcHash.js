import { join } from 'path'
import { readFile } from 'fs/promises'
import { __dirname } from '../__dirname.js'

const calculateHash = async () => {
  try {
    const fileToCalculateHashForPath = join(
      __dirname,
      'hash/files/fileToCalculateHashFor.txt',
    )
    const fileData = readFile(fileToCalculateHashForPath, {
      encoding: 'utf8',
    })
    const hash = crypto.createHash('sha256')
    hash.update(fileData)
    console.log(hash.digest('hex'))
  } catch {
    throw new Error(`FS operation failed:\n${e.message}`)
  }
}

await calculateHash()
