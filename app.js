import express from 'express';
import { Sequelize, DataTypes } from 'sequelize';
import mysql from 'mysql2/promise';
import {  setup } from './config/dbConnect.js'; // Ensure you use .js extension
import router from './routes/route.js'; // Ensure you use .js extension

const app = express();
app.use(express.json());
app.use('/api/v1', router);

app.listen(4000, async () => {
    console.log("server is listening at port 4000");
    
    await setup()
});
