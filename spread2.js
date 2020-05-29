// ES6 - Features -> Spread Operator

// --------------------- Problema --------------------------- // 
// Queremos transformar o conteudo de um array em argumentos para uma função
// Logo recebemos um array de coordenadas e queremos printar-las separadas

const assert = require('assert');

const point = [1.0, 2.2, -6.6]; // x y z
const otherPoint = [0.1, 3.5, -99.6];


// Sem spread operator

const printPointCoordinates = (x, y, z) => `Point coordinates are x = ${x}, y = ${y} and z = ${z}`;

assert.strictEqual(
    printPointCoordinates(point[0], point[1], point[2]),
    'Point coordinates are x = 1, y = 2.2 and z = -6.6'
);
assert.strictEqual(
    printPointCoordinates(otherPoint[0], otherPoint[1], otherPoint[2]),
    'Point coordinates are x = 0.1, y = 3.5 and z = -99.6'
);

// Com spread

const chavesDeAcesso = ['chave1', 'chave2']

const printPointCoordinatesSpread = (x, y, z) => 
    `As chaves de acesso sao ${x} - ${y} - ${z}`;


assert.strictEqual(
    printPointCoordinatesSpread(...chavesDeAcesso), 
    'As chaves de acesso sao r12r12 - 421412 - undefined'
);