import fs from 'fs'
import zlib from 'zlib'

const rs = fs.createReadStream('./src/zip/files/fileToCompress.txt')
const ws = fs.createWriteStream('./src/zip/files/archive.gz')
const gzip = zlib.createGzip()

const compress = async () => {
  const stream = rs.pipe(gzip).pipe(ws)
  return await new Promise(resolve => stream.on("finish", resolve));
}

const deleteSourceFile = async () => {
  fs.unlink('./src/zip/files/fileToCompress.txt', (err) => {
    err ? console.log(err) : null
  })
}

await compress()
await deleteSourceFile()
