import fs from 'fs'
import zlib from 'zlib'

const rs = fs.createReadStream('./src/zip/files/fileToCompress.txt')
const ws = fs.createWriteStream('./src/zip/files/archive.gz')
const gzip = zlib.createGzip()

const compress = async () => {
  rs.pipe(gzip).pipe(ws)
}

await compress()
