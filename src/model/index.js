import { Sequelize } from 'sequelize';
import { dotenvHelper } from '../config/dotenv.js';

const sequelize = new Sequelize(dotenvHelper.dbConfig.database, dotenvHelper.dbConfig.user, dotenvHelper.dbConfig.password, {
  host: dotenvHelper.dbConfig.host,
  dialect: 'mysql',
  dialectOptions: {
    connectTimeout: 10000, 
  },
  logging: false, 
});
console.log(sequelize);

export default sequelize