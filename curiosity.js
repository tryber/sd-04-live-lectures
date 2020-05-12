// First Class Functions
// Funcoes podem ser armazenadas em variaveis, objetos e arrays

// store in a variable ->  
let fn = function doSomething() { }
//store in an object :
let obj = { doSomething: function () { } }
//store in an array :
let arr = []
arr.push(function doSomething() { })


// HOF -> Higher Order Functions
// Funcoes que recebem funcoes e/ou retornam funcoes


// Callbacks -> Funcao passada de argumento para outra funcao

// uma funcao deve fazer apenas uma coisa
// dados nunca devem ficar soltos e sempre armazenados em alguma variavel