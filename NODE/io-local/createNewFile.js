const fs = require('fs/promises');
const rd = require('readline-sync');

const fileName = rd.question('Digite o nome do arquivo: ');
const newContent = rd.question('Digite o novo conteúdo: ');

async function main(fileName) {
  try {
    await fs.writeFile(`./${fileName}.txt`, newContent, { flag: 'wx' });
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}

main(fileName)
