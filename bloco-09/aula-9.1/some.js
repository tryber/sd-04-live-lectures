// Higher Order Functions = .some()
// O some recebe uma função que retorna true ou false. 
// Ele testa cada um dos elementos do array, checando se algum dos elementos satisfaz a condição e,
// se algum dos elementos retornar true, a função toda retorna true

// Exemplo
// Imagine que temos um grupo de pessoas com as idades abaixo que se registraram para fazer um tour pela nossa página

const ages = [23, 32, 17, 16, 34];
const moreAges = [23, 32, 34]; // igual ao anterior, mas sem idades inferiores à 18 anos

// Queremos mostrar um ad (propaganda) com uma foto de uma cerveja, 
// mas não queremos mostrá-la para nenhum das pessoas se algum dos membros do grupo for menor de 18 anos

const lessThen18 = age => age < 18 // Se idade for menor do que 18 retorna true, caso contrario retorna false
const anyLessThen18 = array => array.some(lessThen18)

console.log('Menor de 18? (17)', lessThen18(17));
console.log('Menor de 18? (32)', lessThen18(32));
console.log('Alguma pessoa menor de 18? (ages)', anyLessThen18(ages));
console.log('Alguma pessoa menor de 18? (moreAges)', anyLessThen18(moreAges));


// The old fashion way with For loops

const anyLessThen18WithFor = array => {

    for (let index = 0; index < array.length; index++) {
        if(array[index] < 18) return true;
    }

    return false;
}

console.log('[FOR] Alguma pessoa menor de 18? (ages)', anyLessThen18WithFor(ages));
console.log('[FOR] Alguma pessoa menor de 18? (moreAges)', anyLessThen18WithFor(moreAges));

// some: Retorna false para um array vazio.
// Pois ela retorna true somente se a comparação retornar true para pelo menos um elemento do array. 
// Caso contrário, retorna false