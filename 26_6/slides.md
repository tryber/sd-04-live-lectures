# 26.6 - Arquitetura MVC

## O que aprendemos?

* NodeJS
* Fluxos assíncronos
* Arquitetura Node
* Express

## O que vamos aprender?

* Arquitetura MVC;
* Conexão ao MySQL;
* Recebendo dados do cliente via formulário com body-parser e url-enconded;
* Aplicação sem MVC;
* View Engine;
* Aplicação com MVC;

## Arquitetura MVC

## Criando o banco

```sql
CREATE DATABASE IF NOT EXISTS live_lecture_26_6;

USE live_lecture_26_6;

CREATE TABLE cats (
    id INT unsigned NOT NULL auto_increment,
    name VARCHAR(20) NOT NULL,
    age INT NOT NULL,
    CONSTRAINT pk_cats PRIMARY KEY (id)
);
```

## Instalando dependências e preparando app

```bash
$ mkdir cats-api && cd cats-api
$ npm init -y
$ npm install express body-parser @mysql/xdevapi
$ npm install nodemon -D # desenvolvimento
```



```js
const express = require('express');
const bodyParser = require('body-parser');
const mysqlx = require('@mysql/xdevapi');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3001, () => {
  console.log('Ouvindo a porta 3001!');
});
```

## Conexão ao MySQL

```js
const connection = () => {
  return schema ?
   Promise.resolve('live_lecture_26_6') :
   mysqlx
    .getSession({
      user: 'root',
      password: '',
      host: 'localhost',
      port: 33060,
    })
    .then((session) => {
      schema = session.getSchema('live_lecture_26_6');
      return schema;
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
};
```


## Endpoint GET /cats

```js
app.get('/cats', async (req, res) => {
  try {
    const db = await connection();
    const results = await db.getTable('cats').select(['name', 'age']).execute();

    const cats = results.fetchAll();

    const content = cats.reduce((html, cat) => {
      const [name, age] = cat;
      return html + `<li>Nome: ${name} - Idade: ${age}</li>`;
    }, '');

    const htmlBase = `
      <html>
        <head>
          <title>Gatos</title>
        </head>
        <body>
          <ul style="background-color: antiquewhite">
            ${content}
          </ul>
          <form action="/cats" method="POST">
            <input name="name" type="text">
            <input name="age" type="number">
            <button type="submit">Criar novo gato!</button>
          </form>
        </body>
      </html>
    `;
    res.send(htmlBase);
  } catch (err) {
    console.error(err);
    res.status(500).send('<h2>Erro ao tentar realizar operação</h2>');
  }
});
```

## Endpoint POST /cats

```js
app.post('/cats', async (req, res) => {
  const { name, age } = req.body;

  if (typeof name !== 'string' || name.length < 3 || name.length >= 30) {
    return res.status(400).send('<h2>O nome digitado não é válido</h2>');
  }

  try {
    const db = await connection();
    await db
      .getTable('cats')
      .insert(['name', 'age'])
      .values(name, age)
      .execute();

    res.send('<h2>Gato criado com sucesso!</h2>');
  } catch (error) {
    console.error(error);
    res.status(500).send('<h2>Erro ao tentar criar o gato</h2>');
  }
});
```

## Endpoint GET /cats/:id

```js
app.get('/cats/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const db = await connection();
    const results = await db
      .getTable('cats')
      .select(['name', 'age'])
      .where('id = :id')
      .bind('id', id)
      .execute();

    const cat = results.fetchAll()[0];

    if (!cat) {
      return res.status(404).send('<h2>Gato não encontrado :(</h2>');
    }

    const [name, age] = cat;
    const content = `<h2>Nome: ${name} - Idade: ${age}</h2>`;
    const htmlBase = `
      <html>
        <head>
          <title>Detalhes</title>
        </head>
        <body>
          <div style="background-color: antiquewhite">
            ${content}
          </div>
        </body>
      </html>
    `;

    res.send(htmlBase);
  } catch (error) {
    console.error(error);
    res.status(500).send('<h2>Erro ao tentar realizar operação</h2>');
  }
});
```

## Refatorando para MVC


### Model

* Método `getAll`
```js
const getAll = async () =>
  connection()
    .then((db) => db.getTable('cats').select(['name', 'age']).execute())
    .then((results) => results.fetchAll())
    .then((cats) => cats.map(([name, age]) => ({ name, age })));
```

```js
// app.js
// ...
// const content = cats.reduce((html, cat) => {
      const { name, age } = cat;
      // return html + `<li>Nome: ${name} - Idade: ${age}</li>`;
    // }, "");
// ...
```

* Método `add` e `isValid`

```js
const add = (name, age) =>
  connection().then((db) =>
    db.getTable('cats').insert(['name', 'age']).values(name, age).execute()
  );

const isValid = (name, age) =>
  typeof name === 'string' &&
  name.length >= 3 &&
  name.length < 30 &&
  age &&
  age > 0;

module.exports = {
  getAll,
  getCatById,
  add,
  isValid,
};
```

```js
// app.js
// ...
  if (!Cat.isValid(name, age)) {
    return res.status(400).send("<h2>O nome digitado não é válido</h2>");
  }

// ...
  await Cat.add(name, age);
// ...
```

### Método `getCatById`

```js
const getCatById = async (id) =>
  connection()
    .then((db) =>
      db
        .getTable("cats")
        .select(["name", "age"])
        .where("id = :id")
        .bind("id", id)
        .execute()
    )
    .then((results) => results.fetchAll()[0])
    .then((cats) => cats.reduce((name, age) => ({name, age})));
```

```js
// app.js - GET /cats/:id
// ...
const { name, age } = cat;
// ...
```

### Refatorando views

```bash
$ cp index.js app.js # manter a v1
$ npm i ejs
```

```js
app.set('view engine', 'ejs');
app.set('views', './views')
```

* views/cats/catList.ejs

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Gatos</title>
  </head>
  <body>
    <% if (message) { %>
      <h1><%= message %></h1>
    <% } %>
    <% if (cats) {%>
      <ul style="background-color: antiquewhite">
        <% cats.forEach(cat => { %>
          <li>Nome: <%= cat.name %> - Idade: <%= cat.age %></li>
        <%})%>
      </ul>
    <% } %>
    <form action="/cats" method="POST">
      <input name="name" type="text" />
      <input name="age" type="number" />
      <button type="submit">Criar novo gato!</button>
    </form>
  </body>
</html>
```

* cats-api/views/catDetails.ejs

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Detalhes</title>
  </head>
  <body>
    <div style="background-color: antiquewhite">
      <h2>Nome: <%= cat.name %> - Idade: <%= cat.age %></h2>
    </div>
  </body>
</html>
```

* cats-api/views/success.ejs

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Sucesso</title>
  </head>
  <body>
    <div>
      <h1>Gato criado com sucesso!</h1>
    </div>
  </body>
</html>
```

* cats-api/views/notFound.ejs

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Não encontrado</title>
  </head>
    <body>
    <div>
      <h2>Gato não encontrado :(</h2>
    </div>
  </body>
</html>
```

### Refatorar middlewares para usar `res.render`

## Controller

Refatorando para controllers