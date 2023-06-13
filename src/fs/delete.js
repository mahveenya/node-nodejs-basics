import fs from 'fs'

const fileCheck = !fs.existsSync('./src/fs/files/fileToRemove.txt')

const remove = async () => {
  if (fileCheck) throw new Error('FS operation failed')
  fs.unlink('./src/fs/files/fileToRemove.txt', (err) => {
    err ? console.log(err) : null
  })
}

await remove()
