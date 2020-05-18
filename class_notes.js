// Package.json -> controlador de pacotes e comandos

// Comando para instalar o jest via npm
// npm install --save-dev jest

// --save-dev salva a dependência no campo devDependencies no package.json. 
// Sem essa flag, ela seria instalada no campo dependencies
// São todos os programas necessários para ambiente de "dev", desenvolvimento, da aplicação.
// Pode ser tudo desde compressores de código, transpiladores, testes unitários, 
// ferramentas de debug, etc. Estes não são necessários para a aplicação funcionar,
// mas sim para desenvolver e /ou testar.

// Jest sempre vai buscar arquivos que terminam com .test ou .spec


// NodeJs -> nao é a linguagem
// a linguagem é JavaScriptu
// NodeJs -> EXECUTA O CODIGO JAVACRIPT

// Colocar node_modules e coverage no arquivo
// .gitignore -> /node_modules
// .gitignore -> /corave

// Ter que executar manualmente npm test toda vez que mudamos algum arquivo é
// muito repetitivo. O Jest possui uma forma de lidar com isso, que é o watch mode. 
// Através dele o Jest é capaz de detectar mudanças em arquivos e executar novamente os 
// testes relacionados a esses arquivos. Para executar os testes com o watch mode, 
// vamos modificar o script que está em package.json, passando a opção --watch para o Jest
// "scripts": {
//     "test": "jest --watch"
// },

// É preciso estar em no repositório git. Isso é necessário para 
// executar jest com a opção --watch. Do contrário, é necessário 
// utilizar a opção --watchAll, que executa todos os arquivos quando 
// há alguma mudança


// Usando .toBe() -> testamos de forma strict '==='


// Cobertura de testes é uma métrica que indica quais partes de 
// um programa são executadas quando um conjunto de testes é 
// executado. Se passarmos a opção --coverage ao executar o Jest, 
// ele também irá imprimir no terminal informações detalhadas sobre a 
// cobertura de testes de nossos programas. Vamos verificar a 
// cobertura de nossas funções
// "scripts": {
//     "test": "jest --watch",
//     "testCoverage": "jest --coverage"
// },