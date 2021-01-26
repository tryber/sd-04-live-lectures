# Aula 25.2 - Aggregation Framework - Parte 2

* Revisão de Lookup
* Operador `$addFields`;
* Operadores de cálculo `$add`, `$subtract`, `$multiply`, `$divide` e `$abs`;
* Operador `$round`, `$ceil`, `$floor`;

## Reimportando coleção

```bash
cd 25_2
mongorestore --drop --db pokemongo --collection pokemons dumps/samples_pokemon.bson
mongorestore --drop --db pokemongo --collection customers dumps/DBEnvyLoad_customers.bson
mongorestore --drop --db pokemongo --collection orders dumps/DBEnvyLoad_orders.bson
mongorestore --drop --db pokemongo --collection products dumps/DBEnvyLoad_products.bson
```

### Revisando Lookup

[Exemplo](./lookup-exemplo1.js)

## Adicionando novos campos

```js
db.pokemons.find({}).map((doc) => {
  db.pokemons.updateOne(
    { _id: doc._id},
    {
      $set: {
        pontosAtaque: Math.round(Math.random() * 100),
        pontosDefesa: Math.round(Math.random() * 100),  
        bonusAtaque: Math.ceil(Math.random() * 10),
        bonusDefesa: Math.ceil(Math.random() * 10),
        qtdAtaquesBatalha: Math.ceil(Math.random() * 6),
        coeficienteAtaque: {
          poison: Math.ceil(Math.random() * 5),
          ground: Math.ceil(Math.random() * 5),
          ice: Math.ceil(Math.random() * 5),
          rock: Math.ceil(Math.random() * 5),
          ghost: Math.ceil(Math.random() * 5),
          fire: Math.ceil(Math.random() * 5),
          electric: Math.ceil(Math.random() * 5),
          fighting: Math.ceil(Math.random() * 5),
          normal: Math.ceil(Math.random() * 5),
          flying: Math.ceil(Math.random() * 5),
          dragon: Math.ceil(Math.random() * 5),
          psychic: Math.ceil(Math.random() * 5),
          bug: Math.ceil(Math.random() * 5),
          grass: Math.ceil(Math.random() * 5),
          water: Math.ceil(Math.random() * 5)
        },
        coeficienteDefesa: {
          poison: Math.ceil(Math.random() * 5),
          ground: Math.ceil(Math.random() * 5),
          ice: Math.ceil(Math.random() * 5),
          rock: Math.ceil(Math.random() * 5),
          ghost: Math.ceil(Math.random() * 5),
          fire: Math.ceil(Math.random() * 5),
          electric: Math.ceil(Math.random() * 5),
          fighting: Math.ceil(Math.random() * 5),
          normal: Math.ceil(Math.random() * 5),
          flying: Math.ceil(Math.random() * 5),
          dragon: Math.ceil(Math.random() * 5),
          psychic: Math.ceil(Math.random() * 5),
          bug: Math.ceil(Math.random() * 5),
          grass: Math.ceil(Math.random() * 5),
          water: Math.ceil(Math.random() * 5)
        },
      }
    }
  )
});
```

# Operador `$addFields`;

```js
db.pokemons.aggregate([
  {
    $addFields: {
      ataqueTotal: { $add: ['$pontosAtaque', '$bonusAtaque'] }
    }
  },
  { $project: { name: true, pontosAtaque: true, bonusAtaque: true, ataqueTotal: true} }
]);
```

# Operadores de cálculo `$add`, `$subtract`, `$multiply`, `$divide` e `$abs`;

```js
db.pokemons.aggregate([
  {
    $addFields: {
      ataqueTotal: { $add: ['$pontosAtaque', '$bonusAtaque'] },
      defesaTotal: { $add: ['$pontosDefesa', '$bonusDefesa'] }
    }
  },
  { $project: { name: true, ataqueTotal: true, defesaTotal: true, diferenca: { $subtract: ['$ataqueTotal', '$defesaTotal'] } } }
]);

db.pokemons.aggregate([
  {
    $addFields: {
      ataqueTotal: { $add: ['$pontosAtaque', '$bonusAtaque'] }
      defesaTotal: { $add: ['$pontosDefesa', '$bonusDefesa'] },
    }
  },
  { 
    $project: { 
      name: true, 
      diferenca: { $abs: { $subtract: ['$ataqueTotal', '$defesaTotal'] } } 
    } 
  }
]);

db.pokemons.aggregate([
  {
    $addFields: {
      ataqueTotalFogo: {
        $multiply: [
          { $add: ['$pontosAtaque', '$bonusAtaque'] },
          '$coeficienteAtaque.fire'
        ] 
      },
      defesaTotalAgua: {
        $multiply: [
          { $add: ['$pontosDefesa', '$bonusDefesa'] },
          '$coeficienteDefesa.water'
        ]
      }
    }
  },
  { $project: { name: true, ataqueTotalFogo: true, defesaTotalAgua: true } }
]);


db.pokemons.aggregate([
  {
    $addFields: {
      ataqueMedio: {
        $divide: ['$pontosAtaque', '$qtdAtaquesBatalha']
      }
    }
  },
  { $project: { name: true, pontosAtaque: true, qtdAtaquesBatalha: true, ataqueMedio: true } }
]);
```

* Operador `$round`, `$ceil`, `$floor`;

```js
db.pokemons.aggregate([
  {
    $addFields: {
      ataqueMedio: {
        $round: [{$divide: ['$pontosAtaque', '$qtdAtaquesBatalha']}, 1]
        // $floor: {$divide: ['$pontosAtaque', '$qtdAtaquesBatalha']}
        // $ceil: {$divide: ['$pontosAtaque', '$qtdAtaquesBatalha']}
      }
    }
  },
  { $project: { name: true, pontosAtaque: true, qtdAtaquesBatalha: true, ataqueMedio: true } }
]);
```