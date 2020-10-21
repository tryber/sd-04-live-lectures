// Higher Order Functions = .sort()

// A sort ordena os elementos do array em ordem alfabética. 
// Lembre-se! Quando ela não recebe strings ela ordena o elemento de acordo com sua posição no código Unicode
const scores = [1, 21, 2, 10];

scores.sort() // [1, 10, 2, 21]

console.log('sorted scores:', scores);


const fruits = ['Cherries', 'ápples', 'bananas']


// ordem alfabetica
// Letra maiuscula primeiro
// minusculo segundo
// acentos terceiro

fruits.sort() // ['apples', 'bananas', 'cherries']

console.log('Sorted fruits', fruits)

// Para ordenar números de forma previsível você deve passar para sort uma função que recebe dois parâmetros
// Ela compara todos os elementos do array, dois a dois, para posicioná-los. 
// Isso significa que os dois parâmetros da função passada são dois elementos quaisquer do array a função funciona assim:
//  - para dois parâmetros a e b
//  - se ela retorna um número negativo, a é menor que b. 
//  - Caso contrário, a é maior que b. 
//  - Caso 0 seja retornado, as duas são iguais

const numbers = [1, 21, 2, 10]

const comparar = (a, b) => { // para dois parâmetros a e b
    // A -> Direita
    // B -> Esquerda
    if (a < b) { // se ela retorna um número negativo, a é menor que b.
        return -1;
    } else if (a > b) { // Caso contrário, a é maior que b. 
        return 1;
    }
    return 0; // Caso 0 seja retornado, as duas são iguais
}

numbers.sort(comparar)

console.log('sorted numbers', numbers)

// Versao simplificada

const numbers2 = [1, 21, 2, 10]

numbers2.sort((a, b) => a - b)

console.log('sorted scores:', numbers2);