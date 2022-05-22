import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { apiServerConfig } from 'src/infrastructure/configuration/api-server.config';
import { databaseConfig } from 'src/infrastructure/configuration/database.config';
import { validate } from 'src/infrastructure/configuration/env-validator';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [apiServerConfig, databaseConfig],
      envFilePath: '.env',
      validate,
    }),
  ],
  controllers: [],
  providers: [],
})
export class RootModule {}
