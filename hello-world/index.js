 const readline = require('readline-sync');
 const { calculaDelta, calculaX } = require('./functions');

// (-b ± √Δ) / (2 * a)
// Δ = b² - 4ac.

// const nome = readline.question("Qual seu nome?");
// console.log("Bem vindo, " + nome);
// console.log("Bem vindo, %s", nome);
// console.log(`Bem vindo, ${nome}`);

function executaResultado() {
  const a = readline.questionInt("Digite o valor de a: ");
  const b = readline.questionInt("Digite o valor de b: ");
  const c = readline.questionInt("Digite o valor de c: ");

  console.log("Coeficientes. a = %s, b = %s, c = %s", a, b, c);

  const delta = calculaDelta(a, b, c);

  if (delta < 0) {
    console.log(`Não é possível calcular x quando delta é negativo: ${delta}`);
    return;
  }

  console.log("Delta: %s", delta);

  const { x1, x2 } = calculaX(a, b, delta);

  console.log(`Resultado. x1 = ${x1}, x2 = ${x2}`);
}

executaResultado();



