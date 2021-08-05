const fs = require('fs/promises');
const rd = require('readline-sync');

const file = rd.question('Digite o nome do arquivo: ');

async function readNew(fileName) {
  try {
    const data = await fs.readFile(`./${fileName}.txt`, 'utf8');
    console.log(`Conteúdo do arquivo:\n\n${data}`);
  } catch (err) {
    console.error(`Não foi possível ler o arquivo ${fileName}\n${err}`);
    process.exit(1);
  }
};

readNew(file);
