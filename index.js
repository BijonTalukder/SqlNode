import express from'express';
import { Sequelize, DataTypes } from 'sequelize';
import mysql  from 'mysql2/promise';

// Initialize Express app
const app = express();
app.use(express.json()); // Middleware to parse JSON

// Database connection configuration
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '1234',
};

// Create a new Sequelize instance
const sequelize = new Sequelize('FakeDatabase', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, // Disable logging if not needed
});

// Define a User model
const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Function to create the database if it doesn't exist
const createDatabaseIfNotExists = async () => {
  const connection = await mysql.createConnection(dbConfig);
  try {
    await connection.query(`CREATE DATABASE IF NOT EXISTS FakeDatabase`);
    console.log('Database created or already exists.');
  } finally {
    await connection.end();
  }
};

// Main function to run setup tasks
const setup = async () => {
  try {
    await createDatabaseIfNotExists();
    await sequelize.authenticate();
    console.log('Database connected...');

    await sequelize.sync({ force: true });
    console.log('Database & tables created!');
  } catch (error) {
    console.error('Error setting up database:', error);
  }
};

setup();

// Define routes
app.post('/users', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await User.create({ username, email, password });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Start the server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
