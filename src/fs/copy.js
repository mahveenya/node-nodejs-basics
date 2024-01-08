import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { access, copyFile } from 'fs/promises'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const copy = async () => {
  try {
    const filesFolder = join(__dirname, 'files')
    const filesCopyFolder = join(__dirname, 'files_copy')

    const filesFolderDoesntExist = (await access(filesFolder)) !== undefined
    if (filesFolderDoesntExist) throw new Error("files folder doesn't exist")

    const filesCopyFolderExists = (await access(filesCopyFolder)) === undefined
    if (filesCopyFolderExists)
      throw new Error('files_copy folder already exists')

    await mkdir(filesCopyFolder)
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
