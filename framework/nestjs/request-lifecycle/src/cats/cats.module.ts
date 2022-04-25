import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { CatsGuard } from 'src/guards/cats.guard';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { CatsFilter } from 'src/filters/cats.filter';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
