const axios = require('axios');
const Pokemon = require('./Pokemon');

const BASE_URL = 'https://pokeapi.co/api/v2';

jest.mock('axios');

describe('Pokemon Model', () => {
  describe('getByID', () => {
    test('passando um id válido retorna um objeto', async () => {
      // Arranjo
      const mockData = {
        data: {
          id: 1,
          name: 'Bulbassaur',
          species: {
            name: 'bulbasaur',
            url: 'https://pokeapi.co/api/v2/pokemon-species/1/',
          }
        }
      }

      axios.get.mockResolvedValueOnce(mockData);

      // ação
      const res = await Pokemon.getById(1);

      // resultado

      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/pokemon/1`); // falso positivo
      expect(res).toStrictEqual(mockData.data);
    });

    test('passando um id inválido retorna uma mensagem de erro', async () => {
      const mockData = null;
      axios.get.mockResolvedValueOnce(mockData);

      const res = await Pokemon.getById(-1);

      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/pokemon/1`);
      expect(res).toStrictEqual({ message: 'Pokemon não encontrado'});
    });
  });
})