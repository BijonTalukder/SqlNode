import { DataTypes } from "sequelize";
import sequelize from './index.js';
// import sequelize from ".";

const ErpModule = sequelize.define('ErpModule', {
  moduleID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  moduleName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  moduleImage: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isUrl: true, 
    },
  },
  moduleIcon: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  moduleStatus: {
    type: DataTypes.BOOLEAN,
    defaultValue: true, 
    allowNull: false,
  },
  orderBy: {
    type: DataTypes.INTEGER,
    allowNull: true, 
  }
}, {
  tableName: 'erp_modules', 
  timestamps: true, 
});

export default ErpModule;
