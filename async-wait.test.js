// Vamos trabalhar com async/await.


// Uma forma mais simples de se lidar com promises, 
// já que escrevendo com async/await parece que estamos 
// escrevendo código síncrono, embora a palavra await deixe 
// claro que ali estamos trabalhando com uma função assíncrona.

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
        if (bySpeed.length > 0) resolve(bySpeed);
        return reject('No pokémons found');
    }, 1500);
});

// Old code usando promsises

beforeEach(() => {
    starterPokemons = [
        { name: 'Bulbasaur', type: 'Grass/Poison', speed: 45 },
        { name: 'Charmander', type: 'Fire', speed: 65 },
        { name: 'Squirtle', type: 'Water', speed: 43 },
        { name: 'Pikachu', type: 'Electric', speed: 90 },
    ]
});

test('Pokémons above 50 speed base', () => {
    starterPokemons.push({ name: 'Charizard', type: 'Fire/Flying', speed: 100 })
    expect.assertions(1);
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

// Para refatorar com async/await basta
// chamar a função que tem a promise, jogando o
// resultado dela para uma variável e utilizar o await da seguinte forma:

test('Pokémons above 50 speed base', async () => {
    starterPokemons.push({ name: 'Charizard', type: 'Fire/Flying', speed: 100 })
    const data = await filterBySpeed(50);
    expect.assertions(1);
    expect(data).toStrictEqual(['Charmander', 'Pikachu', 'Charizard']);
   
    // Exemplo com matcher
    // starterPokemons.push({ name: 'Charizard', type: 'Fire/Flying', speed: 100 })
    // expect.assertions(1);
    // await expect(filterBySpeed(50)).resolves.toStrictEqual(['Charmander', 'Pikachu', 'Charizard'])
});

// O await diz ao código que aquela função que está sendo chamada é uma promise 
// e que é necessário esperar seu retorno antes de continuar executando. Por isso, 
// movemos o valor do expect.assertions para depois da linha do await.

// Aqui, chamamos o teste e passamos o async como no outro teste. 
// Passamos o await no bloco try e ele, após a execução, cairá no bloco catch. 
// Passando ao segundo bloco testamos o fluxo de erro, dizendo o que esperamos 
// que venha descrito como retorno da função assíncrona.

test('Pokémons above 99 speed base', async () => {
    expect.assertions(1);
    try {
        await filterBySpeed(99);
    } catch (error) {
        expect(error).toBe('No pokémons found');
    }
})
