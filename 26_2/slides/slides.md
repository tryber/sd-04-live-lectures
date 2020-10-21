---
presentation:
  width: 1920
  height: 1080
  theme: black.css
  previewLinks: true
---

<!-- slide -->

# 26.2 - Fluxo Assíncronos

<!-- slide vertical=true -->

## O que vamos aprender?

<br>

* Módulo `fs`;
* Criar funções `promissificadas`;
* `Async/await`

<!-- slide vertical=true -->

### [🏁 Checkpoint 🏁](https://wall.sli.do/event/nk7xrztw?section=d7476d2a-1e6a-444c-8d9e-d0b25a03a05c)


<!-- slide -->

## Módulo fs

<!-- slide vertical=true -->

### Tratamento de erros

### fs-errors/index.js

```js
const fs = require('fs');

fs.readFile('./myfile.txt', 'utf-8', (err, content) => {
  if (err) return console.error(`Erro ao ler o arquivo: ${err.message}`);

  console.log(`Conteúdo do arquivo: ${content}`);
});
```

<!-- slide vertical=true -->

Podem haver diversos tipos de erros

* ENOENT ("No such file or directory")
* EACCES ("Permission denied")

<!-- slide vertical=true -->

```js
const getBetterMessage = (error) => {
  if (error.code === 'ENOENT') return `Arquivo não encontrado: ${error.path}`;

  return error.message;
};
```

<!-- slide vertical=true -->

# 🚀 SHOW THE CODE 🚀

<!-- slide vertical=true -->

### [🏁 Checkpoint 🏁](https://wall.sli.do/event/nk7xrztw?section=d7476d2a-1e6a-444c-8d9e-d0b25a03a05c)

<!-- slide  -->

## Criar funções "promissificadas"

Utilizando o método `promisify` do módulo `util` podemos transformar uma `node-style callbacks` em uma função que retorna uma  promise.


<!-- slide vertical=true -->

Node style callback -> Função que retorna Promise -> Usando util.promisify.  

<!-- slide vertical=true -->

Exemplo com `Promise.all`

<!-- slide vertical=true -->

### [🏁 Checkpoint 🏁](https://wall.sli.do/event/nk7xrztw?section=d7476d2a-1e6a-444c-8d9e-d0b25a03a05c)

<!-- slide -->
## Async/Await

Nos permite utilizar uma função que retorna uma Promise *como se fosse* uma função síncrona.

<!-- slide vertical=true -->

### Em outras palavras

Podemos substituir o uso de `then` por `await` e declarar a função como assíncrona usando `async`.

<!-- slide vertical=true -->

## Exemplos

<!-- slide vertical=true -->

### [🏁 Checkpoint 🏁](https://wall.sli.do/event/nk7xrztw?section=d7476d2a-1e6a-444c-8d9e-d0b25a03a05c)

<!-- slide -->

## Revisão com Star Wars API

# 🚀 LET`S CODE 🚀

<!-- slide -->

### [🏁 Dúvidas 🏁](https://wall.sli.do/event/nk7xrztw?section=d7476d2a-1e6a-444c-8d9e-d0b25a03a05c)
