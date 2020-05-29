// ES6 - Features -> Abbreviation object literal

// Quando recebemos uma série de parâmetros não precisamos de reatribuir 
// cada um dos valores recebidos quando queremos manipulá-los. Por exemplo:

const [name, birthplace] = ['Vlad Dracula', 'Hungary'];

const vampireInfo = { name, birthplace }; 
// Retorno: { name: 'Vlad Dracula', birthplace: 'Hungary'}

// Principais usos de abbreviation object literals:

// Fazer a atribuição de valores às respectivas chaves de uma forma mais simples;

// Código mais DRY, de mais fácil interpretação. // Dont Repeat Yourself

// --------------------- Problema --------------------------- // 
// Crie uma função que atribue a um objeto valores passados por parâmetro!

const assert = require('assert');

// Com arrow functions e sem abbreviation object literal

const createSuperhero = (name, superheroName, nickname, powers) => {
    return {
        name: name,
        superheroName: superheroName,
        nickname: nickname,
        powers: powers
    }
}

// Com arrow functions e com abbreviation object literal
const createSuperhero = (name, superheroName, nickname, powers) => {
    return {
        name, // -> name: 'Valor de name'
        superheroName,
        nickname,
        powers
    }
}

// Refatorando tudo em apenas uma função com 
// - arrow functions
// - abbreviation object literal
// - rest parameter 
// - object destructuring

const createSuperhero = (...superheroData) => {
    let [name, superheroName, nickname, powers] = superheroData;
    return { name, superheroName, nickname, powers };
};


assert.deepEqual(
  createSuperhero('Bruce Wayne', 'Batman', 'The Caped Crusader', 'Determination and money'),
  {
    name: 'Bruce Wayne',
    superheroName: 'Batman',
    nickname: 'The Caped Crusader',
    powers: 'Determination and money'
  }
);