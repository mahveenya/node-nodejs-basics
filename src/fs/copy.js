import { join } from 'path'
import { access, copyFile, mkdir, lstat } from 'fs/promises'
import { __dirname } from '../__dirname.js'

const copy = async () => {
  try {
    const filesFolder = join(__dirname, 'fs', 'files')
    const filesCopyFolder = join(__dirname, 'fs', 'files_copy')

    await access(filesFolder)

    const filesCopyFolderExists = (await lstat(filesCopyFolder)).isDirectory()
    if (filesCopyFolderExists) {
      throw new Error('files_copy folder already exists')
    } else {
      await mkdir(filesCopyFolder)
    }

    const filesToCopy = await readdir(filesFolder)

    await Promise.all(
      filesToCopy.map(
        async file =>
          await copyFile(join(filesFolder, file), join(filesCopyFolder, file)),
      ),
    )
  } catch (e) {
    throw new Error(`FS operation failed:\n${e.message}`)
  }
}

await copy()
