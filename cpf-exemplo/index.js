const readline = require('readline-sync');
const cpf = require("node-cpf");

function executa() {
  const cpfInput = readline.question("Digite seu cpf: ");
  
  if (cpf.validate(cpfInput)) {
    console.log("Cpf %s é válido", cpfInput)
  } else {
    console.log("Cpf %s é inválido", cpfInput);
  }
}

executa();