import fs from 'fs'
import zlib from 'zlib'

const rs = fs.createReadStream('./src/zip/files/fileToCompress.txt')
const gzip = zlib.createGzip()

const compress = async () => {
  rs.pipe(gzip).pipe(fs.WriteStream('./src/zip/files/archive.gz'))
}

await compress()
