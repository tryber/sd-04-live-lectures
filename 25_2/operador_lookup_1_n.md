```js
db.orders.aggregate([
  { $sort: { _id: 1 } },
  { $limit: 5 }
]);
```

```js
// db.orders.aggregate([
//   { $sort: { _id: 1 } },
     { $unwind: '$lineItems' },
//   { $limit: 5 }
// ]);
```

```js
// db.orders.aggregate([
//   { $sort: { _id: 1 } },
//   { $unwind: '$lineItems' },
//   { $limit: 5 },
     {
       $lookup: {
         from: 'products',
         let: { productId: '$lineItems.prodId' },
         pipeline: [
           {
             $match: {
               $expr: { 
                 $eq: ['$_id', '$$productId'],
               }
             }
           }   
         ],
         as: 'product'
       },
     }
// ]);
```


```js
// db.orders.aggregate([
//   { $unwind: '$lineItems' },
//   { $sort: { _id: 1 } },
//   { $limit: 5 },
//   {
//     $lookup: {
//       from: 'products',
//       let: { productId: '$lineItems.prodId' },
//       pipeline: [
//         {
//           $match: {
//             $expr: { 
                 category: 'Limpeza',
//               $eq: ['$_id', '$$productId'],
//             }
//           }
//         }   
//       ],
//       as: 'product'
//     },
//   }
// ]);
```

```js
// db.orders.aggregate([
//   { $unwind: '$lineItems' },
//   { $sort: { _id: 1 } },
//   {
//     $lookup: {
//       from: 'products',
//       let: { productId: '$lineItems.prodId' },
//       pipeline: [
//         {
//           $match: {
//             $expr: { 
//               category: 'Limpeza',
//               $eq: ['$_id', '$$productId'],
//             }
//           }
//         }   
//       ],
//       as: 'product'
//     },
//   },
     { $unwind: '$product' },
//   {
//     $limit: 5
//   }
// ]);
```

```js
// db.orders.aggregate([
//   { $unwind: '$lineItems' },
//   { $sort: { _id: 1 } },
//   {
//     $lookup: {
//       from: 'products',
//       let: { productId: '$lineItems.prodId' },
//       pipeline: [
//         {
//           $match: {
//             $expr: { 
//               category: 'Limpeza',
//               $eq: ['$_id', '$$productId'],
//             }
//           }
//         }   
//       ],
//       as: 'product'
//     },
//   },
//   { $unwind: '$product' },
     {
       $group: {
         _id: '$_id',
         products: { $push: '$product' }
       }
     },
//   {
//     $limit: 5
//   }
// ]);
```

```js
// db.orders.aggregate([
//   { $sort: { _id: 1 } },
//   { $unwind: '$lineItems' },
//   { $limit: 5 },
//   {
//        $lookup: {
//          from: 'products',
//          let: { productId: '$lineItems.prodId' },
//          pipeline: [
//            {
//              $match: {
//                  category: 'Limpeza',
//                $expr: { 
//                  $eq: ['$_id', '$$productId'],
//                }
//              }
//            }   
//          ],
//          as: 'product'
//        },
//      },
//      { $unwind: '$product' },
//      {
//        $group: {
//          _id: '$_id',
            CustId: { $first: '$CustId' },
            invoiceDate: { $first: '$invoiceDate' },
            lineItems: { $push: '$lineItems' },
            orderStatus: { $first: '$orderStatus' },
            statusDate: { $first: '$statusDate' },
//          products: { $push: '$product' }
//        }
//      },
// ]);
```

```js
// db.orders.aggregate([
//   { $sort: { _id: 1 } },
//   { $unwind: '$lineItems' },
//   { $limit: 5 },
//   {
//        $lookup: {
//          from: 'products',
//          let: { productId: '$lineItems.prodId' },
//          pipeline: [
//            {
//              $match: {
//                  category: 'Limpeza',
//                  $expr: { 
//                  $eq: ['$_id', '$$productId'],
//                }
//              }
//            }   
//          ],
//          as: 'product'
//        },
//      },
//      { $unwind: '$product' },
//      {
//        $group: {
//          _id: '$_id',
//            CustId: { $first: '$CustId' },
//             invoiceDate: { $first: '$invoiceDate' },
//             lineItems: { $push: '$lineItems' },
//             orderStatus: { $first: '$orderStatus' },
//             statusDate: { $first: '$statusDate' },
//             products: { $push: '$product' },
               totalProdutos: { $sum: 1 },
               valorTotal: { 
                 $sum: {
                   $multiply: ['$lineItems.prodCount', '$product.unitPrice'] 
                 } 
               },
               custoTotal: {
                 $sum: '$lineItems.Cost'
               }
//        }
//      },
// ]);
```

```js
// db.orders.aggregate([
//   { $sort: { _id: 1 } },
//   { $unwind: '$lineItems' },
//   { $limit: 5 },
//   {
//        $lookup: {
//          from: 'products',
//          let: { productId: '$lineItems.prodId', prodCount: '$lineItems.prodCount'},
//          pipeline: [
//            {
//              $match: {
//                  category: 'Limpeza',
//                $expr: { 
//                  $eq: ['$_id', '$$productId'],
//                }
//              }
//            },
              {
                $addFields: {
                  subtotal: {
                    $multiply: ['$$prodCount', '$unitPrice'] 
                  } 
                }
              }
//          ],
//          as: 'product'
//        },
//      },
//      { $unwind: '$product' },
//      {
//        $group: {
//          _id: '$_id',
//            CustId: { $first: '$CustId' },
//             invoiceDate: { $first: '$invoiceDate' },
//             lineItems: { $push: '$lineItems' },
//             orderStatus: { $first: '$orderStatus' },
//             statusDate: { $first: '$statusDate' },
//              products: { $push: '$product' },
//    totalProdutos: { $sum: 1 },
//                valorTotal: { 
                    $sum: '$product.subtotal'
//                },
//                custoTotal: {
//                  $sum: '$lineItems.Cost'
//                }
//        }
//      },
// ]);
```

```js
// db.orders.aggregate([
//   { $sort: { _id: 1 } },
//   { $unwind: '$lineItems' },
//   @aqui remover limite
//   {
//        $lookup: {
//          from: 'products',
//          let: { productId: '$lineItems.prodId', prodCount: '$lineItems.prodCount'},
//          pipeline: [
//            {
//              $match: {
//                  category: 'Limpeza',
//                $expr: { 
//                  $eq: ['$_id', '$$productId'],
//                }
//              }
//            },
//            {
//              $addFields: {
//                subtotal: {
//                  $multiply: ['$$prodCount', '$unitPrice'] 
//                } 
//              }
//            }
//          ],
//          as: 'product'
//        },
//      },
//      { $unwind: '$product' },
//      {
//        $group: {
//          _id: '$_id',
//            CustId: { $first: '$CustId' },
//             invoiceDate: { $first: '$invoiceDate' },
//             lineItems: { $push: '$lineItems' },
//             orderStatus: { $first: '$orderStatus' },
//             statusDate: { $first: '$statusDate' },
//              products: { $push: '$product' },
//    totalProdutos: { $sum: 1 },
//                valorTotal: { 
//                    $sum: '$product.subtotal'
//                },
//                custoTotal: {
//                  $sum: '$lineItems.Cost'
//                }
//        }
//      },  
        { $sort: { custoTotal: -1 }  }
        { $limit: 1 }
// ]);
```