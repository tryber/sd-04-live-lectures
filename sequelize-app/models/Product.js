const createProduct = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
    userId: DataTypes.INTEGER
  });

  Product.associate = (models) => {
    Product.belongsTo(models.User, { as: 'user', foreign_key: 'userId' });
  }

  return Product;
}

module.exports = createProduct;