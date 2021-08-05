const fs = require('fs');

const file = 'meu-arquivo.txt';

try {
  const data = fs.readFileSync(file, 'utf8');
  console.log(data);
} catch (err) {
  console.error(`Erro ao ler o arquivo: ${err.path}`);
  console.log(err);
};
