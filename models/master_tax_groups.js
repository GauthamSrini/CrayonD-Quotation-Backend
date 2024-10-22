'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MasterTaxGroups extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MasterTaxGroups.hasMany(models.PrimaryPrize, {
        foreignKey: 'tax_group_id',
        as: 'taxs_primary_price',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      MasterTaxGroups.hasMany(models.SecondaryPrize, {
        foreignKey: 'tax_group_id',
        as: 'taxs_secondary_price',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      MasterTaxGroups.hasMany(models.OneTimeCharges, {
        foreignKey: 'tax_group_id',
        as: 'taxs_one_time_price',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      MasterTaxGroups.hasMany(models.Refundables, {
        foreignKey: 'tax_group_id',
        as: 'taxs_refundables_price',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      MasterTaxGroups.hasMany(models.InventoryItems, {
        foreignKey: 'tax_group_id',
        as: 'taxs_inventory_price',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });  
      MasterTaxGroups.hasMany(models.ParkingSlot, {
        foreignKey: 'tax_group_id',
        as: 'taxs_parking_price',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      MasterTaxGroups.belongsTo(models.MasterVendors, {
        foreignKey: 'created_by',
        as: 'createdby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      MasterTaxGroups.belongsTo(models.MasterVendors, {
        foreignKey: 'updated_by',
        as: 'updatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      MasterTaxGroups.belongsTo(models.MasterVendors, {
        foreignKey: 'deleted_by',
        as: 'deletedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
    }
  }
  MasterTaxGroups.init({
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
    modelName: 'MasterTaxGroups',
    tableName: 'master_tax_groups',
    timestamps: true,
    paranoid: true,
    createdAt: 'created_at', 
    updatedAt: 'updated_at', 
    deletedAt: 'deleted_at', 
  });
  return MasterTaxGroups;
};