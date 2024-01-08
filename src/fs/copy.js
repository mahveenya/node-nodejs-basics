import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { access, constants, copyFile, mkdir, lstat } from 'fs/promises'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const copy = async () => {
  try {
    const filesFolder = join(__dirname, 'files')
    const filesCopyFolder = join(__dirname, 'files_copy')

    await access(filesFolder, constants.R_OK)

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
    throw new Error(`FS operation failed: ${e.message}`)
  }
}

await copy()
