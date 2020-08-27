// Higher Order Functions = .reduce()

// Exemplo
// Imagine que temos um array de pessoas

const players = [
    { fullName: 'Adriano Imperador', email: 'didico@futebol.br' },
    { fullName: 'Ronaldinho Gaúcho', email: 'bruxo@futebol.br' },
    { fullName: 'Ronaldo Fenômeno', email: 'cortedocascao@futebol.br' },
    { fullName: 'Túlio Maravilha', email: 'deputado@futebol.br' },
];

// Mudar a estrutura dos nossos objetos de pessoas para que possamos usar o nome delas como chave e o email como valor. 
// Geralmente pra fazer isso iríamos gastar loops, inicializar variáveis auxiliares fora dele e por aí vai
// Esperado: {chave[nomedapessoa]: valor[email]}

const newPlayers = players.reduce((accumulator, currentValue, index) => {
    console.log(`accumulator[${index}]: `, accumulator);
    console.log(`currentValue[${index}]: `,currentValue);

    // accumulator é um objeto
    // objeto[nome_da_chave] = valor
    // { 'Adriano Imperador': 'didico@futebol.br'}
    accumulator[currentValue.fullName] = currentValue.email;

    return accumulator;
}, {}) // {} no caso de objetos, [] no caso de arrays, números ou strings).

// Segundo parametro da nossa HoF reduce, indica o valor inicial do acumulador
// Como passamos {} isso representa que nossa acumulador inicia como um objeto vazio
// [] indicaria que comeca como um array vazio
// 10 indicaria que comeca como um inteiro de valor 10

// Exemplo com Map
let objeto = {}
players.map(elemento => {
    // { fullName: 'Adriano Imperador', email: 'didico@futebol.br' },
    objeto[elemento.fullName] = elemento.email;
})

players.map((element, index) => { // Tenho acesso ao elemento(dado) e a sua posicao(index)

})

players.reduce((accumulator, currentvalue, index) => { // acumulador || currentValue elemento na interacao atual e sua posicao(index)

})

console.log('players:', players); // Antes do reduce o array de fora
console.log('newPlayers:', newPlayers); // depois do reduce o novo array