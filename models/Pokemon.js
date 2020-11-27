const axios = require('axios');

const BASE_URL = 'https://pokeapi.co/api/v2';

const getById = async (id) => {
  console.log(`${BASE_URL}/pokemon/${id}`)
;  const response = await axios.get(`${BASE_URL}/pokemon/${id}`);

  if (!response) return { message: 'Pokemon não encontrado'};

  return {
    id: response.data.id,
    name: response.data.name,
    species: response.data.species,
  };
}

module.exports = {
  getById
};