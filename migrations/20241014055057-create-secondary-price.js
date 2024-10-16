'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('secondary_prices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      revenue_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      tax_group_id:{
        type: Sequelize.INTEGER,
        allowNull:false
      },
      pricing_component_id:{
        type: Sequelize.INTEGER,
        allowNull:false
      },
      chargable: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: true
      },
      price:{
        type: Sequelize.INTEGER,
        allowNull:false
      },
      dicount_percent:{
        type: Sequelize.INTEGER,
        allowNull:false
      },
      discount_amount:{
        type: Sequelize.INTEGER,
        allowNull:false
      },
      total_price:{
        type: Sequelize.INTEGER,
        allowNull:false
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false
      },
      created_by: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'master_vendors', 
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      updated_by: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'master_vendors', 
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      deleted_by: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'master_vendors', 
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') 
      },
      updated_at: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
      }
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('secondary_prices');
  }
};