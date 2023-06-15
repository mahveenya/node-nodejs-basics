import fs from 'fs'
import zlib from 'zlib'

const rs = fs.createReadStream('./src/zip/files/archive.gz')
const gzip = zlib.createUnzip()

const decompress = async () => {
  rs.pipe(gzip).pipe(fs.WriteStream('./src/zip/files/fileToCompress.txt'))
}

await decompress()
