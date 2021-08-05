const fs = require('fs/promises');
const rd = require('readline-sync');

const newContent = rd.question('Digite o novo conteúdo: ');

fs.writeFile('./meu-arquivo.txt', newContent)
  .then(() => {
    console.log('Arquivo escrito com sucesso!');
  })
  .catch((err) => {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  });
