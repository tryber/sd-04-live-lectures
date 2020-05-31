// Vamos testar promises

// Para elas, também, há uma forma correta de se testar. 
// Novamente vamos demonstrar um caso que gera falso positivo 
// e depois refatorá-lo. Um ponto de atenção aqui é que, para não 
// precisar usar uma API externa, temos um array que fingirá ser uma.
// Conceito (Chamado de mocks veremos na proxima aula)

let starterPokemons = [
    { name: 'Bulbasaur', type: 'Grass/Poison', speed: 45 },
    { name: 'Charmander', type: 'Fire', speed: 65 },
    { name: 'Squirtle', type: 'Water', speed: 43 },
    { name: 'Pikachu', type: 'Electric', speed: 90 },
];

const filterBySpeed = minimumSpeed => new Promise((resolve, reject) => {
    setTimeout(() => {
        const bySpeed = starterPokemons
            .filter(pokemons => pokemons.speed >= minimumSpeed)
            .map(pokemon => pokemon.name);

        if (bySpeed.length > 0) return resolve(bySpeed);
        return reject('No pokémons found');

    }, 1500);
});

// O que nossa função filterBySpeed faz ***BabySteps***:

// 1. Temos um array chamado starterPokemons que contém vários 
// objetos com informações sobre pokémons: seu nome, tipo e velocidade.

// 2. Temos também uma função chamada filterBySpeed, que recebe um parâmetro. 
// Dentro dela define-se uma Promise, e dela está sendo feita uma filtragem 
// no array starterPokemons, filtrando pela velocidade dos pokémons
// e utilizando o parâmetro passado para a função filterBySpeed 
// para decidir quais os escolhidos.

// 3. O resultado dessa filtragem, que seria um array com um ou mais objetos, 
// estão passando por uma segunda HoF, que cria um novo array apenas com a propriedade 
// nome dos objetos filtrados. Esse array é atribuído à variável bySpeed.

// 4. Depois a função resolve a Promise. Se o array bySpeed tiver sido populado, 
// isso será passado para a função resolve da Promise. Do contrário a Promise é 
// rejeitada e a resposta 'No pokémons found' será passada à função reject.

// Bora escrever um teste ?

// test('Pokemons acima de velocidade 50', () => {
//     filterBySpeed(50).then((data) => {
//         expect(data).toStrictEqual(['Bulbasaur', 'Squirtle'])
//     })
// })

// Para testar se o teste realmente está rodando, 
// vamos alterar os valores para resultados conferir que estamos
// estar errados e rodar novamente. 

// ***Super dica do dia*** para vocês fugirem de falsos positivos: "testem os testes" 
// vulgo rodando-os com valores que sabem estar errados

// Pegamos um falso-positivo.

// Temos à nossa disposição uma outra forma de ver se 
// testes de códigos assíncronos estão
// executando conforme queremos. 

// Vamos conhecer a função expect.assertions(X), onde o X 
// é o número de assertions dentro do teste

// Dentro do teste, uma promise deve ser sempre retornada, pelo 
// motivo de que se você não retorna a promise, o teste termina 
// antes que a promise seja resolvida e por causa disso, a assertion 
// não é lida e o teste fica dando falso positivo. 

// test('Pokemons acima de velocidade 50', () => {
//     expect.assertions(1);
//     return filterBySpeed(50).then((data) => {
//         expect(data).toStrictEqual(['Charmander', 'Pikachu'])
//     })
// })

// Testar a parte do reject de uma Promise é bem parecido com a parte resolve,  
// a única diferença é que ao invés de utilizar o then, utilizamos o catch. 
// Em nosso caso, como o que vamos retornar não é mais um array, mas sim uma 
// string, deixaremos de utilizar o matcher toStrictEqual e passaremos a utilizar o toBe

// test('Pokémons above 99 speed base', () => {
//     expect.assertions(1);
//     return filterBySpeed(99).catch((data) => {
//         expect(data).toBe('No pokémons found');
//     });
// });

// O beforeEach e o afterEach são executados antes (no caso do beforeEach) 
// ou depois (no caso do afterEach) de cada teste rodar e podem nos ajudar 
// a zerar valores ou resetar variáveis

// São usados para evitar efeitos colaterais

// Exemplo efeito colateral
test('Pokémons above 50 speed base', () => {
    starterPokemons.push({ name: 'Charizard', type: 'Fire/Flying', speed: 100 })
    return filterBySpeed(50).then((data) => {
        expect(data).toStrictEqual(['Charmander', 'Pikachu', 'Charizard']);
    });
});

test('Pokémons above 99 speed base', () => {
    expect.assertions(1);
    return filterBySpeed(99).catch((data) => {
        expect(data).toBe('No pokémons found');
    });
});

// Bora usar o beforeEach() ?

beforeEach(() => { // Oque vai ser executado antes de cada teste
    starterPokemons = [
        { name: 'Bulbasaur', type: 'Grass/Poison', speed: 45 },
        { name: 'Charmander', type: 'Fire', speed: 65 },
        { name: 'Squirtle', type: 'Water', speed: 43 },
        { name: 'Pikachu', type: 'Electric', speed: 90 },
      ]
})

// O beforeEach está atribuindo os valores ao array todas as vezes antes dos testes 
// rodarem. Então, no primeiro teste, o Charizard é incluído depois e o teste roda 
// normalmente. 

// Já no segundo teste, o array é reatribuído no beforeEach aos seus
// valores padrão e, por conta disso, ele roda sem problemas.
