'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('customizations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quotation_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'quotations', 
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      unit_id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'master_units', 
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      primary_price:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'primary_prices', 
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      secondary_price:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'secondary_prices', 
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      one_time_charge:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'one_time_charges', 
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      refundable_price:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'refundable_prices', 
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      inventory_price:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'inventory_prices', 
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      parking_slot_price:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'parking_slot_prices', 
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
    await queryInterface.dropTable('customizations');
  }
};