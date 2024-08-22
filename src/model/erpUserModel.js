import { DataTypes } from 'sequelize';
import sequelize from './index.js';

const erpUserModel = sequelize.define('erpUsers', {

  erpUserId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true, 
    allowNull: false, 
  },
  erpUsername: {
    type: DataTypes.STRING(150),
    allowNull: false, 
    unique: true, 
    validate: {
      len: [1, 150] 
    }
  },
  erpUserEmail: {
    type: DataTypes.STRING(150),
    allowNull: false, 
    unique: true, 
    validate: {
      isEmail: true,
      len: [1, 150] 
    }
  },
  erpUserPhone: {
    type: DataTypes.STRING(150),
    validate: {
      is: /^[0-9\-\+\(\) ]+$/i 
    }
  },
  erpUserFullName: {
    type: DataTypes.STRING(150),
    validate: {
      len: [1, 150] 
    }
  },
  erpUserEmailVerified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false 
  },
  erpUserPhoneVerified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false 
  },
  erpUserStatus: {
    type: DataTypes.ENUM('0', '1', '2'), 
    defaultValue: '1', 
    validate: {
      isIn: [['0', '1', '2']] 
    }
  },
  erpUserRole:{
    type:DataTypes.ENUM("user","admin"),
    defaultValue:"user"
  }

}, {

  timestamps: true, 
  // underscored: true // Use snake_case for column names in the database
});

export default erpUserModel;
