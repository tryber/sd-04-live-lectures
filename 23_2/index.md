# BLOCO 23 DIA 2 - Operadores de filtros (Filter Operators)

## O que vamos aprender hoje

* Como exportar/importar um `dump` do mongo
* Ordenação e contagem
* Operadores de comparação: `$lt`, `$lte`, `$gt`, `$gte` `$eq`, `$ne`, `$in` e `$nin`;
* Operadores lógicos: `$not`, `$nor`, `$and` e `$or`;
* Operadores de elementos: `$exists`.
* Remover documentos, coleção e banco de dados:  `deleteOne`, `deleteMany`, `db.collection.drop` e `db.dropDatabase()`.

## Clientes mongo

* [Compass](https://www.mongodb.com/products/compass)
* [Monogo for vscode](https://marketplace.visualstudio.com/items?itemName=mongodb.mongodb-vscode)
* [mongosh](https://github.com/mongodb-js/mongosh)
* [mongo-hack](https://www.github.com/tylerbrock/mongo-hacker/)
* [Todas as Ferramentas](https://docs.mongodb.com/tools/)

## Como exportar/importar um `dump` do mongo

*Obs: Esses comandos devem ser executados fora do mongoshell*

```bash
# exportar um dump
mongodump --db=test --out=/data/backup/

# importar um dump
mongoimport --db comics --collection superheroes <caminho_do_arquivo>

mongo [database] <file>.json
```

[Documentação sobre mongodump e mongorestore](https://docs.mongodb.com/manual/tutorial/backup-and-restore-tools/)

## Ordenação e contagem

```js
db.filmes.find({ }).sort( { ano : 1 } ) // order by ano asc
db.filmes.find({ }).sort( { ano : -1 } ) // order by ano desc

db.filmes.count(); // ou
db.filmes.find().count();
```
## Operadores de comparação

**Operador `$lt` (less than) e `$lte` (less than or equal to)**

```js
db.filmes.find({ ano: { $lt: 2000 } }); 
db.filmes.find({ ano: { $lte: 2000 } });
```

**Operador `$gt` (great than) e `$gte` (great than or equal to)**

```js
db.filmes.find({ ano: { $gt: 2010 } }); 
db.filmes.find({ ano: { $gte: 2010 } });
```

**Combinando os dois operadores (BETWEEN)**

```js
db.filmes.find(
    { ano: { $gte: 1993, $lte: 2000 } }
).pretty();
```

**Operador `$eq` (equal) e `$ne` (not equal)**

```js
db.filmes.find({ ano: { $eq: 1993 } }); // ou 
db.filmes.find({ ano: 1993 });

db.filmes.find({ "avaliacao.bom": { $eq: 7 } }); // ou
db.filmes.find({ "avaliacao.bom": 7 });

db.filmes.find({ "avaliacao.ruim": { $ne: 8 } });

// como usar like
db.filmes.find({titulo: /a/})  //like '%a%'
db.filmes.find({titulo: /^pa/}) //like 'pa%' 
db.filmes.find({titulo: /ro$/}) //like '%ro'
```

**Operador `$in` e `$nin` (not in)**

```js
// $in
db.filmes.find({ ano: { $in: [2001, 1968, 1995] } }).pretty();

// $nin
db.filmes.find({ ano: { $nin: [2013, 2008] } });
```

## Operadores lógicos

**Operadores `$and` e `$or`** 

```js
// $and
db.filmes.find({ $and: [{ ano: { $gt:2000 } }, { "avaliacao.bom": { $gte: 8 } }] });

// $or
db.filmes.find({ $or: [{ ano: { $gt:2000 } }, { "avaliacao.bom": { $gte: 8 } }] });
```

**Operadores `$not` e `$nor`** 

```js
db.filmes.find({ano: {
  $not: {$gte: 2000}}
});

db.filmes.find({nor: [
  { ano: { $lt: 2020 } }, 
  { "avaliacao.bom": { $lt: 7 } }
]);

// equivalente a 
db.filmes.find({$or: [
  { ano: { $gte: 2020 } }, 
  { "avaliacao.bom": { $gte: 7 } }
]);
```

## Operadores de elementos

**Operador `$exists`**

```js
db.records.insertMany(
    [
        { primeiro: 5, segundo: 5, terceiro: null },
        { primeiro: 3, segundo: null, terceiro: 8 },
        { primeiro: null, segundo: 3, terceiro: 9 },
        { primeiro: 1, segundo: 2, terceiro: 3 },
        { primeiro: 2, terceiro: 5 },
        { primeiro: 3, segundo: 2 },
        { primeiro: 4 },
        { segundo: 2, terceiro: 4 },
        { segundo: 2 },
        { terceiro: 6 }
    ]
);

// $exists: true
db.records.find({ primeiro: { $exists: true } });
// $exists: false
db.records.find({ segundo: { $exists: false } });
```


## Removendo documentos, coleções e banco de dados

**Método `deleteOne()`**

```js
db.filmes.deleteOne({}); // remove o primeiro elemento.
db.filmes.deleteOne({ titulo: "Os Oito Odiados" });
```

**Método `deleteMany()`**

```js
db.filmes.deleteMany({ "avaliacao.ruim": { $gt:6 }}); 
db.filmes.deleteMany({}); // remove todos
```

**Método `db.collection.drop` e `db.dropDatabase()`**

```js
db.records.drop();
db.dropDatabase();
```
