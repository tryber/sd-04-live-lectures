# Updates Complexos Parte 2

* Operadores `$all`, `arrayFilters`, `$elemMatch`, `$size`, `$expr`, `$regex`;
* Como criar índices e utilizando o operador `$text`

## Importando a coleção

```bash
mongoimport --db colecaoCDs --collection artists artists.json --drop
```

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
```


## Operador `$elemMatch`

```js
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

## Operador `$mod`

```js
db.artists.updateOne({ name: 'Pink Floyd'}, { $set: { totalAlbums: 15 } });
db.artists.updateOne({ name: 'The Beatles'}, { $set: { totalAlbums: 11 } });
db.artists.updateOne({ name: 'Led Zeppelin'}, { $set: { totalAlbums: 9 } });
db.artists.updateOne({ name: 'Rolling Stones'}, { $set: { totalAlbums: 29 } });

db.artists.find({totalAlbums: { $mod: [3, 0] }}, { name: true, totalAlbums: true});
db.artists.find({totalAlbums: { $mod: [5, 0] }}, { name: true, totalAlbums: true});
```

## Operador `$regex`

```js
db.artists.updateOne(
  { name: 'Pink Floyd' },
  { $set: { description: 'Pink Floyd were an English rock band formed in London in 1965. Gaining a following as a psychedelic pop group, they were distinguished for their extended compositions, sonic experimentation, philosophical lyrics and elaborate live shows, and became a leading band of the progressive rock genre. Pink Floyd were one of the first British psychedelia groups, and are credited with influencing genres such as neo-progressive rock and ambient music.' } }
);

db.artists.updateOne(
  { name: 'The Beatles' },
  { $set: { description: "The Beatles were an English rock band formed in Liverpool in 1960. The group, whose best-known line-up comprised John Lennon, Paul McCartney, George Harrison and Ringo Starr, are regarded as the most influential band of all time.[1] They were integral to the development of 1960s counterculture and popular music's recognition as an art form.[2] Rooted in skiffle, beat and 1950s rock and roll, their sound incorporated elements of classical music and traditional pop in innovative ways; the band later explored music styles ranging from ballads and Indian music to psychedelia and hard rock. As pioneers in recording, songwriting and artistic presentation, the Beatles revolutionised many aspects of the music industry and were often publicised as leaders of the era's youth and sociocultural movements" } }
);

db.artists.updateOne(
  { name: 'Led Zeppelin' },
  { $set: { description: "Led Zeppelin were an English rock band formed in London in 1968. The group consisted of vocalist Robert Plant, guitarist Jimmy Page, bassist/keyboardist John Paul Jones, and drummer John Bonham. With their heavy, guitar-driven sound, they are regularly cited as one of the progenitors of heavy metal, although their style drew from a variety of influences, including blues and folk music. The band have been credited with majorly impacting the nature of the music industry, particularly in the development of album-orientated rock (AOR) and stadium rock. Many critics consider Led Zeppelin one of the most successful, innovative, and influential rock groups in history." } }
);

// description like "%English rock band%"
db.artists.find({ description: { $regex: /English rock band/ } }, { name: true });
db.artists.count({ description: { $regex: /English rock band/ } });

// description like "Pink Floyd were%"
db.artists.find({ description: { $regex: /^Pink Floyd were/ } }, { name: true });

// description like "%influential rock groups in history"
db.artists.find({ description: { $regex: /influential rock groups in history.$/ } }, { name: true });
```


## Criando índices e utilizando o operador `$text`

```js
db.artists.createIndex({ description: "text" });

// buscando por uma palavra
db.artists.find({ $text: { $search: "influential" } });

// buscando por palavras
db.artists.find({ $text: { $search: "influential successful neo-progressive" } });

// buscando por uma frase
db.artists.count({ $text: { $search: "\"became a leading band of the progressive rock genre\"" } });

// buscando por palavras
db.artists.count({ $text: { $search: "became a leading band of the progressive rock genre" } });

db.bandasBrasileiras.insertOne({
  name: 'Mutantes',
  description: 'Os Mutantes é uma banda brasileira de rock psicodélico formada durante o Movimento Tropicalista no ano de 1966, em São Paulo, por Arnaldo Baptista, Rita Lee e Sérgio Dias. Também participaram do grupo Liminha e Dinho Leme.'
});

// criando índice na língua portuguesa
db.bandasBrasileiras.createIndex({ description: "text" }, { default_language: "portuguese" })

db.bandasBrasileiras.find(
  { $text: { $search: "é uma banda" }},
  { score: { $meta: "textScore" } }
);

db.bandasBrasileiras.find(
  { $text: { $search: "foi uma banda" }},
  { score: { $meta: "textScore" } }
);

// listando índices
db.bandasBrasileiras.getIndexes()

// removendo índice
db.bandasBrasileiras.dropIndex('description_text');
```



