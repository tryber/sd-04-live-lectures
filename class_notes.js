// JavaScript Assíncrono e Callbacks

// Oque é um código sincrono ?

// Quando uma função normal é executada sequencialmente. 
// Isto é, se tiveres duas funções A() e B() e as executares por essa ordem, 
// a função B() só irá ser chamada quando a função A() terminar a sua execução.

// Oque é um código assincrono ?

// Uma função assíncrona A(), pode estar chamada e 
// enquanto a operação é realizada podes executar outra função B() 
// ***(assíncrona ou não)***
// no contexto principal. Mais tarde, a função A() irá retornar 
// o seu valor quando terminar
// a operação e houver disponibilidade no contexto principal para ela

// Oque é uma callback ?

// Uma callback é uma função passada para outra função como argumento e que, 
// lá dentro, é invocada como parte de alguma lógica. Ou seja: 
// a função de fora pode 
// chamar a função passada como argumento quando for necessário. No nosso exemplo, 
// podemos passar a função 2 para a função 1. Após a função 2 terminar seu trabalho, 
// pode chamar a função 1, dessa forma garantindo a ordem de execução.


// API
// Significa Application Program Interface

// NodeJS
// -> NAO Ë UMA LINGUAGEM
// É uma Runtime Engine -> um motor que executa javascript


