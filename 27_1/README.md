---
presentation:
  width: 1920
  height: 1080
  theme: black.css
  previewLinks: true
---

<!-- slide -->
# 26.6 - Arquitetura MVC

## O que aprendemos?

* NodeJS
* Fluxos assíncronos
* Arquitetura Node
* Express
* Arquitetura MVC;

## O que vamos aprender?

* Conexão ao MongoDB;
* Arquitetura MSC;

## Conectando ao Mongo

### Criando o banco

Vamos importar o que está no arquivo data.js

### Instalando dependências e preparando app

```bash
$ mkdir songs-api && cd songs-api
$ npm init -y
$ npm install express body-parser mongodb
$ npm install nodemon -D # desenvolvimento
```


```js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json()); // ou podemos usar o express.json()

app.listen(3001, () => {
  console.log('Ouvindo a porta 3001!');
});
```

### Criando o arquivo connection.js

```js
const mongoClient = require('mongodb').MongoClient;

const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';

const connection = () => {
  return mongoClient
    .connect(MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => conn.db('musicClass'))
    .catch((err) => {
      console.error(err);
      process.exit(1);
   });
};

module.exports = connection;
```

### Criando nosso primeiro endpoint: listar músicas.

* Modelo.
* Controller.
* Roteamento.

### Criando nosso segundo endpoint: mostrar música.

* Modelo.
* Controller.
* Roteamento.

### Criando nosso terceiro endpoint: adicionar música.

* Modelo.
* Controller.
* Roteamento.

## Camada de serviço

Qual a razão de criarmos essa camada e não utilizar nos controllers ou modelos?

### Show the code!

