'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customization extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Customization.hasMany(models.SelectedAmenities, {
        foreignKey: 'customization_id',
        as: 'customization',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });  
      Customization.hasMany(models.SelectedUtilities, {
        foreignKey: 'customization_id',
        as: 'customization',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });  
      Customization.belongsTo(models.Quotations,{
        foreignKey: 'quotation_id',
        as:'quotation',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      })
      Customization.belongsTo(models.MasterUnits,{
        foreignKey: 'unit_id',
        as:'units',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      })
      Customization.belongsTo(models.PrimaryPrize,{
        foreignKey: 'primary_price',
        as:'primary_price',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      })
      Customization.belongsTo(models.SecondaryPrize,{
        foreignKey: 'secondary_price',
        as:'secondary_price',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      })
      Customization.belongsTo(models.OneTimeCharges,{
        foreignKey: 'one_time_charges',
        as:'one_time_charges',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      })
      Customization.belongsTo(models.Refundables,{
        foreignKey: 'refundable_price',
        as:'refundable_price',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      })
      Customization.belongsTo(models.InventoryItems,{
        foreignKey: 'inventory_price',
        as:'inventory_price',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      })
      Customization.belongsTo(models.ParkingSlot,{
        foreignKey: 'parking_slot_price',
        as:'parking_slot_price',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      })
      Customization.belongsTo(models.MasterVendors, {
        foreignKey: 'created_by',
        as: 'createdby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      Customization.belongsTo(models.MasterVendors, {
        foreignKey: 'updated_by',
        as: 'updatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      Customization.belongsTo(models.MasterVendors, {
        foreignKey: 'deleted_by',
        as: 'deletedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
    }
  }
  Customization.init({
    quotation_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'quotations', 
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    unit_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'master_units', 
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    primary_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'primary_prices', 
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    secondary_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'secondary_prices', 
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    one_time_charges: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'one_time_charges', 
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    refundable_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'refundable_prices', 
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    inventory_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'inventory_prices', 
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    parking_slot_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'parking_slot_prices', 
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
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
    modelName: 'Customization',
    tableName: 'customizations',
    timestamps: true,
    paranoid: true,
    createdAt: 'created_at', 
    updatedAt: 'updated_at', 
    deletedAt: 'deleted_at', 
  });
  return Customization;
};