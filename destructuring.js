// ES6 - Features -> Destructuring (Object / Array e Default)

// É o processo de atribuição de dados de objetos iteráveis em variáveis distintas. 

// Em outras palavras, declaramos uma série de variáveis, 
// organizadas por nome da chave ou ordem(índice) 
// e atribuímos os respectivos dados vindos do objeto ou array. Por exemplo:

const personDataObject = {
    name: 'Caciques',
    age: 23,
    profession: 'Software Developer',
    gostaDeComer: {
        doces: {
            brigadeiro: 'branco'
        }
    }
}

const {
    name,
    age,
    gostaDeComer
} = personDataObject

const { doces: { brigadeiro: tipoDeBrigadeiro = 'branco' } } = gostaDeComer

const arrayWithTwoElements = ['One Hash', 'Other Hash']

const [firstElement, secondElement] = arrayWithTwoElements;

// // Principais usos de destructuring (Object / Array):

// // Manipulação de informações de uma forma mais simples;

// // Organização e melhor interpretação do código;

// // Desmembramos o objeto/array em variáveis mais fáceis de serem trabalhadas.

// // No caso da default destructuring, atribuímos valores àquela chave ou
// // índice do objeto iterável que não possuem valor atribuído. Por exemplo:

// const { nome, idade, name = 'Não é mais Caciques' } = personDataObject;

// Principais usos de default destructuring:

// Atribuir um valor padrão a alguma chave / índice que porventura seja undefined.

// --------------------- Problema --------------------------- // 
// Quero extrair o nome e o local de nascimento do objeto e montar uma frase
// dizendo de onde essa pessoa vem

const assert = require('assert');

const richestDuckInTheWorld = {
    name: 'Scrooge McDuck',
    birthplace: 'Glasgow, Scotland',
    city: 'Duckburg',
    jobs: ['Shoe shiner', 'Sailor', 'Cowboy', 'Miner', 'Banker', 'Entrepreneur']
};

// Sem object Destructuring

assert.strictEqual(
    `${richestDuckInTheWorld.name} from ${richestDuckInTheWorld.birthplace}`,
    'Scrooge McDuck from Glasgow, Scotland'
);


// Com object Destructuring

const { name, birthplace, jobs } = richestDuckInTheWorld;

assert.strictEqual(
    `${name} from ${birthplace}`,
    'Scrooge McDuck from Glasgow, Scotland'
);

// E se quisermos acessar as 3 primeiras profissoes dele ?

const [firstJob, secondJob, thirdJob, ...remainingJobs] = jobs;

assert.strictEqual(
    `Started working as ${firstJob}, ${secondJob} and ${thirdJob}`,
    'Started working as Shoe shiner, Sailor and Cowboy'
);