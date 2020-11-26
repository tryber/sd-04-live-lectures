const productsController = require('./productController');
const usersController = require('./usersController');
const selloffsController = require('./selloffsController');

module.exports = {
  products: productsController,
  users: usersController,
  saleoffs: selloffsController
}