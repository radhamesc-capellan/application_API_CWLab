//migration de users creada por sequelize-cli y editada por nosotros
'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.createTable('applications_payments', {
        id: {
          allowNull: false,
          type:Sequelize.BIGINT,
          primaryKey: true,
          autoIncrement: true,
        },
        application_id: {
          allowNull: false,
          type: Sequelize.UUID,
          foreignKey:true,
          // references: {
          //   model: 'users',
          //   key: 'id',
          // },
          onUpdate: 'CASCADE',
          onDelete: 'RESTRICT',
        },
        payment_intent: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
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
      await queryInterface.dropTable('applications_payments', { transaction })
      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  }
}