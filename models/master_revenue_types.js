'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MasterRevenueTypes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MasterRevenueTypes.hasMany(models.PrimaryPrize, {
        foreignKey: 'revenue_id',
        as: 'revenue',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      MasterRevenueTypes.hasMany(models.SecondaryPrize, {
        foreignKey: 'revenue_id',
        as: 'revenue',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      MasterRevenueTypes.hasMany(models.OneTimeCharges, {
        foreignKey: 'revenue_id',
        as: 'revenue',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      MasterRevenueTypes.hasMany(models.Refundables, {
        foreignKey: 'revenue_id',
        as: 'revenue',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      MasterRevenueTypes.hasMany(models.InventoryItems, {
        foreignKey: 'revenue_id',
        as: 'revenue',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });  
      MasterRevenueTypes.hasMany(models.ParkingSlot, {
        foreignKey: 'revenue_id',
        as: 'revenue',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      MasterRevenueTypes.belongsTo(models.MasterVendors, {
        foreignKey: 'created_by',
        as: 'createdby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      MasterRevenueTypes.belongsTo(models.MasterVendors, {
        foreignKey: 'updated_by',
        as: 'updatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      MasterRevenueTypes.belongsTo(models.MasterVendors, {
        foreignKey: 'deleted_by',
        as: 'deletedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
    }
  }
  MasterRevenueTypes.init({
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
    modelName: 'MasterRevenueTypes',
    tableName: 'master_revenue_types',
    timestamps: true,
    paranoid: true,
    createdAt: 'created_at', 
    updatedAt: 'updated_at', 
    deletedAt: 'deleted_at', 
  });
  return MasterRevenueTypes;
};