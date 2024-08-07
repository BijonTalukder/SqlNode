require('dotenv').config();
const { Sequelize } = require('sequelize');
const mysql = require('mysql2/promise');

// Database configuration
const dbConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
};

// Create a connection to check and create the database
const createDatabaseIfNotExists = async () => {
    const connection = await mysql.createConnection(dbConfig);
    try {
        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\``);
        console.log('Database created or already exists.');
    } finally {
        await connection.end();
    }
};

// Create a Sequelize instance with the database name
const createSequelizeInstance = () => {
    return new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql',
        logging: false
    });
};

const dbConnection = async () => {
    try {
        // Ensure database exists
        await createDatabaseIfNotExists();

        // Create a Sequelize instance with the correct database name
        const sequelize = createSequelizeInstance();

        // Test the connection
        await sequelize.authenticate();
        console.log(`Database connected successfully with ${process.env.DB_NAME} 🔥`);

        // Export sequelize for use in other modules
        module.exports = {
            sequelize
        };
    } catch (error) {
        console.error(`Unable to connect to the database: ${error}`);
    }
};

module.exports={
    dbConnection
    
}