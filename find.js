// Higher Order Functions = .find()

// A função find é quase igual à filter, com uma única diferença: 
// ao invés de retornar todos os elementos que satisfazem a condição dada como parâmetro, 
// ela retorna o primeiro elemento que se enquadra.

// fast resumex
// filter -> retorna todos que bate com a condicao
// find -> retorna o primeiro que bate com a condicao

const users = [
    { firstName: 'Homer', lastName: 'Simpson', isDriver: true }, // 0
    { firstName: 'Marge', lastName: 'Simpson', isDriver: true }, // 1
    { firstName: 'Bart', lastName: 'Simpson', isDriver: false }, // 2
    { firstName: 'Lisa', lastName: 'Simpson', isDriver: false }, // 3
    { firstName: 'Maggie', lastName: 'Simpson', isDriver: false }, // 4
];

// Simulando um find com for

const findANonDriverWithFor = array => {
    for (let i = 0; i < array.length; i++) {
        if(array[i].isDriver === false){
            return array[i];
        }
    }
}

console.log('findANonDriverWithFor:', findANonDriverWithFor(users));


// Escrevendo a mesma funcao so que com o filter

const findANonDriver = array => array.find(element => element.isDriver === false);


console.log('findANonDriver:', findANonDriver(users));
