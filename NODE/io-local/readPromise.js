const { readFile } = require('fs/promises');

const file = 'meu-arquivo.txt';

readFile(file, 'utf8')
  .then((data) => {
    console.log(`Conteúdo do arquivo:\n\n${data}`);
  })
  .catch((err) => {
    console.error(`Não foi possível ler o arquivo ${file}\n${err}`);
    process.exit(1); // Encerra a execução do script e informa ao sistema operacional que houve um erro com código
  });
