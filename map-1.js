// Higher Order Functions = .map()

// O map funciona um pouco diferente das outras HOFs que vocês viram até aqui. 
// Ele retorna um novo array após aplicar a função passada por parâmetro a todos os elementos do array original.
// O map é utilizado para aplicar algum tipo de transformação a um array.

// Exemplo

// Vamos imaginar que temos um grupo de pessoas com alguns atributos:

const users = [
    { firstName: 'Homer', lastName: 'Simpson', isDriver: true }, // Elemento {firstname, lastname, isDriver} ele está na posicao de index 0
    { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
    { firstName: 'Bart', lastName: 'Simpson', isDriver: false },
    { firstName: 'Lisa', lastName: 'Simpson', isDriver: false },
    { firstName: 'Maggie', lastName: 'Simpson', isDriver: false },
];

// Nós queremos enviar uma mensagem pra todos eles, mas só precisamos do primeiro nome para uma mensagem mais personalizada 
// Podemos usar o map para retornar um array apenas com os primeiros nomes de cada pessoa.

// Para entender como o map funciona e como ele nos ajuda, primeivo vamos implementá-lo com um for

const firstNames = []
for (let i = 0; i < users.length; i++) {
    firstNames.push(users[i].firstName)
}

// Estando mais claro o que o map faz, vamos ver como ele simplifica isso:

const newUsers = users.map(user => user.firstName)

// elemento -> item em si
// index / i -> posicao dele no array

console.log('users:', users);
console.log('firstNames:', firstNames);
console.log('newUsers:', newUsers);