// Higher Order Functions = .reduce()

// Exemplo

// Usando o reduce, podemos combinar todas essas palavras em uma única frase
// Geralmente vocês vão usar o reduce com dois argumentos: o acumulator e elemento atual. 
// O acumulador, como vimos no exemplo anterior, armazena a combinação dos resultados anteriores da execução da função do reduce

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const epicPhrase = epic.reduce((accumulator, currentValue) => `${accumulator} ${currentValue}`)

// console.log(epicPhrase)

const starWars = epic.reduce((acumulator, currentValue, index) => {
    console.log(`elemento[${index}] || acumulator: ${acumulator} || currentValue: ${currentValue}`);

    return `${acumulator} ${currentValue}`;
});

console.log('starWars:', starWars);


