import { DataTypes } from "sequelize";
import sequelize from './index.js';
// import sequelize from ".";

const erpAddonModel = sequelize.define('ErpModule', {
    addonID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    addonName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    addonImage: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true, // Validates that the value is a URL
      },
    },
    addonIcon: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    addonStatus: {
      type: DataTypes.BOOLEAN,
      defaultValue: true, // Default value for this field
      allowNull: false,
    },
    addonPage: {
      type: DataTypes.JSON,
      allowNull: true,
      validate: {
        isArrayOfObjects(value) {
          if (!Array.isArray(value)) {
            throw new Error('addonPage must be an array');
          }
          value.forEach(item => {
            if (typeof item !== 'object' || item === null) {
              throw new Error('Each item in addonPage must be an object');
            }
            if (!item.pageName || !item.pageRoute) {
              throw new Error('Each object in addonPage must contain pageName and pageRoute');
            }
          });
        },
      },
    },
    orderBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {
    tableName: 'erp_addons', // Use the desired table name
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  });
export default erpAddonModel;
