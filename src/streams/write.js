import fs from 'fs'

const ws = fs.createWriteStream('./src/streams/files/fileToWrite.txt')

const displayInfo = () => {
  process.stdout.write('Hello, dear colleague!')
  process.stdout.write('\nIn order to check this task,')
  process.stdout.write('\nplease enter any text into terminal,')
  process.stdout.write('\nin order to save the entered line hit "Enter",')
  process.stdout.write('\notherwise it won\'t be saved,')
  process.stdout.write('\nto stop program execution use "Ctrl + C"')
  process.stdout.write('\nand check fileToWrite.txt')
  process.stdout.write("\n(I hope you'll find entered text there)\n")
}

const write = async () => {
  process.stdin.on('data', (data) => {
    ws.write(data)
  })
}

displayInfo()
await write()
