'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction()

    try {
      queryInterface.createTable(
        'users',
        {
          id: { 
            type: Sequelize.INTEGER, 
            primaryKey: true, 
            autoIncrement: true 
          },
          email: { 
            type: Sequelize.STRING,
            allowNull: false
          },
          password: { 
            type: Sequelize.STRING,
            allowNull: false
          },
          first_name: { 
            type: Sequelize.STRING,
            allowNull: false
          },
          last_name: { 
            type: Sequelize.STRING,
            allowNull: false
          }
        },
      )

      await transaction.commit()
    } catch (e) {
      await transaction.rollback()
      throw e
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
