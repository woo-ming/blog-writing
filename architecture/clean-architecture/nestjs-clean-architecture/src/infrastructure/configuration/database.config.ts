import { registerAs } from '@nestjs/config';
import 'dotenv/config';

interface DatabaseConfiguration {
  host: string;
  port: number;
  userName: string;
  password: string;
  dbName: string;
}

const { NODE_ENV, DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME } =
  process.env;

const PREFIX_DEV_STAGING = 'DEV_';
const PREFIX_LOCAL_STAGING = 'LOCAL_';

const configuration: {
  prod: DatabaseConfiguration;
  dev: DatabaseConfiguration;
  local: DatabaseConfiguration;
} = {
  prod: {
    host: DB_HOST,
    port: +DB_PORT,
    userName: DB_USERNAME,
    password: DB_PASSWORD,
    dbName: DB_NAME,
  },
  dev: {
    host: DB_HOST,
    port: +DB_PORT,
    userName: DB_USERNAME,
    password: PREFIX_DEV_STAGING + DB_PASSWORD,
    dbName: PREFIX_DEV_STAGING + DB_NAME,
  },
  local: {
    host: DB_HOST,
    port: +DB_PORT,
    userName: DB_USERNAME,
    password: PREFIX_LOCAL_STAGING + DB_PASSWORD,
    dbName: PREFIX_LOCAL_STAGING + DB_NAME,
  },
};

export const databaseConfig = registerAs(
  'app',
  (): DatabaseConfiguration =>
    ({
      host: configuration[NODE_ENV].host,
      port: configuration[NODE_ENV].port,
      userName: configuration[NODE_ENV].userName,
      password: configuration[NODE_ENV].password,
      dbName: configuration[NODE_ENV].dbName,
    } as DatabaseConfiguration),
);
