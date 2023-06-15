import fs from 'fs'
import zlib from 'zlib'

const rs = fs.createReadStream('./src/zip/files/archive.gz')
const ws = fs.createWriteStream('./src/zip/files/fileToCompress.txt')
const gzip = zlib.createUnzip()

const decompress = async () => {
  rs.pipe(gzip).pipe(ws)
}

await decompress()
