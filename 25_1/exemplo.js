

db.products.find({}).forEach(function (doc) {
  print(doc._id)
  db.products.updateOne({ _id: doc._id }, {
    $set: { category: categorias[(Math.random() * categorias.length) | 0] }
  })
});

db.friends.aggregate([
  {
    $group: {
      _id: '$season',
      totalEpisodios: { $sum: 1 },
      mediaDuracao: { $avg: '$runtime' }
    }
  },
  {
    $sort: {
      totalEpisodios: -1
    }
  },
  { $project: { _id: false, temporada: '$_id', tempoTotalAproximado: { $multiply: ['$totalEpisodios', '$mediaDuracao'] } } }
]).forEach(function (doc) {
  print(doc.temporada)
  db.temporadas.insertOne(doc);
});