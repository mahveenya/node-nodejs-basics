import process from 'process'

const parseEnv = () => {
  process.env.RSS_ID = 123
  process.env.RSS_PASSWORD = 123456
  process.env.RSS_ZIP = 123321
  for (const [key, value] of Object.entries(process.env)) {
    if (key.includes('RSS_')) console.log(`${key}=${value}`)
  }
}

parseEnv()
