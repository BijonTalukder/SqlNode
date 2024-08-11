import dotenv from 'dotenv';
import path from 'path'
dotenv.config({ path: path.join(process.cwd(), ".env") });
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '1234',
  database: process.env.DB_NAME || 'FakeDatabase',
};
export const dotenvHelper = {
    dbConfig,
    port: process.env.PORT,
    database_url: process.env.DATABASE_URL,
  };