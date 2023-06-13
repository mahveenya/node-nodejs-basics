import fs from 'fs';

const text = 'I am fresh and young'

const create = async () => {
  if(fs.existsSync('./src/fs/files/fresh.txt')) {
    throw new Error('FS operation failed')
  } else {
      fs.writeFile('./src/fs/files/fresh.txt', text, (err) => {
        err? console.log(err) : null
    })
  }
};

await create();