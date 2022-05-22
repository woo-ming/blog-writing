import { plainToClass, Type } from 'class-transformer';
import { IsEnum, IsNumber, IsString, validateSync } from 'class-validator';

enum Environment {
  PRODUCTION = 'prod',
  DEVELOPMENT = 'dev',
  LOCAL = 'local',
}

class EnvironmentVariables {
  //Application
  @IsEnum(Environment)
  readonly NODE_ENV: Environment;

  @IsNumber()
  readonly PORT: number;

  @IsString()
  readonly TOKEN_ISSUER: string;

  @IsString()
  readonly ACCESS_TOKEN_SECRET: string;

  @IsString()
  readonly ACCESS_TOKEN_EXPIRE_TIME: string;

  @IsString()
  readonly REFRESH_TOKEN_SECRET: string;

  @IsString()
  readonly REFRESH_TOKEN_EXPIRE_TIME: string;

  // Database ENV
  @IsString()
  readonly DB_HOST: string;

  @IsNumber()
  readonly DB_PORT: number;

  @IsString()
  readonly DB_USERNAME: string;

  @IsString()
  readonly DB_PASSWORD: string;

  @IsString()
  readonly DB_NAME: string;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToClass(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
