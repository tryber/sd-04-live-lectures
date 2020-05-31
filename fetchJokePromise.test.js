const fetch = require('node-fetch');
const fetchJokePromise = require('./fetchJokePromise');

jest.mock('node-fetch'); // Mockando Metodo que faz requisicao

it('should fetch jokes', () => {
    const data = {
        "id": "7h3oGtrOfxc",
        "joke": "Whiteboards ... are remarkable.",
        "status": 200
    };

    //     // fetch(API_URL)          // Promise que deu resolve ou seja deu sucesso
    //     //     .then((response) => response.json()) // retorna uma promise com uma funcao json
    //     //     .then((data) => data.joke) // Pega o retorno da funcao json, e retorna o valor dela

    //     // Retornando a promise resolvida ja mockada


    fetch.mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(data),
    }));

    return fetchJokePromise()
        .then((data) => expect(data).toEqual("Whiteboards ... are remarkable."));
});


// Aqui, vamos utilizar o jest.mock da mesma forma que utilizamos anteriormente,
// chamando o arquivo que vamos testar, porém não vamos mockar tudo, 
// apenas a implementação de uma das dependências do nosso código, que é a API fetch.

// Com o mockImplementation, vamos simular a implementação que 
// está rodando em nossa função, assim como fizemos no capítulo anterior e depois, 
// vamos retornar a promise fetchJokePromise, pois já aprendemos que para o 
// Jest funcionar corretamente, sempre devemos retornar a promise e colocar o matcher adequado.