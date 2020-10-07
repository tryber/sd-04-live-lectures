# Passos iniciais do projetos

## Instalar e configurar dotenv

1. Instalar lib

```
npm i dotenv -D
```

2. Criar o arquivo `.env` usando o modelo abaixo:

```
MYSQL_USER=<username>
MYSQL_PASSWORD=<password>
HOSTNAME=localhost
```

3. Adicionar a seguinte linha nos arquivos `cypress/plugins/index.js` e `config/config.js`

```
require('dotenv/config');
```

## Criar o arquivo de conexão ao banco

cria um arquivo `connection.js` no diretório models com o seguinte conteúdo:

```js
const mysqlx = require('@mysql/xdevapi');
require('dotenv/config');

const config = {
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.HOSTNAME,
  port: 33060,
};


let schema; /* Aqui entra a variável que salva à conexão, começa como undefined */
const connection = () => {
  return schema /* Se schema já existir: */
    ? Promise.resolve(schema) /* Retorna o schema numa Promise: */
    : mysqlx
        .getSession(config)
        .then((session) => {
          /* Quando terminamos de abrir a conexão: */
          schema = session.getSchema('cookmaster'); /* Armazenamos a conexão na variável `schema`*/
          return schema; /* E retornamos o schema de dentro da Promise */
        })
        .catch((err) => {
          /* Caso um erro ocorra: */
          console.error(err); /* Exibimos o erro no console */
          process.exit(1); /* E encerramos o processo */
        });
};

module.exports = connection;
```

## Implementar os métodos `findByEmail` e `findById`. 

```js
// Abaixo está uma implementação do método `findByEmail`
const findByEmail = async (email) => {
  return connection()
    .then((db) =>
      db
        .getTable('users')
        .select(['id', 'email', 'password', 'first_name', 'last_name'])
        .where('email = :email_param')
        .bind('email_param', email)
        .execute(),
    )
    .then((results) => results.fetchOne())
    .then(([id, email, password, name, lastName]) => ({ id, email, password, name, lastName }));
};

/**
 * Busca um usuário através do seu ID
 * @param {string} id ID do usuário
 */
 
 const findById = async (id) => {
   // implementar o método findById usando o método findByEmail como referência
 }
```

## Fazer o login redirecionar para a tela inicial

No arquivo `controllers/userController.js` modifique a linha 45 para redirecionar para rota `/` no lugar de `/admin`.

```js
return res.redirect(redirect || '/');
```

## Fazer requisito 1

A partir daqui você está apto a começar o requisito 1.
