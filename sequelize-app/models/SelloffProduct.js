const SelloffProducts = (sequelize, DataTypes) => {
  const SelloffProducts = sequelize.define(
    'SelloffProducts',
    {},
    { timestamps: false }
  );

  SelloffProducts.associate = (models) => {
    models.Product.belongsToMany(models.Selloff, {
      as: 'selloffs',
      through: SelloffProducts,
      foreignKey: 'productId',
      otherKey: 'selloffId',
    });

    models.Selloff.belongsToMany(models.Product, {
      as: 'products',
      through: SelloffProducts,
      foreignKey: 'selloffId',
      otherKey: 'productId',
    });
  };

  return SelloffProducts;
};

module.exports = SelloffProducts;