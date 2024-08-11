// const { DataTypes } = require('sequelize');
// const sequelize = require('./index');  // Adjust the path to where you initialize sequelize

import { DataTypes } from "sequelize";
import sequelize from "./index.js";


const userModel = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
  
  },
  lastName: {
    type: DataTypes.STRING,
  
  },

});

export default  userModel;
