import fs from 'fs/promises'

fs.access('./src/fs/files')
  .then(() =>
    fs
      .access('./src/fs/files_copy')
      .then(() => {
        try {
          throw new Error('FS operation failed')
        } catch (e) {
          console.log(e)
        }
      })
      .catch(copy)
  )
  .catch(() => {
    try {
      throw new Error('FS operation failed')
    } catch (e) {
      console.log(e)
    }
  })

const copy = () => {
  fs.cp('./src/fs/files', './src/fs/files_copy', { recursive: true, force: true })
}
