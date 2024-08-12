
import { DataTypes } from "sequelize";
import sequelize from "./index.js";


const erpUserModel = sequelize.define('erpUsers', {
  firstName: {
    type: DataTypes.STRING,
  
  },
  lastName: {
    type: DataTypes.STRING,
  
  },

});

export default  erpUserModel;
