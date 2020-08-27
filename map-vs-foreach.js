// Mas o map e o forEach são bem parecidos cacique, 
// quando eu uso um e quando uso o outro?

// O ideal é pensar se você quer um array novo sem alterar o antigo ou não e se o novo array precisa de todos os elementos do array antigo ou não. 
// Se quiser um array novo, use map; se não necessitar de um novo array ou manter inalterado o array que está utilizando, utilize o forEach.

// Exemplos

// Caso em que geramos um array novo utilizando como base todos os elementos
// do array antigo 

const numeros = [1, 2, 3, 4, 5, 6];
console.log('Array de numeros multiplicados por 2: ', numeros.map(numero => numero * 2))
console.log('Array de numeros antigos: ', numeros)

// Casos em que geramos um novo array, apenas com alguns elementos do array antigo
const paresMenoresQueCinco = [];
numeros.forEach(numero => {
    if (numero < 5 && numero % 2 === 0) {
        paresMenoresQueCinco.push(numero)
    }
})

console.log('paresMenoresQueCinco:', paresMenoresQueCinco);

// Com o map
// a condicional não foi satisfeita, porem ainda são gerados elementos, mas eles são undefined
const paresMenoresQueCincoMap = numeros.map(numero => {
    if (numero < 5 && numero % 2 === 0) {
        return numero;
    }
})

console.log('pareMenoresQueCincoMap: ', paresMenoresQueCincoMap)

// O forEach é generalizado, podendo ser usado para várias finalidades porém...
// Nesse caso, por exemplo, poderíamos ter usado filter:
// SEMPRE BUSQUEM UMA HOF que atenda melhor sua necessidade

const paresMenoresQueCincoFilter = numeros.filter(numero => numero < 5 && numero % 2 === 0);

console.log('paresMenoresQueCincoFilter:', paresMenoresQueCincoFilter);
