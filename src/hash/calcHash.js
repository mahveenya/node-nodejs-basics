import fs from 'fs'
import crypto from 'crypto'

const calculateHash = async () => {
  fs.readFile('src/hash/files/fileToCalculateHashFor.txt', (err, data) => {
    if (err) throw new Error(err)

    const hash = crypto.createHash('sha256')
    hash.update(data)
    console.log(hash.digest('hex'))
  })
};

await calculateHash();