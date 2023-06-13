import { log } from 'console'
import fs from 'fs'

const fileCheck =
  fs.existsSync('./src/fs/files/properFilename.md') ||
  !fs.existsSync('./src/fs/files/wrongFilename.txt')

const rename = async () => {
  if (fileCheck) {
    throw new Error('FS operation failed')
  } else {
    fs.rename('./src/fs/files/wrongFilename.txt', './src/fs/files/properFilename.md', (err) => {
      err ? console.log(err) : null
    })
  }
}

await rename()
