import { readFile } from 'fs/promises'
import crypto from 'crypto'

const calculateHash = async () => {
  try {
    const fileData = readFile('src/hash/files/fileToCalculateHashFor.txt', {
      encoding: 'utf8',
    })
    const hash = crypto.createHash('sha256')
    hash.update(fileData)
    console.log(hash.digest('hex'))
  } catch {
    throw new Error('FS operation failed')
  }
}

await calculateHash()
