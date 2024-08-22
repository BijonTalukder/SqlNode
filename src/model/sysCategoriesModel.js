import { DataTypes } from "sequelize";
import sequelize from "./index.js";
import sysAdmins from './sysAdminModel.js'; 

const sysCategoriesModel = sequelize.define('sysCategories', {
  sysCategoryID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  sysCategoryName: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  sysCategoryDesc: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  sysCategoryImage: {
    type: DataTypes.STRING(255),  
    allowNull: true,              
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true, 
  },
  createdBy: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: sysAdmins,
      key: 'sysAdminID',
    },
  },
  createdDateTime: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updatedBy: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
        model: sysAdmins,
        key: 'sysAdminID',
    },
  },
}, {
  timestamps: true,  // Disable automatic timestamps
});


export default sysCategoriesModel;