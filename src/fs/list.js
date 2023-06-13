import fs from 'fs'

const folderCheck = !fs.existsSync('./src/fs/files')

const list = async () => {
  if (folderCheck) throw new Error('FS operation failed')
  fs.readdir('./src/fs/files/', (err, files) => {
    if (err) throw new Error(err)
    console.table(files)
  })
}

await list()
