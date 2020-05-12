// Higher Order Functions = .every()

// A função every também funciona recebendo uma função que retorna true ou false.
// Se, e somente se, todos os elementos do array retornarem true ao aplicar a função, a função toda retorna true.

// Exemplo
// Vamos continuar no mesmo exemplo, 
// mas ao invés de checar se alguma idade é menor que 18 anos, 
// queremos saber se todo mundo é maior de idade (maior de 18 anos).

const ages = [23, 32, 17, 16, 34];
const moreAges = [23, 32, 34]; // igual ao anterior, mas sem idades inferiores à 18 anos

const moreThan18 = age => age >= 18
const moreThan18WithEvery = ages => ages.every(moreThan18)
// const moreThan18WithEvery = ages => ages.every(age => moreThan18(age)) // how it works under the hood

console.log('Maior de 18? (17)', moreThan18(17));
console.log('Maior de 18? (32)', moreThan18(32));

console.log(
    'Todas as pessoas são maior de 18? (ages)',
    moreThan18WithEvery(ages)
)

console.log(
    'Todas as pessoas são maior de 18? (ages)',
    moreThan18WithEvery(moreAges)
)

// The old fashion way For Loop

const moreThan18WithFor = ages => {
    for (let index = 0; index < ages.length; index++) {
        if ((ages[index] >= 18) === false) return false;
        // if (!ages[index] >= 18) return false; // Menos verboso
    }

    return true;
}

console.log(
    '[FOR] Todas as pessoas são maior de 18? (ages)',
    moreThan18WithFor(ages)
);

console.log(
    '[FOR] Todas as pessoas são maior de 18? (ages)',
    moreThan18WithFor(moreAges)
);


// every: Retorna true para um array vazio. 
// Pois o every funciona como o qualificador "for all" em matemática, que diz que ocorre uma verdade quando todos os elementos tem uma certa propriedade. 
// Ou seja, se o conjunto está vazio todos os elementos satisfazem qualquer condição.

console.log(
    '[FOR] Todas as pessoas são maior de 18? (ages)',
    moreThan18WithFor([])
); 
