import fs from 'fs/promises'

fs.access('./src/fs/files')
  .then(() =>
    fs
      .access('./src/fs/files_copy')
      .then(() => console.log(new Error('FS operation failed')))
      .catch(() => copy())
  )
  .catch(() => console.log(new Error('FS operation failed')))

const copy = () => {
  fs.cp('./src/fs/files', './src/fs/files_copy', { recursive: true })
}
