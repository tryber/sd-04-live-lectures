db.orders.aggregate([
  { $sort: { _id: 1 } },
  { $unwind: '$lineItems' },
  {
    $lookup: {
      from: 'products',
      let: { productId: '$lineItems.prodId', prodCount: '$lineItems.prodCount' },
      pipeline: [
        {
          $match: {
            $expr: {
              $eq: ['$_id', '$$productId'],
            }
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
  { $sort: { quantidade: -1 }}
]);