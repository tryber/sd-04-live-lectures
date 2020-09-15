// 1. Adicionar um campo rating na colecao friends com um valor entre 0 e 10 (utilize a função Math.random)

db.friends.find({}).forEach(function (doc) {
  print(doc._id);
  db.friends.updateOne(
    { _id: doc._id }, 
    {
      $set: { rating: Math.round(Math.random() * 10) }
    }
  );
});

  db.friends.aggregate([
    {
      $group: {
        _id: '$rating',
        total: { $sum: 1 }
      }
    }
  ]);

// 2. Adicionar um campo watches na colecao friends com um valor entre 0 e 10.000.000
db.friends.find({}).forEach(function (doc) {
  print(doc._id);
  db.friends.updateOne(
    { _id: doc._id },
    {
      $set: { watches: Math.round(Math.random() * 10000000) }
    }
  );
});

db.friends.aggregate([
  {
    $group: {
      _id: '$watches',
      total: { $sum: 1 }
    }
  }
]);

// 3. trazer a média de rating dos episódios da primeira a quinta temporada ordernado pela avaliacao de forma decresecnte
// { temporada: <valor>,  avaliacao: <valor>}

db.friends.aggregate([
  {
    $match: {
      season: { $gte: 1, $lte: 5}
    }
  },
  {
    $group: {
      _id: '$season',
      avaliacao: { $avg: '$rating' }
    }
  },
  { $project: { _id: false, temporada: '$_id', avaliacao: { $round: ['$avaliacao', 1] } } },
  { $sort: { avaliacao: -1  }}
]);

// 4. retornar a temporada com mais reproducoes (watching) da sexta temporada a décima temporada no formato:
// { temporada: <valor>,  reproducoes: <valor>}

$match
$group
$sort
$limit
$project

db.friends.aggregate([
  {
    $match: {
      season: { $gte: 6, $lte: 10 }
    }
  },
  {
    $group: {
      _id: '$season',
      reproducoes: { $sum: '$watches' }
    }
  },
  { 
    $sort: {
      reproducoes: -1
    }
  },
  {
    $limit: 1
  },
  { $project: { _id: false, temporada: '$_id', reproducoes: '$reproducoes' } },
]);

// 5. Adicionar o campo attack e defense na coleção pokemon com valores aleatorios entre 1 e 100.
db.pokemons.find({}).forEach(function (doc) {
  print(doc._id);
  db.pokemons.updateOne(
    { _id: doc._id },
    {
      $set: { 
        attack: Math.round(Math.random() * 100),
        defense: Math.round(Math.random() * 100)  
      }
    }
  );
});

// 6. Calcular a média, o maior e menor poder de ataque de cada tipo no seguinte formato ordenado pelo ataque de forma crescente.
// { tipo: <valor>,  mediaAtaque: <valor>, menorAtaque: <valor>, maiorAtaque: <valor>}

$group
$sort
$unwind
$project

db.pokemons.aggregate([
  { $unwind: '$type' },
  {
    $group: {
      _id: '$type',
      mediaAtaque: { $avg: '$attack' },
      maiorAtaque: { $max: '$attack' },
      menorAtaque: { $min: '$attack' },
    }
  },
  {
    $sort: { mediaAtaque: 1 }
  },
  {
    $project: {
      _id: false,
      tipo: '$_id',
      mediaAtaque: { $round: ['$mediaAtaque', 1] },
      maiorAtaque: '$maiorAtaque',
      menorAtaque: '$menorAtaque',
    }
  }
]);


// 7. Calcular a média, o maior e menor poder de defesa de cada fraqueza no seguinte formato ordenado pela maior ataque, menor ataque e media de forma decrescente.
// { fraqueza: <valor>,  mediaDefesa: <valor>, menorDefesa: <valor>, maiorDefesa: <valor>}

db.pokemons.aggregate([
  { $unwind: '$weakness' },
  {
    $group: {
      _id: '$weakness',
      mediaDefesa: { $avg: '$defense' },
      maiorDefesa: { $max: '$defense' },
      menorDefesa: { $min: '$defense' },
    }
  },
  {
    $sort: { mediaDefesa: 1 }
  },
  {
    $project: {
      _id: false,
      tipo: '$_id',
      mediaDefesa: { $round: ['$mediaDefesa', 1] },
      maiorDefesa: '$maiorDefesa',
      menorDefesa: '$menorDefesa',
    }
  }
]);

// 8. Descubra o total de pokemons que o poder de defesa é maior que o poder de ataque. 

// 9. Encontre o total de pedidos que possuam nos itens comprados um produto da categoria Bebidas

// 10. Descubra quantos pedidos existem para cada categoria de produto.

// Bônus

// 11. Descubra o pedido com o maior valor na categoria Higiene pessoal

// 12. Listar os 5 produtos mais vendidos na categoria Alimentação

