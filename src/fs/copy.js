import fs from 'fs'

const folderCheck = !fs.existsSync('./src/fs/files') || fs.existsSync('./src/fs/files_copy')

const copy = async () => {
  if (folderCheck) {
    throw new Error('FS operation failed')
  } else {
    fs.cp('./src/fs/files', './src/fs/files_copy', { recursive: true }, (err) => {
      err ? console.log(err) : null
    })
  }
}

await copy()
