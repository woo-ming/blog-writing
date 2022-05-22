import { registerAs } from '@nestjs/config';
import 'dotenv/config';

interface ApiServerConfiguration {
  port: number;
  tokenIssuer: string;
  accessTokenSecret: string;
  accessTokenExpireTime: string;
  refreshTokenSecret: string;
  refreshTokenExpireTime: string;
}

const {
  NODE_ENV,
  PORT,
  TOKEN_ISSUER,
  ACCESS_TOKEN_SECRET,
  ACCESS_TOKEN_EXPIRE_TIME,
  REFRESH_TOKEN_SECRET,
  REFRESH_TOKEN_EXPIRE_TIME,
} = process.env;

const PREFIX_DEV_STAGING = 'DEV_';
const PREFIX_LOCAL_STAGING = 'LOCAL_';

const configuration: {
  prod: ApiServerConfiguration;
  dev: ApiServerConfiguration;
  local: ApiServerConfiguration;
} = {
  prod: {
    port: +PORT,
    tokenIssuer: TOKEN_ISSUER,
    accessTokenSecret: ACCESS_TOKEN_SECRET,
    accessTokenExpireTime: ACCESS_TOKEN_EXPIRE_TIME,
    refreshTokenSecret: REFRESH_TOKEN_SECRET,
    refreshTokenExpireTime: REFRESH_TOKEN_EXPIRE_TIME,
  },
  dev: {
    port: +PORT,
    tokenIssuer: PREFIX_DEV_STAGING + TOKEN_ISSUER,
    accessTokenSecret: PREFIX_DEV_STAGING + ACCESS_TOKEN_SECRET,
    accessTokenExpireTime: ACCESS_TOKEN_EXPIRE_TIME,
    refreshTokenSecret: PREFIX_DEV_STAGING + REFRESH_TOKEN_SECRET,
    refreshTokenExpireTime: REFRESH_TOKEN_EXPIRE_TIME,
  },
  local: {
    port: +PORT,
    tokenIssuer: PREFIX_LOCAL_STAGING + TOKEN_ISSUER,
    accessTokenSecret: PREFIX_LOCAL_STAGING + ACCESS_TOKEN_SECRET,
    accessTokenExpireTime: ACCESS_TOKEN_EXPIRE_TIME,
    refreshTokenSecret: PREFIX_LOCAL_STAGING + REFRESH_TOKEN_SECRET,
    refreshTokenExpireTime: REFRESH_TOKEN_EXPIRE_TIME,
  },
};

export const apiServerConfig = registerAs(
  'app',
  (): ApiServerConfiguration =>
    ({
      port: configuration[NODE_ENV].port,
      tokenIssuer: configuration[NODE_ENV].tokenIssuer,
      accessTokenSecret: configuration[NODE_ENV].accessTokenSecret,
      accessTokenExpireTime: configuration[NODE_ENV].accessTokenExpireTime,
      refreshTokenSecret: configuration[NODE_ENV].refreshTokenSecret,
      refreshTokenExpireTime: configuration[NODE_ENV].refreshTokenExpireTime,
    } as ApiServerConfiguration),
);
