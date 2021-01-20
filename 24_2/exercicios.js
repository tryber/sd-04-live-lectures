// Adicione o artista Led Zeppelin

db.artists.insertOne({
  _id: 2,
  name: "Led Zeppelin",
});

// 1. Adicione os membros da banda usando o operador $push. Os membros são:
// Jimmy Page, Robert Plant, John Paul Jones, Nick Mason
db.artists.updateOne(
  { _id: 2},
  {
    $push: {
      members: {
        $each: ['Jimmy Page', 'Robert Plant', 'John Paul Jones', 'Nick Mason']
      }
    }
  }
)

// 2. Adicione os seguintes albuns ordenado pelo ano de lançamento (releaseYear) em ordem crescente usando $push e $sort
// { title: "Led Zeppelin III", releaseYear: 1970 }
// { title: "Physical Grafiti", releaseYear: 1975 }
// { title: "Led Zeppelin I", releaseYear: 1969}
// { title: "Presence", releaseYear: 1976}
// { title: "Led Zeppelin IV", releaseYear: 1971}
// { title: "House of the Holy", releaseYear: 1973}
// { title: "In Through the Out Door", releaseYear: 1979}
// { title: "Led Zeppelin II", releaseYear: 1969}
db.artists.updateOne(
  { _id: 2},
  {
    $push: {
      albums: {
        $each: [
          { title: "Led Zeppelin III", releaseYear: 1970 },
          { title: "Physical Grafiti", releaseYear: 1975 },
          { title: "Led Zeppelin I", releaseYear: 1969},
          { title: "Presence", releaseYear: 1976},
          { title: "Led Zeppelin IV", releaseYear: 1971},
          { title: "House of the Holy", releaseYear: 1973},
          { title: "In Through the Out Door", releaseYear: 1979},
          { title: "Led Zeppelin II", releaseYear: 1969}
        ],
        $sort: { releaseYear: 1 }
      }
    }
  }
)


// 3. O nome do baterista está errado, usando uma operação remova o Nick Mason e adicione John Bonham na array members
db.artists.updateOne(
  { _id: 2},
  { $pull: { members: 'Nick Mason' } }
)

db.artists.updateOne(
  { _id: 2 },
  { $push: { members: "John Bohnam" } }
);

// 4. Usando $pull, remova todos os albúns entre 1969 e 1971

db.artists.updateOne(
  { _id: 2 }, 
  { $pull: { 
    albums: { releaseYear: { $gte: 1969, $lte: 1971 } }
  } 
});

// 5. Usando $pop, remova o primeiro membro e o último album
db.artists.updateOne(
  { _id: 2 },
  {
    $pop: {
      members: -1,
      albums: 1
    },
  }
);


// 6. Utilizando o $addToSet adicione novamente todos os membros:
// Jimmy Page, Robert Plant, John Paul Jones, John Bonham

db.artists.updateOne(
  { _id: 2 },
  {
    $addToSet: {
      members: {
        $each: ["Jimmy Page", "Robert Plant", "John Paul Jones", "John Bonham"],
      },
    },
  }
);
