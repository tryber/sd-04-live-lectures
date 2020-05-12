// ES6 - Features -> Spread Operator

// Principais usos de Spread Operators:
// Concatenar/copiar arrays
// Fundir objetos
// Passar arrays como parâmetros

// --------------------- Problema --------------------------- // 
// Queremos unir dois arrays de duas formas diferentes com spread e sem spread operator

const assert = require('assert');

const horrorBooks = ['It', 'The Shining', 'Interestelar'];
const scifiBooks = ['I, Robot', 'Caves of Steel', 'The End of Eternity', 'Interestelar'];


// Sem spread com loops

let awesomeBooks = [];

for (let i = 0; i < horrorBooks.length; i++) { // Estou percorrendo o array de books horror
    awesomeBooks.push(horrorBooks[i])
}

for (let i = 0; i < scifiBooks.length; i++) { // Estou percorrendo o array de books scifi
    awesomeBooks.push(scifiBooks[i])
}

// assert.deepEqual(
//     awesomeBooks,
//     ['It', 'The Shining', 'I, Robot', 'Caves of Steel', 'The End of Eternity', 'Interestelar']
//   );


// Com spread operator

const awesomeBooksSpread = [...horrorBooks, ...scifiBooks]
// const nosso result -> ['It', 'The Shining', 'I, Robot', 'Caves of Steel', 'The End of Eternity']

console.log(awesomeBooksSpread)
console.log(Object.assign(horrorBooks, scifiBooks))
console.log(horrorBooks.concat(scifiBooks))

// assert.deepEqual(
//     awesomeBooksSpread,
//     ['It', 'The Shining', 'I, Robot', 'Caves of Steel', 'The End of Eternity', 'Interestelar']
// )