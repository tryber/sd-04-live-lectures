use musicClass;
db.songs.insertMany([
  {
    _id: ObjectId("5f762ca643893a773b2a5e48"),
    name: 'Carry On',
    album: 'Reaching Horizons'
  },
  {
    _id: ObjectId("5f762d3f43893a773b2a5e4b"),
    name: 'Feeling Good',
    album: 'I Put a Spell on You'
  },
  {
    _id: ObjectId("5f762ca643893a773b2a5e49"),
    name: 'Da Ponte pra Cá',
    album: 'Nada como um Dia após o Outro Dia'
  },
  {
    _id: ObjectId("5f762ca643893a773b2a5e4a"),
    name: 'Aprendendo a Jogar',
    album: 'Elis'
  }
])


db.artists.insertMany([
  {
    _id : ObjectId("5f762bb4d0c1dd24e7600ec7"),
    name: 'Angra',
    music_genre: ['power metal', 'folk metal', 'progressive metal']
  },
  {
    _id : ObjectId("5f762bb4d0c1dd24e7600ec8"),
    name: 'Nina Simone',
    music_genre: ['R&B', 'blues', 'folk', 'soul']
  }, 
  {
    _id : ObjectId("5f762bb4d0c1dd24e7600ec9"),
    name: "Racionais MC's",
    music_genre: ['rap', 'political hip hop']
  },
  {
    _id : ObjectId("5f762bb4d0c1dd24e7600eca"),
    name: 'Elis Regina',
    music_genre: ['MPB', 'bossa nova', 'samba']
  }
])