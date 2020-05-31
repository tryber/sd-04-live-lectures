const fetch = require('node-fetch');
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJokeAsync = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  
  return data.joke;
};

module.exports = fetchJokeAsync;
