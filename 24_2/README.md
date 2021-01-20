# Updates Complexos - Parte 1

O que vamos aprender hoje? 

* Operadores `$push`, `$pull`, `$pop` e `$addToSet`;
* Modificadores `$each`, `$slice` e `$sort`.

## Operador `$push`

```js
use colecaoCDs;

db.artists.insertOne({
  _id: 1,
  name: "The Beatles"
});

db.artists.updateOne(
  { _id: 1 },
  {
    $push: { members: 'John Lennon' }
  }
);
```

### Adicionando múltiplos valores de uma vez com `$push` usando `$each`

```js
db.artists.updateOne(
  { _id: 1 },
  {
    $push: {
      members: { $each: ['Paul McCartney', 'George Harrison', 'Ringo Starr'] }
    }
  }
);

db.artists.updateOne(
  { _id: 1 },
  {
    $push: {
      albums: {
        title: "Sgt. Pepper's Lonely Hearts Club Band",
        releaseYear: 1967
      }
    }
  }
);

db.artists.updateOne(
  { _id: 1 },
  {
    $push: {
      albums: {
        $each: [
          { title: "The Beatles", releaseYear: 1968 },
          { title: "Rubber Soul", releaseYear: 1965 },
          { title: "Let it Be", releaseYear: 1970 }
        ]
      }
    }
  }
);
```

# Ordenando arrays com `$sort`

```js
db.artists.find({}, { _id: false, name: true, members: true}); 

// ordenar de forma crescente
db.artists.updateOne(
  { _id: 1 },
  {
    $push: {
      members: {
        $each: [], 
        $sort: 1
      }
    }
  }
);

// ordenar de forma decrescente
db.artists.updateOne(
  { _id: 1 },
  {
    $push: {
      members: {
        $each: ['George Martin'], 
        $sort: -1
      }
    }
  }
);

db.artists.find({}, { _id: false, name: true, albums: true});

// ordenando por atributo em uma array de documentos
db.artists.updateOne(
  { _id: 1 },
  {
    $push: {
      albums: {
        $each: [
          { title: "Abbey Road", releaseYear: 1969 },
          { title: "Revolver", releaseYear: 1966 },
        ], 
        $sort: { releaseYear: -1 }
      }
    }
  }
);
```

### Limitanto tamanho da array com `$slice`

```js
db.artists.updateOne(
  { _id: 1 },
  {
    $push: {
      albums: {
        $each: [], 
        $sort: { releaseYear: 1 },
        $slice: 4
      }
    }
  }
);

db.artists.updateOne(
  { _id: 1 },
  {
    $push: {
      albums: {
        $each: [], 
        $slice: 2
      }
    }
  }
);
```

## Operador `$pull`

```js
// Reinserindo albums
db.artists.updateOne(
  { _id: 1 },
  {
    $push: {
      albums: {
        $each: [
          { title: "The Beatles", releaseYear: 1968 },
          { title: "Let it Be", releaseYear: 1970 },
          { title: "Sgt. Pepper's Lonely Hearts Club Band", releaseYear: 1967 },
          { title: "Help!", releaseYear: 1965 },
          { title: "Magical Mistery Tour!", releaseYear: 1967 },
          { title: "Abbey Road", releaseYear: 1969 }
        ]
      }
    }
  }
);


db.artists.updateOne(
  { _id: 1 },
  {
    $pull: {
      members: 'George Martin',
      albums: { title: 'Revolver'}
    }
  }
);

db.artists.updateOne(
  { _id: 1 },
  {
    $pull: {
      albums: { 
        releaseYear: { $lt: 1967 }
      }
    }
  }
);
```

## Operador `$pop`



```js
// Remove o primeiro elemento de uma array
db.artists.updateOne(
  { _id: 1 },
  { $pop: { albums: 1 } }
);

// Remove o último elemento de uma array
db.artists.updateOne(
  { _id: 1 },
  { $pop: { members: -1 } }
);

// só funciona com 1 e -1
db.artists.updateOne(
  { _id: 1 },
  { $pop: { members: -2 } }
);
// "$pop expects 1 or -1, found: -2",
```

## Operador `$addToSet`


```js

db.artists.updateOne(
  { _id: 1 },
  { 
    $addToSet: {
      members: { 
        $each: ['Paul McCartney', 'George Harrison', 'Ringo Starr', 'John Lennon']
      }
    }
  }
);

// Obs: $sort e $slice não funcionam com $addToSet

db.artists.updateOne(
  { _id: 1 },
  { 
    $addToSet: {
      similarBands: {
        $each: ['Rolling Stones', 'The Who', 'The Beach Boys', 'The Kinks']
      },
      singles: {
        $each: [
          { title: 'Hey Jude', releaseYear: 1968 },
          { title: 'Come Together', releaseYear: 1969 },
          { title: 'Blackbird', releaseYear: 1968 }
        ]
      }
    }
  }
);

// não insere elementos repetidos
db.artists.updateOne(
  { _id: 1 },
  { 
    $addToSet: {
      similarBands: 'Rolling Stones',
      singles: {
        $each: [
          { title: 'Blackbird', releaseYear: 1968 },
          { title: 'Get Back', releaseYear: 1970 }
        ]
      }
    }
  }
);
```

## Operador $

```js
db.artists.updateOne(
  { 
    _id: 1,
    'albums.title': 'The Beatles'
  },
  { 
    $push: { 
      'albums.$.ratingCritic': { $each: [10,9] },
      'albums.$.ratingPublic': 10,
    }
  }
);
```
