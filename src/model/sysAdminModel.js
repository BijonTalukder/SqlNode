import { DataTypes } from "sequelize";
import sequelize from "./index.js";

const sysAdminModel = sequelize.define('sysAdmins', {
  sysAdminId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  sysAdminUsername: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  sysAdminFullName: {
    type: DataTypes.STRING,
  },
  sysAdminEmail: {
    type: DataTypes.STRING,
    unique: true,
  },
  sysAdminPhone: {
    type: DataTypes.STRING,
  },
  sysAdminPassword: {
    type: DataTypes.STRING,
  },
  sysAdminRole: {
    type: DataTypes.STRING,
  },
  sysAdminStatus: {
    type: DataTypes.ENUM('inactive', 'active', 'blocked'), // Enum for predefined statuses
    allowNull: false,
    defaultValue: 'inactive', // Optional default value
  },
}, {
  timestamps: true,
});

export default sysAdminModel;
