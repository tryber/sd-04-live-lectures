// ES6 - Features -> Parâmetro Rest

// Sintaxe que permite passarmos em um unico parametro diversos valores

// --------------------- Problema --------------------------- // 
// Criar uma função que some todos os parametros que ela receber

const assert = require('assert');

// Usando Rest e Loops 

const sumAll = (...numbers) => {
    let sum = 0;

    numbers.forEach(number => {
        sum += number;
    })

    return sum;
}
assert.strictEqual(sumAll(1, 2), 3);
assert.strictEqual(sumAll(1, 2, 3), 6);
assert.strictEqual(sumAll(1, 2, 3, 4, 5), 15);

// Usando rest e reduce

const sumAllReduce = (...numbers) =>
    numbers.reduce((accumulador, elementoAtual) => accumulador + elementoAtual, 0)

assert.strictEqual(sumAllReduce(1, 2), 3);
assert.strictEqual(sumAllReduce(1, 2, 3), 6);
assert.strictEqual(sumAllReduce(1, 2, 3, 4, 5), 15);

