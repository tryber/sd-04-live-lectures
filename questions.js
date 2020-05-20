// Perguntas

// 1-
// O que é um código que é executado de modo assíncrono? 
// Qual é a diferença disso para um código que é executado de modo síncrono?

// Resposta
// Código assíncrono é aquele que funciona independentemente do resto do processo, ao 
// contrário do código síncrono que roda seguindo a ordem natural do processo (sequencialmente).

// Exemplo
// B()
// C()


// ------------------------------------------------------------------------------------------ //

// 2-
// Quando você tem que enfileirar várias callbacks, que problema surge?

// Resposta
// Vários callbacks enfileirados fazem com que o código seja dependente de cada passo da cadeia. 
// O código adquire uma maior propensão de quebra, além de dificultar sua leitura, interpretação e,
// consequentemente, sua manutenção.

// Exemplo
// Famosos CallBack Hells


// ------------------------------------------------------------------------------------------ //

// 3-
// Porque as Promises são uma forma de se resolver esse problema?

// Resposta
// As Promises organizam a forma de se chamar os callbacks, uma vez que retira-se a 
// necessidade de aninhamento das funções. Além disso ela nos permite adaptar o código para 
// manipulação de erros e retornos de sucesso, uma vez que possibilita a separação de procedimentos 
// em caso de sucesso ou de falha.

// ------------------------------------------------------------------------------------------ //

// 4-
// Quando você vai se comunicar com uma API tal comunicação deve ser síncrona ou assíncrona? 
// Lembre-se que o serviço ao qual você está se conectando pode demorar muito ou pouco 
// para dar retorno, pode estar fora do ar, etc.

// Comunicações com API's devem ser assíncronas, uma vez que o serviço está sucetível a uma 
// diversidade de falhas. Tais falhas, em um código síncrono, podem prejudicar e em algumas 
// situações comprometer seu funcionamento como um todo.

// ------------------------------------------------------------------------------------------ //

// 5-
// A partir da resposta anterior, o que é fetch() e pra que ele serve?

// fetch() nada mais é que a função base para efetuar requisições http utilizando o JavaScript. 
// Serve para integrar nossas aplicações com outras API's.

fetch('google.copm')
    .then()

fetchizinho('gooogle')
    .then(data => { })
    .catch(error => { })