import fs from 'fs'
import { unlink } from 'fs/promises'
import zlib from 'zlib'

const rs = fs.createReadStream('./src/zip/files/archive.gz')
const ws = fs.createWriteStream('./src/zip/files/fileToCompress.txt')
const gzip = zlib.createUnzip()

const decompress = async () => {
  const stream = rs.pipe(gzip).pipe(ws)
  return await new Promise((resolve) => stream.on('finish', resolve))
}

const deleteSourceArch = async () => {
  try {
    await unlink('./src/zip/files/archive.gz')
  } catch (e) {
    console.error(e)
  }
}

await decompress()
await deleteSourceArch()
