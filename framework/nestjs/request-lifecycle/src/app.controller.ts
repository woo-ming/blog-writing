import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { CatsGuard } from './guards/cats.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
