// ES6 - Features -> Parâmetro Rest


// --------------------- Problema --------------------------- //
// Criar uma função que obtenha seis dados de data-hora (ano, mes, dia, hora, minuto, segundo)
// e retorne apenas os dados de ano mes e dia formatados no padrao dd/mm/YYYY dia/mes/ano
const assert = require('assert');

// Sem o uso do rest Operator e com arrow function

const formatDate = (year, month, day, hour, minute, second) => `${day}/${month}/${year}` // ONE LINE

assert.strictEqual(formatDate('1981', '7', '31', '22', '47', '12'), '31/7/1981'); // dd/mm/YYYY

// Agora com rest operator e arrows function

const dateArray = ['1981', '7', '31', '22', '47', '12'];

const formatDateRest = (year, month, day, ...rest) => // rest sempre deve ser o ultimo parametro
    `${day}/${month}/${year}`;                       // rest de RESTO dos argumentos

console.log(formatDateRest(...dateArray))

// assert.strictEqual(formatDateRest('1981', '7'), '31/7/1981');
