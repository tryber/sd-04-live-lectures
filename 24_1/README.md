# Update Simples

O que vamos aprender:

* Atualizar dados com `updateOne` e `updateMany`;
* Utilizar os operadores `$set`, `$mul`, `$inc`, `$min`, `$max` e `$currentDate`;
* Renomear campos com `$rename`;
* Remover campos com `$unset`;

## Antes de começar

```js
use school;

db.students.insertMany(
  [
    { name: "Estudante 1", school: "Escola do Futuro", bestScore: 9.8 },
    { name: "Estudante 2", school: "Escola do Futuro", bestScore: 7.2 }
  ]
);

db.students.find();
```

## Alterando um único documento com `updateOne`

```js
db.students.updateOne(
  { school: "Escola do Futuro" },
  {
    $set: {
      school: "Trybe"
    }
  }
);
```

## Alterando vários documento com `updateMany`

```js
db.students.updateMany(
  { school: "Escola do Futuro" },
  {
    $set: {
      school: "Trybe"
    }
  }
);
```

Obs.

### Atomicidade

Faz todas as alterações ou não faz nenhuma.

### O campo _id

Quando o MongoDB atribui um valor ao _id, o tipo utilizado é o ObjectId, que basicamente é um hexadecimal composto por 12 bytes:

4 bytes com um valor timestamp, representando a data de criação, medida em segundos desde a Unix epoch;

5 bytes de um valor aleatório; e

3 bytes com um contador incremental, iniciado com outro valor aleatório.

[Documentação do Mongo sobre _id](https://docs.mongodb.com/manual/reference/method/ObjectId/index.html)

### Opção Upsert

Algo como update + insert, tenta alterar, se não existir insere o dado.

```js
db.students.updateOne(
  { name: "Estudante 4" },
  {
    $set: {
      school: "Trybe",
      bestScore: 8.8
    }
  },
  { upsert: true }
);

```

## Operador `$set`

```js
// inserindo
db.products.insertMany([
  {
    _id: 100,
    sku: "abc123",
    quantity: 250,
    instock: true,
    reorder: false,
    details: { model: "14Q2", make: "xyz" },
    tags: [ "apparel", "clothing" ],
    ratings: [ { by: "ijk", rating: 4 } ]
  },
  {
    _id: 200,
    sku: "def456",
    quantity: 800,
    instock: true,
    reorder: false,
    details: { model: "15T2", make: "yyz" },
    tags: [ "books" ],
    ratings: [ { by: "ijk", rating: 4 } ]
  }
]);

// atualizando
db.products.updateOne(
  { _id: 100 },
  {
    $set: {
      quantity: 500,
      details: { model: "14Q3", make: "xyz" },
      tags: ["coats", "outerwear", "clothing"]
    }
  }
);

// atualizando atributos de subdocumentos
db.products.updateOne(
  { _id: 100 },
  { $set: { "details.make": "zzz" } }
);

// atualizando valores em arrays
db.products.updateOne(
  { _id: 100 },
  {
    $set: {
      "tags.1": "rain gear",
      "ratings.0.rating": 2
    }
  }
);

db.produtos.find({ _id: 100});
```

## Operador `$mul`

```js
db.products.updateOne(
  { _id: 100 },
  { $mul: { quantity: 4 } }
);

db.products.find({ _id: 100}, { _id: true, quantity: true});
```

## Operador `$inc`

```js
// incremento
db.products.updateOne(
  { _id: 100 },
  { $inc: { quantity: 50 } }
);

db.products.find({ _id: 100}, { _id: true, quantity: true});

// decremento
db.products.updateOne(
  { _id: 200 },
  { $inc: { quantity: -200 } }
);

db.products.find({ _id: 200}, { _id: true, quantity: true});
```


## Operadores `$min` e `$max`

O MongoDB comparará o valor do campo no documento com o valor especificado na operação: 
* `$max`: Se o valor passado na comparação for maior do que o valor atual do campo, a alteração será feita.
* `$min`: Se o valor passado na comparação for menor do que o valor atual do campo, a alteração será feita.

```js
// se o valor atual for maior diminui para o valor passado
db.students.find({}, {_id: 1, bestScore: 1});

db.students.updateMany(
  {},
  { $max: { bestScore: 8.0 } }
);

// se o valor atual for menor aumenta para o valor passado
db.students.updateMany(
  {},
  { $min: { bestScore: 9.0 } }
);
```

## Operadores `$currentDate`

```js
db.students.updateMany(
  {},
  { 
    $currentDate: { 
      dataDaMatricula: true,
      dataDeAnivesario: { $type: 'timestamp' }
    } 
  }
);
```

## Renomear campos com `$rename`
```js
db.students.updateMany(
  {},
  { 
    $rename: { 
      name: 'nomeCompleto'
    } 
  }
);
```

## Remover campos com `$unset`

```js
db.students.updateMany(
  {},
  { 
    $unset: { 
      dataDeAnivesario: ''
    } 
  }
);
```
## Exercícios

[Link](https://course.betrybe.com/back-end/mongodb/simple-updates#exerc%C3%ADcios)