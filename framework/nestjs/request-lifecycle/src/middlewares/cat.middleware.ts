import { Injectable, Logger, NestMiddleware } from '@nestjs/common';

@Injectable()
export class CatMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    Logger.log('Cat Middleware...');
    throw new Error();
    next();
  }
}
