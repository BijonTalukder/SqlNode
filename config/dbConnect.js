
import mysql from 'mysql2/promise';
import sequelize from '../model/index.js';
import { dotenvHelper } from './dotenv.js';

// dotenv.config();


  const createDatabaseIfNotExists = async () => {
    // console.log("call2");
    
    const connection = await mysql.createConnection(
        {
            host: dotenvHelper.dbConfig.host,
            user: dotenvHelper.dbConfig.user,
            password: dotenvHelper.dbConfig.password,
          }
    );
    // console.log(connection,"call3");
    
    try {
        const res = await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dotenvHelper.dbConfig.database}\``);
        // console.log("call this",res);
        
        console.log('Database created or already exists.');
    } finally {
      await connection.end();
    }
  };
 export const setup = async () => {
    try {
        // console.log("call 1");
        
      await createDatabaseIfNotExists();
      await sequelize.authenticate();
      console.log('Database connected...');
  
      await sequelize.sync({ force: true });
      console.log('Database & tables created!');
    } catch (error) {
      console.error('Error setting up database:', error);
    }
  };