
import { DataTypes } from "sequelize";
import sequelize from "./index.js";


const sysAdminModel = sequelize.define('sysAdmins', {

    sysAdminId:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false

    }, 
    sysAdminUsername:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
    },
   sysAdminFullName: {
    type: DataTypes.STRING,
  
   },
  sysAdminEmail: {
    type: DataTypes.STRING,
    unique:true
  
  },
  sysAdminPhone: {
    type: DataTypes.STRING,
  
  },
  sysAdminPassword: {
    type: DataTypes.STRING,
  
  },
  sysAdminRole:{
    type: DataTypes.STRING,

  },
  sysAdminStatus:{
    type:DataTypes.NUMBER, //0=inactive,1=active,2=block

  },


},{
    timestamps:true
});

export default  sysAdminModel;
