// Vamos ver como funciona o jest.mock()

// Permite mockar todas as funções de um arquivo inteiro que você importe

const libStats = require('./libStats');

// Se quiséssemos testar as 5 com jest.fn() daria um trabalhão enorme
// Então podemos criar um único test em que temos acesso às 5 funções. 

// Para isso utilizamos o jest.mock() !!

jest.mock('./libStats'); // Todo o arquivo esta mockado

test('testing function call, times called, parameters and returns', () => {
    libStats.healthPoints.mockImplementation((a) => a * 8);
    libStats.healthPoints(5);

    expect(libStats.healthPoints).toHaveBeenCalled();
    expect(libStats.healthPoints).toHaveBeenCalledTimes(1);
    expect(libStats.healthPoints).toHaveBeenCalledWith(5);
    expect(libStats.healthPoints(5)).toBe(40);
});

// A mockImplementation nos permite dar um passo além 
// do mockReturnValue e escrever uma lógica inteira para a 
// função, para casos em que precisamos testar algo com uma 
// implementação diferente.

test('testing function call, times called, parameters and returns', () => {
    libStats.dexterity.mockImplementation((a) => a * 2.4);
    libStats.dexterity(10);

    expect(libStats.dexterity).toHaveBeenCalled();
    expect(libStats.dexterity).toHaveBeenCalledTimes(1);
    expect(libStats.dexterity).toHaveBeenCalledWith(10);
    expect(libStats.dexterity(10)).toBe(24);
});