'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MasterPricingComponents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MasterPricingComponents.hasMany(models.PrimaryPrize, {
        foreignKey: 'pricing_component_id',
        as: 'pricing_component_primary_price',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      MasterPricingComponents.hasMany(models.SecondaryPrize, {
        foreignKey: 'pricing_component_id',
        as: 'pricing_component_secondary_price',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      MasterPricingComponents.hasMany(models.OneTimeCharges, {
        foreignKey: 'pricing_component_id',
        as: 'pricing_component_one_time_price',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      MasterPricingComponents.hasMany(models.Refundables, {
        foreignKey: 'pricing_component_id',
        as: 'pricing_component_refundables_price',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      MasterPricingComponents.hasMany(models.InventoryItems, {
        foreignKey: 'pricing_component_id',
        as: 'pricing_component_inventory_price',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });  
      MasterPricingComponents.hasMany(models.ParkingSlot, {
        foreignKey: 'pricing_component_id',
        as: 'pricing_component_parking_price',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      MasterPricingComponents.belongsTo(models.MasterVendors, {
        foreignKey: 'created_by',
        as: 'createdby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      MasterPricingComponents.belongsTo(models.MasterVendors, {
        foreignKey: 'updated_by',
        as: 'updatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      MasterPricingComponents.belongsTo(models.MasterVendors, {
        foreignKey: 'deleted_by',
        as: 'deletedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
    }
  }
  MasterPricingComponents.init({
     name: {
       type: DataTypes.STRING,
       allowNull: false,
       validate: {
         notEmpty: true,
       }
     },
     is_active: {
       type: DataTypes.BOOLEAN,
       defaultValue: true,
       validate: {
         isIn: [[true, false]],
       }
     },
     created_by: {
       type: DataTypes.INTEGER,
       allowNull: false,
       references: {
        model: 'master_vendors', 
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
     },
     updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'master_vendors', 
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    deleted_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'master_vendors', 
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
  }, {
    sequelize,
    modelName: 'MasterPricingComponents',
    tableName: 'master_pricing_components',
    timestamps: true,
    paranoid: true,
    createdAt: 'created_at', 
    updatedAt: 'updated_at', 
    deletedAt: 'deleted_at', 
  });
  return MasterPricingComponents;
};