db.orders.aggregate([
  { $sort: { _id: 1 } },
  { $unwind: '$lineItems' },
  {
    $lookup: {
      from: 'products',
      localField: '$lineItems.prodId',
      foreignField: '$_id',
      pipeline: [
        {
          $match: {
            category: 'Limpeza'
          }
        },
        {
          $addFields: {
            subtotal: {
              $multiply: ['$$prodCount', '$unitPrice']
            }
          }
        }
      ],
      as: 'product'
    },
  },
  { $unwind: '$product' },
  {
    $group: {
      _id: '$product._id',
      nome: { $first: '$product.ProductName' },
      quantidade: { $sum: '$lineItems.prodCount' },
    }
  },
  { $sort: { quantidade: -1 } },
  { $limit: 5 }
]);