const Selloff = (sequelize, DataTypes) => {
  const Selloff = sequelize.define('Selloff', {
    name: DataTypes.STRING,
    discount: DataTypes.FLOAT,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
  });

  return Selloff;
};

module.exports = Selloff;