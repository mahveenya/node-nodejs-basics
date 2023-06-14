import fs from 'fs'

const ws = fs.createWriteStream('./src/streams/files/fileToWrite.txt')

const displayInfo = () => {
  process.stdout.write('Enter text, hit "Enter", check fileToWrite.txt\n')
}

const write = async () => {
  process.stdin.pipe(ws)
}

displayInfo()
await write()
