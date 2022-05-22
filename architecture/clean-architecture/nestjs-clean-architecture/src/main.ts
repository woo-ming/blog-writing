import { NestFactory } from '@nestjs/core';
import { RootModule } from './application/di/root.module';

const { PORT } = process.env;

async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  await app.listen(PORT);
}
bootstrap();
