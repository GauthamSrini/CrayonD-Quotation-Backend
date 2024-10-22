'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SelectedUtilities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SelectedUtilities.belongsTo(models.MasterUtilities, {
        foreignKey: 'utility_id',
        as: 'utility',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      SelectedUtilities.belongsTo(models.Customization, {
        foreignKey: 'customization_id',
        as: 'UtilityCustomization',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }); 
      SelectedUtilities.belongsTo(models.MasterVendors, {
        foreignKey: 'created_by',
        as: 'createdby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      SelectedUtilities.belongsTo(models.MasterVendors, {
        foreignKey: 'updated_by',
        as: 'updatedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      SelectedUtilities.belongsTo(models.MasterVendors, {
        foreignKey: 'deleted_by',
        as: 'deletedby',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });    
    }
  }
  SelectedUtilities.init({
     utility_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'master_utilities', 
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    customization_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'customizations', 
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    discount_percent: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        notEmpty: true,
      }
    },
    discount_amount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        notEmpty: true,
      }
    },
    total_price: {
      type: DataTypes.INTEGER,
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
    modelName: 'SelectedUtilities',
    tableName: 'selected_utilities',
    timestamps: true,
    paranoid: true,
    createdAt: 'created_at', 
    updatedAt: 'updated_at', 
    deletedAt: 'deleted_at', 
  });
  return SelectedUtilities;
};