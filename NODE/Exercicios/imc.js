const readline = require('readline-sync');

const peso = readline.questionFloat('Qual o seu peso? ');
const altura = readline.questionFloat('Qual a sua altura? ');

function bmi(weight, height) {
  const bmiResult = weight / Math.pow(height, 2);
  if (bmiResult <= 18.5) {
    return console.log("Underweight");
  } else if (bmiResult <= 25.0) {
    return console.log("Normal");
  } else if (bmiResult <= 30.0) {
    return console.log("Overweight");
  } else if (bmiResult > 30) {
    return console.log("Obese");
  }
};

bmi(peso, altura);
