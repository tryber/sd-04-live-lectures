// Higher Order Functions = .reduce()

// O reduce é uma função muito poderosa, que permite que a gente combine 
// todo o resultado da aplicação da função passada como parâmetro nos elementos do array em um único resultado.

// Exemplo
// Vamos fazer um m somatório para entender o conceito do reduce. 

// Primeiro vamos fazer com o for:

const numbers = [2, 3, 4, 6, 8, 12, 24];

let accumulatorFor = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    // a ideia aqui é fazer um paralelo com o reduce, por isso não usei `+=`
    accumulatorFor = accumulatorFor + numbers[i]
    // console.log(accumulatorFor)
}

// Agora vamos ver o que temos nos parâmetros acumulator e currentValue no começo de cada iteração:

// 1a. iteração - acumulator === numbers[0] === 2 e currentValue === numbers[1] que tem valor igual a 3:

// 2a. iteração - acumulator === 5 e currentValue === numbers[2] que tem valor igual a 4:

// 3a. iteração - acumulator === 9 e currentValue === numbers[3] que tem valor igual a 6:

// 4a. iteração - acumulator === 15 e currentValue === numbers[4] que tem valor igual a 8:

// 5a. iteração - acumulator === 23 e currentValue === numbers[5] que tem valor igual a 12:

// 6a. iteração - acumulator === 35 e currentValue === numbers[6] que tem valor igual a 24:

// Aqui chegamos ao útlimo item, com o resultado do reduce de 59

// React -> Redux -> reduce

// Agora com o reduce esbelto

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, {});

console.log(sum)
