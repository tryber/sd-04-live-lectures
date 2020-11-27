const sum = require('./sum');

describe('Funçao soma', () => {
  test('somar dois números e calcular o resultado', () => {
    expect(sum(2,2)).toBe(4);
  }); 

  test('se algum dos parametros for string retorna uma mensagem de erro', () => {
    expect(sum('2',2)).toBe('Números inválidos');
  }); 
})