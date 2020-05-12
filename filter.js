// Higher Order Functions = .filter()

// O filter permite que a gente remova do array elementos que não passem em algum critério. 
// Ou seja, ele retorna um novo array somente com os elementos em que a chamada da função retornou true.

// É muito útil quando queremos selecionar elementos de um array grande baseado em algum filtro que queremos.

// Exemplo 1
// Como nos exemplos anteriores, vamos fazer com for para poder comparar depois com o método:

const numbers = [1, 2, 3, 4, 5]

// With for Loop

const filterOddWithFor = array => {
    const oddNumbers = [];

    for (let index = 0; index < array.length; index++) {
        if (array[index] % 2 !== 0) {
            oddNumbers.push(array[index])
        }
    }

    return oddNumbers;
}

console.log('filterOddWithFor:', filterOddWithFor(numbers));

// With the beauty of HoF 
// The new cool awesome way with filter

const cyrrilinNumbers = [1, 2, 3, 4, 5]
// const cyrrilinNumbers = [[1, 2], [3, 4], [5]]

const filterOdd = array => array.filter(cyrrilin => cyrrilin % 2 !== 0)

console.log('filterOdd:', filterOdd(numbers));


// Agora, temos um array de objetos. 
// Cada um tem os dados de uma pessoa que é ou não uma motorista. 
// Queremos criar uma array com todas as pessoas que não são motoristas.

const users = [
    { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
    { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
    { firstName: 'Bart', lastName: 'Simpson', isDriver: false },
    { firstName: 'Lisa', lastName: 'Simpson', isDriver: false },
    { firstName: 'Maggie', lastName: 'Simpson', isDriver: false }
]

// Using the For the old way

const filterNoDriverWithFor = array => {
    const noDrivers = [];

    for (let index = 0; index < array.length; index++) {
        // array[index] { firstName: 'Homer', lastName: 'Simpson', isDriver: true }
        if (!array[index].isDriver) { // Esbelto
            noDrivers.push(array[index])
        }
    }

    return noDrivers
}

console.log('filterNoDriverWithFor:', filterNoDriverWithFor(users));

// Using filter

const filterNoDriver = array => array.filter(element => !element.isDriver)

console.log('filterNoDriver:', filterNoDriver(users));
console.log('original:', users);