'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OneTimeCharges extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      OneTimeCharges.hasMany(models.Customization, {
        foreignKey: 'one_time_charge',
        as: 'one_time_charge',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });  
      OneTimeCharges.belongsTo(models.MasterRevenueTypes,{
        foreignKey: 'revenue_id',
        as:'revenue',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      })
      OneTimeCharges.belongsTo(models.MasterTaxGroups,{
        foreignKey: 'tax_group_id',
        as:'taxes',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      })
      OneTimeCharges.belongsTo(models.MasterPricingComponents,{
        foreignKey: 'pricing_component_id',
        as:'pricing_component',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      })
      OneTimeCharges.belongsTo(models.MasterVendors, {
        foreignKey: 'created_by',
        as: 'createdby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      OneTimeCharges.belongsTo(models.MasterVendors, {
        foreignKey: 'updated_by',
        as: 'updatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      OneTimeCharges.belongsTo(models.MasterVendors, {
        foreignKey: 'deleted_by',
        as: 'deletedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
    }
  }
  OneTimeCharges.init({
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
    chargable: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      validate: {
        isIn: [[true, false]],
      }
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
      allowNull:true,
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
    modelName: 'OneTimeCharges',
    tableName: 'one_time_charges',
    timestamps: true,
    paranoid: true,
    createdAt: 'created_at', 
    updatedAt: 'updated_at', 
    deletedAt: 'deleted_at', 
  });
  return OneTimeCharges;
};