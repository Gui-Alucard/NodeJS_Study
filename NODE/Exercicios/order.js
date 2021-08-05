const readline = require('readline-sync');

const numero = readline.question('Escreva um número para a quantidade de caracteres: ');

function numberLength(value) {
  return console.log(value.toString().length);
}

numberLength(numero);
