import { Sequelize } from 'sequelize';
import { dotenvHelper } from '../config/dotenv.js';
// import { dbConfig } from '../config/dbConnect.js';
// dbConfig
// dotenvHelper
const sequelize = new Sequelize(dotenvHelper.dbConfig.database, dotenvHelper.dbConfig.user, dotenvHelper.dbConfig.password, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false, // Disable logging if not needed
  });

export default sequelize