import { Transform } from 'stream'

const displayInfo = () => {
  process.stdout.write('Enter text, hit "Enter", check the result\n')
}

const reverseData = new Transform({
  transform(chunk, enc, cb) {
    const reversedChunk = `${chunk.toString().split('').reverse().join('')}\n`
    cb(null, reversedChunk)
  },
})

const transform = async () => {
  process.stdin.pipe(reverseData).pipe(process.stdout)
}

displayInfo()
await transform()
