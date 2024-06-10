import fs from 'fs'
import { unlink } from 'fs/promises'
import zlib from 'zlib'

const rs = fs.createReadStream('./src/zip/files/fileToCompress.txt')
const ws = fs.createWriteStream('./src/zip/files/archive.gz')
const gzip = zlib.createGzip()

const compress = async () => {
  const stream = rs.pipe(gzip).pipe(ws)
  return await new Promise((resolve) => stream.on('finish', resolve))
}

const deleteSourceFile = async () => {
  try {
    await unlink('./src/zip/files/fileToCompress.txt')
  } catch (e) {
    console.error(e)
  }
}

await compress()
await deleteSourceFile()
