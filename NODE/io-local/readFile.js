const fs = require('fs');

const file = 'meu-arquivo.txt';

fs.readFile(file, 'utf8', (err, data) => {
  if (err) {
    console.error(`Não foi possível ler o arquivo ${file}\n${err}`);
    process.exit(1);
  }
  console.log(`Conteúdo do arquivo:\n\n${data}`);
});
