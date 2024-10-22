'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PrimaryPrize extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PrimaryPrize.hasMany(models.Customization, {
        foreignKey: 'primary_price',
        as: 'primary_price_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });  
      PrimaryPrize.belongsTo(models.MasterRevenueTypes,{
        foreignKey: 'revenue_id',
        as:'revenue_primary_price',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      })
      PrimaryPrize.belongsTo(models.MasterTaxGroups,{
        foreignKey: 'tax_group_id',
        as:'taxes_primary_price',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      })
      PrimaryPrize.belongsTo(models.MasterPricingComponents,{
        foreignKey: 'pricing_component_id',
        as:'pricing_component_primary_price',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      })
      PrimaryPrize.belongsTo(models.MasterVendors, {
        foreignKey: 'created_by',
        as: 'createdby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      PrimaryPrize.belongsTo(models.MasterVendors, {
        foreignKey: 'updated_by',
        as: 'updatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      PrimaryPrize.belongsTo(models.MasterVendors, {
        foreignKey: 'deleted_by',
        as: 'deletedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
    }
  }
  PrimaryPrize.init({
    revenue_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'master_revenue_types', 
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    tax_group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'master_tax_groups', 
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    pricing_component_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'master_pricing_components', 
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
      }
    },
    dicount_percent: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isInt: true,
      }
    },
    discount_amount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isInt: true,
      }
    },
    total_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
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
    modelName: 'PrimaryPrize',
    tableName: 'primary_prices',
    timestamps: true,
    paranoid: true,
    createdAt: 'created_at', 
    updatedAt: 'updated_at', 
    deletedAt: 'deleted_at', 
  });
  return PrimaryPrize;
};