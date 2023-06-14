import { sep, dirname } from 'path'
import { release, version } from 'os'
import { createServer as createServerHttp } from 'http'
import './files/c.js'
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

const random = Math.random()

let unknownObject

if (random > 0.5) {
  unknownObject = require('./files/a.json')
} else {
  unknownObject = require('./files/b.json')
}

const __filename = import.meta.url
const __dirname = dirname(__filename)

console.log(`Release ${release()}`)
console.log(`Version ${version()}`)
console.log(`Path segment separator is "${sep}"`)

console.log(`Path to current file is ${__filename}`)
console.log(`Path to current directory is ${__dirname}`)

const myServer = createServerHttp((_, res) => {
  res.end('Request accepted')
})

const PORT = 3000

console.log(unknownObject)

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
  console.log('To terminate it, use Ctrl+C combination')
})

export { unknownObject, myServer }
