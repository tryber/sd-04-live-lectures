
// --------------- Problema ---------------
// Vamos criar uma função que faz o processo inverso:
// Dado uma string representando um numeral romano, 
// convertemos para um inteiro. Por se tratar de problemas 
// muito semelhantes,já sabemos quais testes precisaremos fazer: 
// os testes opostos aos da nossa primeira função.
// Por isso, vamos escrever todos os testes primeiro,  
// e depois faremos a implementação da função. 

// Objeto legenda de conversao
const romanToIntegerMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

// Ideias
// - Dividir a string representando o numeral romano em seus caracteres 
// individuais, ou seja, um array de caracteres; III -> [I ,I , I] -> 1 * 3
// - Converter cada caractere para o valor que este representa;
// - Somar estes valores e retornar o resultado

// romanToIntegerMap['I'] -> 1
// romanToIntegerMap['V'] -> 5

const valueOf = romanSymbol => romanToIntegerMap[romanSymbol]

const convertToIntegerFor = (romanNum) => {
  let total = 0;

  for (let i = 0; i < romanNum.length; i++) {
    // console.log(romanNum.charAt(i))
    console.log(romanNum[i])
    // 'VII' -> 7
    // ['V', 'I', 'I']
      total += valueOf(romanNum.charAt(i))
  }

  return total;
}

// Refatorar usando ForEach

const convertToIntegerForEach = (romanNum => {
  let total = 0;

  romanNum.split('').forEach((num) => total += valueOf(num))

  return total;
})

// Refatorar usando reduce

const convertToInteger = romanNum =>
  romanNum.split('').reduce(
    (accumulator, symbol, index, copiaDoArraySymbols) => { // Symbols = romamNum
      const currentValue = valueOf(symbol) // Nosso simbolo convertido -> I
      const nextValue = valueOf(copiaDoArraySymbols[index + 1]) // Me Retorna o simbolo na proxima casa convertido -> V

      if (currentValue < nextValue) return accumulator - currentValue
      return accumulator + currentValue;
    }, 0
  )

// Bug do milenio em nossa logica

// Nossa solução não funciona porque, na notação moderna, 
// um número menor à esquerda de um número maior significa 
// que o menor deve ser subtraído do maior. Vamos reescrever 
// nossa solução para levar esses casos em consideração.

// Agora, para cada símbolo, verificamos o próximo símbolo na 
// sequência:

// - Se o valor inteiro do símbolo atual for maior que ou 
// igual ao valor inteiro do próximo símbolo, somamos o valor
// do símbolo atual ao total e passamos para o próximo símbolo.
// Exemplo -> 'XX' 10 + 10 -> 20
// Exemplo -> 'XV' 10 + 5 -> 15

// - Caso contrário, subtraímos o valor do símbolo atual do 
// próximo símbolo, adicionamos ao total e passamos para o 
// símbolo a frente do atual e do próximo, que já foram analisados.
// Exempl -> 'IV' 5 - 1

// - Além disso, também devemos verificar se há um próximo, 
// pois o símbolo analisados pode já ser o último. Nesse caso, 
// devemos simplesmente somar seu valor ao total.


module.exports = convertToInteger;