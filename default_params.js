// ES6 - Features -> Default Params

// Os default params servem para atribuir valores suplentes no caso de sua ausência quando as funções são chamadas.

// Principal uso de default params:

// Atribuir valores base aos parâmetros quando eles não são passados à chamada da função.

// --------------------- Problema --------------------------- // 
// Crie uma função que receba um número e retorne esse número multiplicado por um fator. 
// Se nenhum fator for passado, a função deve retornar o número multiplicado por 1.

const assert = require('assert');

assert.strictEqual(multiply(8), 8);
assert.strictEqual(multiply(8, 2), 16);
assert.strictEqual(multiply(8, 3), 24);
assert.strictEqual(multiply(8, -1), -8);

// Sem default params

const multiply = (number, factor) => {
    factor = factor || 1;
    return number * factor;
};

// Com default params

const multiply = (number, factor = 1) => {
    return number * factor;
};

// One line Refactoring 

const multiply = (number, factor = 1) => number * factor;
