const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const mysql = require('mysql2/promise');
const { dbConnection } = require('./config/dbConnect');
const router = require('./routes/route');


const app = express();
app.use(express.json()); 
app.use('/api/v1',router)
app.listen(4000,async()=>{
    console.log("server is listen at port");

await dbConnection();
})
