import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalFilter } from './filters/global.filter';
import { GlobalGuard } from './guards/global.guard';
import { GlobalInterceptor } from './Interceptors/global.interceptor';
import { functionalMiddleware } from './middlewares/function.middleware';
import { GlobalPipe } from './pipes/global.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.useGlobalGuards(new GlobalGuard());
  // app.useGlobalPipes(new GlobalPipe());
  // app.useGlobalInterceptors(new GlobalInterceptor());
  // app.useGlobalFilters(new GlobalFilter());
  app.use(functionalMiddleware);

  await app.listen(3000);
}
bootstrap();
