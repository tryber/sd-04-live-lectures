estados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];

db.customers.find({}).forEach((doc) => {
  db.customers.updateOne(
    { _id: doc._id },
    {
      $set: {
        uf: estados[(Math.random() * estados.length) | 0],
      },
    }
  );
});

db.customers.aggregate([
  {
    $group: {
      _id: "$uf",
      total: { $sum: 1 },
    },
  },
  { $project: { _id: false, estado: "$_id", total: "$total" } },
]);

// povoando status dos pedidos
orderStatuses = ["Enviado", "Entregue", "Em Separação", "Aguardando Pagamento"];

db.orders.find({}).forEach((doc) => {
  db.orders.updateOne(
    { _id: doc._id },
    {
      $set: {
        orderStatus: orderStatuses[(Math.random() * orderStatuses.length) | 0],
      },
    }
  );
});

db.orders.aggregate([
  {
    $group: {
      _id: '$orderStatus',
      total: { $sum: 1 }
    }
  },
  { $project: { _id: false, status: '$_id', total: '$total' } }
]);

// listando os clients com id entre 62000 e 63000 e fazendo o join apenas com os pedidos entregues
db.customers.aggregate([
  {
    $match: {
      uf: { $in: ["MG", "SP", "RJ"] },
      _id: { $gte: 62000, $lte: 63000 },
    },
  },
  {
    $lookup: {
      from: "orders",
      let: { customerId: "$_id" },
      pipeline: [
        {
          $match: {
            $expr: {
              $eq: ["$CustId", "$$customerId"],
            },
//            orderStatus: 'Entregue'
          },
        },
        { $project: { lineItems: false } },
      ],
      as: "pedidos",
    },
  },
// {
//   $addFields: {
//     totalPedidos: { $size: "$pedidos" },
//   }
// },
// { $sort: { totalPedidos: -1 } },
]);