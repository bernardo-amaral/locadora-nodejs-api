const dotenv = require('dotenv');

const envFile = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env';

dotenv.config({ path: envFile });

module.exports = {
  driver: process.env.DB_DRIVER,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  jwtSecret: 'bandernach',
};
