const axios = require("axios");

const getAllCharacters = async (list, next) => {
  const url = "https://swapi-trybe.herokuapp.com/api/people/?format=json";

  const results = list || [];

  const link = next || url;

  const { data } = await axios.get(link);

  const newResults = [...results, ...data.results];

  console.log(newResults.length);

  return data.next ? getAllCharacters(newResults, data.next) : newResults;
};

const start = async () => {
  const characters = await getAllCharacters();

  console.log(
    characters.map((character, idx) => `${idx + 1} - ${character.name}`)
  );
};

start();
