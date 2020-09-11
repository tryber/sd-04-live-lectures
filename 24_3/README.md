# Updates Complexos Parte 2

* Operadores `$all`, `arrayFilters`, `$elemMatch`, `$size`, `$expr`, `$regex`;
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

## Array filters



## Operador `$elemMatch`

```js
db.artists.insertOne({ 
  name: 'Pink Floyd', 
  tags: ['Rock', '60s', '70s', 'British'],
  albums: [
    { title: 'The Dark Side of Moon', releaseYear: 1973 },
    { title: 'Wish You Were Here', releaseYear: 1975 },
    { title: 'The Wall', releaseYear: 1979 }
  ]
});

db.artists.find({ name: 'Pink Floyd'});

db.artists.updateOne(
  { name: 'Pink Floyd' },
  { $set: { 
    "albums.$[elemento].duration": 42,
    "albums.$[elemento].awards": ['Grammy Hall of Fame Award', 'NME Award'],
  } },
  { arrayFilters: [ {'elemento.title': 'The Dark Side of Moon'} ]}
); 

db.artists.updateOne(
  { name: 'Pink Floyd' },
  { $set: { 
    "albums.$[elemento].duration": 81,
    "albums.$[elemento].awards": ['Grammy Hall of Fame Award'],
  } },
  { arrayFilters: [ {'elemento.title': 'The Wall'} ]}
); 

db.artists.updateOne(
  { name: 'Pink Floyd' },
  { $set: { 
    "albums.$[elemento].duration": 44,
    "albums.$[elemento].awards": []
  } },
  { arrayFilters: [ {'elemento.title': 'Wish You Were Here'} ]}
);

db.artists.updateOne(
  { name: 'Beach Boys' },
  {
    $push: { 
      albums: { 
        name: 'Pet Sounds', releaseYear: 1965, duration: 36, awards: ['Grammy Hall of Fame Award']
      }
    }
  },
);

db.artists.find(
  {
    'albums': {
      $elemMatch: { 
        duration: { $gte: 35, $lt: 60 },
        awards: { $all: ['Grammy Hall of Fame Award'] }
      }
    }
  },
  { name: true }
)
```

## Operador `$size`

```js
db.artists.find(
  { albums: { $size: 3 } },
  { _id: false, name: true, 'albums.title': true  }
);
```

## Operador `$expr`

```js
db.artists.updateOne(
  { name: 'Pink Floyd' },
  { 
    $set: { listeners: { us: 900000, uk: 1300000} } 
  }
); 

db.artists.updateOne(
  { name: 'The Beatles' },
  { 
    $set: { listeners: { us: 11000000, uk: 14000000} } 
  }
);

db.artists.updateOne(
  { name: 'Aerosmith' },
  { 
    $set: { listeners: { us: 900000, uk: 500000} } 
  }
);

db.artists.updateOne(
  { name: 'Kiss' },
  { 
    $set: { listeners: { us: 1200000, uk: 700000} } 
  }
);

db.artists.find(
  {
    $expr: {
      $gt: [ "$listeners.us", "$listeners.uk"]
    }
  },
  { nome: true, listeners: true }
);
```

## Operador `$regex`

## Operador `$mod`

## Criando índices e utilizando o operador `$text`



