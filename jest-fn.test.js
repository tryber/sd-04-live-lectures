// Vamos ver como funciona o jest.fn()

// Utilizamos essa função quando temos 
// que testar uma função que retorna um valor que não pode ser previsto.

// Um exemplo seria uma função que retorna um valor de 1 a 20 aleatoriamente,
// funcionando como se fosse um dado com 20 lados.

// Looooogo se uma função te retorna um valor aleatório, como testar? 

function randomDice(sides) {
    const rng = Math.random()
    return Math.round(rng * sides)
}

// test('testing function call', () => {
//     randomDice();
//     expect(randomDice).toHaveBeenCalled();
//     expect(randomDice()).toBe('O que escrever de resultado?');
// });

// Esse teste acima, à primeira vista, deveria passar, mas, 
// apesar de não passar, nos dá uma ótima pista do que temos que fazer. 

// *** Stack Traces da Spoileeeers sempre ***
// Ele diz que precisamos fazer uma função mock ou spy.

// E é aí onde entra o jest.fn(). Com ele temos acesso 
// a alguns matchers do Jest, como o toHaveBeenCalled.

// Nós tentamos utilizá-lo acima, mas só pode ser usado em funções mockadas.

// Uma outra função necessária aqui é a mockReturnValue, 
// que vai nos permitir dizer qual o valor que vamos aceitar 
// como a resposta da função mock. 

// Quando associamos uma função nossa ao jest.fn(), 
// estamos substituindo o comportamento dela pelo comportamento 
// definido pelo jest.fn(). 

// test('testing function call', () => {
//     randomDice = jest.fn().mockReturnValue({cacique: 'ta com fome'}); // retorno novo que colocamos pra funcao

//     expect(randomDice()).toEqual({cacique: 'ta com fome'}); // Comparando o valor
//     expect(randomDice).toHaveBeenCalled(); // Verifico se a funcao foi chamada no teste
//     expect(randomDice).toHaveBeenCalledTimes(1); // Verifico quantas vezes ela foi chamada no teste
// });

// Vamos agora imaginar que queremos passar diferentes 
// retornos para diferentes chamadas da função. 

// Para esse caso, temos a função mockReturnValueOnce, 
// que nos permite simular que nossa função retornará 
// determinado valor uma única vez.

// Bora testar ?
test('testing function call', () => {
    randomDice = jest
        .fn()// Ordem de retorno do mock
        .mockReturnValueOnce(8)  // retorna 8 apenas uma vez
        .mockReturnValueOnce(6)
        .mockReturnValue(10); // depois do ultimo mock 10 quantas vezes quiser

    expect(randomDice()).toBe(8);
    expect(randomDice).toHaveBeenCalled();
    expect(randomDice).toHaveBeenCalledTimes(1);

    expect(randomDice()).toBe(6);
    expect(randomDice).toHaveBeenCalled();
    expect(randomDice).toHaveBeenCalledTimes(2);

    expect(randomDice()).toBe(10);
    expect(randomDice).toHaveBeenCalled();
    expect(randomDice).toHaveBeenCalledTimes(3);
});

