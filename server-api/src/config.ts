import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
  env: process.env.API_ENV ?? 'LOCAL',
  connection: process.env.DB_CONNECTION ?? 'mongodb',
  host: process.env.DB_HOST ?? 'localhost',
  database_port: process.env.DB_PORT ?? '27017',
  database_name: process.env.DB_NAME ?? 'api-news',
  username: process.env.DB_USER ?? 'root',
  password: process.env.DB_PASSWORD ?? 'root',
  port: process.env.PORT ?? '8000',
};

const credentials = `${config.username}:${config.password}`;
const settings = `${config.host}:${config.database_port}`;

export const uri = `${config.connection}://${credentials}@${settings}`;
