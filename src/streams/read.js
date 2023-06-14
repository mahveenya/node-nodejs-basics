import fs from 'fs'

const rs = fs.createReadStream('./src/streams/files/fileToRead.txt')
rs.setEncoding('utf-8')

const read = async () => {
  rs.on('data', chunk => {
    process.stdout.write(chunk)
  })
}

await read()
