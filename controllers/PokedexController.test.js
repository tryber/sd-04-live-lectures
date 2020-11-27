const Pokemon = require('../models/Pokemon.js');
const pokedexController = require('../controllers/PokedexController.js');

describe('PokedexController', () => {
  describe('Get by Id', () => {
    test('Quando receber um id válido retorna o objeto', async () => {
      const mockData = {
        data: {
          id: 1,
          name: 'Bulbassaur',
          species: {
            name: 'bulbasaur',
            url: 'https://pokeapi.co/api/v2/pokemon-species/1/',
          }
        }
      };


      const getOneSpy = jest.spyOn(Pokemon, 'getById').mockResolvedValueOnce(mockData);
      
      const mockReq = {
        params: {
          id: 1
        }
      }
      
      const mockRes = { status: jest.fn(), json: jest.fn()};
      
      await pokedexController.getPokemonById(mockReq, mockRes);
      
      expect(getOneSpy).toHaveBeenCalledTimes(1);
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith(mockData);
      getOneSpy.mockRestore();
      
    });
    
    test('Quando passar um id que não existe deve retornar uma mensagem e status 404', async () => {
      const mockData = null;
      
      const getOneSpy = jest.spyOn(Pokemon, 'getById').mockResolvedValueOnce(mockData);
      
      const mockReq = { 
        params: {
          id: -1
        }
      }
      
      const mockRes = { status: jest.fn(), json: jest.fn() };
      
      await pokedexController.getPokemonById(mockReq, mockRes);
      
      expect(getOneSpy).toHaveBeenCalledTimes(1);
      expect(mockRes.status).toHaveBeenCalledWith(404);
      expect(mockRes.json).toHaveBeenCalledWith({
        message: 'Pokemon não encontrado'
      });
      
      getOneSpy.mockRestore();
    });
    
    test('Quando algo der errado, deve retornar o erro 500 e uma mensagem de erro', async () => {
      const getOneSpy = jest.spyOn(Pokemon, 'getById').mockRejectedValueOnce(new Error());
      
      const mockReq = {
        params: {
          id: -1,
        },
      };
      
      const mockRes = { status: jest.fn(), json: jest.fn() };
      
      // Act
      await pokedexController.getPokemonById(mockReq, mockRes);
      
      // Assert
      expect(getOneSpy).toHaveBeenCalledTimes(1);
      expect(mockRes.status).toHaveBeenCalledWith(500);
      expect(mockRes.json).toHaveBeenCalledWith({ message: 'Algo deu errado' });
      getOneSpy.mockRestore();
    });
    
    
  });
  
})