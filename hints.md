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

A partir daqui você pode começar o requisito 1.

## Bônus

Lembre-se de usar o middleware de autenticação em todos os endpoints onde vá ser nescessário usar o objeto com o usuário que está logado.

```js
// Exemplos
app.get('/receitas/:id', middlewares.auth(false), recipesController.show); // pode ou não ter o usuário logado para acessar o middleware implementado em recipesController.show
app.get('/receitas/add', middlewares.auth(), recipesController.add); // o usuário deve estar logado para acessar o middleware implementado em recipesController.add.

// Sempre que for usar o objeto user na view lembre-se de passar ele para view usando o req.user
// considere que o exemplo abaixo está no arquivo controller/recipes_controller.js
show = (req,res) => {
  res.render('recipes/show', { user: req.user })
}
```

Na sua view onde for nescessário renderizar algo de acordo com o usuário estar logado ou não faça algo do tipo:

```html
<% if (user) { %>
   Usuário logado: <%=user.name %>
<% } else { %>
    Usuário deslogado
<% } %>
```
