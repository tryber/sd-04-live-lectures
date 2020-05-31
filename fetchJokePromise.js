// Bora Mockar uma api ???

// Ponto importante de mockar API externa, 
// é que seus testes podem rodar mais rapidamente, 
// já que não há a necessidade de esperar o retorno 
// de uma API remota/externa. Outro ponto ainda mais importante, 
// é que fazendo o mock nossos testes deixam de sofrer com problemas da API.

const fetch = require('node-fetch');
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJokePromise = () => (
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => data.joke)

  //   const data = {
  //     "id": "7h3oGtrOfxc",
  //     "joke": "Whiteboards ... are remarkable.",
  //     "status": 200
  // };
);

module.exports = fetchJokePromise;


