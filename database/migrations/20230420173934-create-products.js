//migration de users creada por sequelize-cli y editada por nosotros
'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.createTable('products', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        price_id: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
  
      }, { transaction })
      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  },
  down: async (queryInterface, /*Sequelize*/) => {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.dropTable('products', { transaction })
      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  }
}