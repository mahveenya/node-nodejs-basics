import fs from 'fs'

const fileCheck = !fs.existsSync('./src/fs/files/fileToRead.txt')

const read = async () => {
  if (fileCheck) throw new Error('FS operation failed')
  fs.readFile('./src/fs/files/fileToRead.txt', (err, data) => {
    if (err) throw new Error(err)
    console.log(data.toString())
  })
}

await read()
