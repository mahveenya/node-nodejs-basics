import fs from 'fs'

const rs = fs.createReadStream('./src/streams/files/fileToRead.txt')

const read = async () => {
  rs.on('data', chunk => {
    process.stdout.write(chunk)
  })
}

await read()
