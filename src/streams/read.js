import fs from 'fs'

const rs = fs.createReadStream('./src/streams/files/fileToRead.txt')

const read = async () => {
  rs.pipe(process.stdout)
}

await read()
