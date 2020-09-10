# Updates Complexos Parte 2

* Operadores `$all`, `$elemMatch`, `$size`, `$expr`, `$regex`;
* Como criar índices e utilizando o operador `$text`

## Operador `$all`

```js
db.artists.updateOne(
  { _id: 1 },
  { $push: { tags: { $each: ['Rock', '60s', 'British'] } } }
);

db.artists.updateOne(
  { _id: 2 },
  { $push: { tags: { $each: ['Hard Rock', '70s', 'British'] } } }
);

db.artists.insertMany([
  { name: 'The Doors', tags: ['Rock', '60s', 'American'] },
  { name: 'Greatful Dead', tags: ['Rock', '60s', 'American'] },
  { name: 'Rolling Stones', tags: ['Rock', '60s', 'British'] },
  { name: 'The Who', tags: ['Rock', '60s', 'British'] },
  { name: 'Beach Boys', tags: ['Rock', '60s', 'British'] },
  { name: 'Deep Purple', tags: ['Hard Rock', '70s', 'British'] },
  { name: 'David Bowie', tags: ['Hard Rock', '70s', 'British'] },
  { name: 'Kiss', tags: ['Hard Rock', '70s', 'American'] },
  { name: 'Aerosmith', tags: ['Hard Rock', '70s', 'American'] },
  { name: 'Van Halen', tags: ['Hard Rock', '70s', 'American'] },
  { name: 'Rush', tags: ['Hard Rock', '70s', 'Canadian'] },
]);

db.artists.find({ tags: { $all: [ "Rock", "British", "60s"] } });
db.artists.find({ tags: { $all: [ "Hard Rock", "American", "70s"] } });
```

## Operador `$elemMatch`

## Operador `$size`

## Operador `$expr`

## Operador `$regex`

## Operador `$mod`

## Criando índices e utilizando o operador `$text`



