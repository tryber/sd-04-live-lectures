// Vamos ver como funciona o jest.spyOn()

// E quando queremos testar o comportamento da função original? 

// Não queremos alterá-lo em nada, somente testá-lo com esses matchers. 
// Seríamos, então, obrigados a mockar a função assim mesmo? 
// Para isso existe o jest.spyOn.
// Ele, em resumo, "mocka" a função mas mantém seu comportamento original

const libStats = require('./libStats');

test('testing function call, times called, parameters and returns', () => {

    // Mais um poder do .spyOn, que é alterar uma implementação 
    // e depois voltar a utilizar a implementação padrão da função testada.

    //implementação original e sem mock
    expect(libStats.healthPoints(5)).toBe(60);

    //implementação mockada
    let spyHealthPoints = jest
        .spyOn(libStats, 'healthPoints')
        .mockImplementation((value, booster) => value + booster); // nao mais faz variavel * 8
    // agora faz A + B
    // Nesse exemplo, inclusive, a mock passou a utilizar mais 
    // parâmetros que a função original.

    expect(spyHealthPoints(8, 3)).toBe(11);
    expect(spyHealthPoints).toHaveBeenCalled();
    expect(spyHealthPoints).toHaveBeenCalledTimes(1);
    expect(spyHealthPoints).toHaveBeenCalledWith(8, 3);

    spyHealthPoints.mockRestore(); // retorna a funcao ao estado original

    // Agora vamos entender o exemplo: o mockImplementation 
    // já conhecemos - e aqui tem o mesmo papel - a novidade 
    // é o mockRestore, essa função simplesmente apaga toda a 
    // implementação mockada e permite que você volte a utilizar 
    // a função verdadeira ao invés de utilizar o mock. 

    spyHealthPoints = jest.spyOn(libStats, 'healthPoints');

    spyHealthPoints(5);

    expect(spyHealthPoints).toHaveBeenCalled();
    expect(spyHealthPoints).toHaveBeenCalledTimes(1);
    expect(spyHealthPoints).toHaveBeenCalledWith(5);
    expect(spyHealthPoints(5)).toBe(60);
    expect(spyHealthPoints).toHaveBeenCalledTimes(2);

    // Parece um pouco com o jest.fn() né ?

    // A diferença aqui, é que no .fn não estamos 
    // testando diretamente a função, mas sim passando 
    // os valores para poder utilizá-los e aí continuar a 
    // partir dos valores a testar seu código.

    // Utilizando o .spyOn, podemos testar realmente o
    // comportamento da função e verificar se o código 
    // da função realmente faz o que deveria fazer e essa 
    // diferença é o que vai te ajudar a escolher qual das 
    // duas ferramentas é a melhor para resolver a sua necessidade.

    const spyStrength = jest.spyOn(libStats, 'strength');

    spyStrength(5);

    expect(spyStrength).toHaveBeenCalled();
    expect(spyStrength).toHaveBeenCalledTimes(1);
    expect(spyStrength).toHaveBeenCalledWith(5);
    expect(spyStrength(5)).toBe(15);
    expect(spyStrength).toHaveBeenCalledTimes(2);
})