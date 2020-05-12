// Higher Order Functions = .forEach()

// Vamos começar pelo `forEach`, porque ele funciona basicamente como `for` um for melhorado.
// Você passa um array para ele como parâmetro e ele pode chamar uma função para cada um dos elementos desse array. 

// Exemplo
// Vamos, para começar, pegar um array de números e retornar um novo array para cada elemento multiplicado por 3.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Using For

const multiplyByThreeWithFor = array => {
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] * 3)
    }

    return newArray
}

// Using ForEach

const multiplyByThree = array => {
    const newArray = [];

    array.forEach(elemento => newArray.push(elemento * 3))

    return newArray
}

console.log('Multiplicando com For: ', multiplyByThreeWithFor(numbers))
console.log('Multiplicando com ForEach: ', multiplyByThree(numbers))