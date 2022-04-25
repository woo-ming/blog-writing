import { Injectable, Logger, NestMiddleware } from '@nestjs/common';

@Injectable()
export class AllRoutesMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    Logger.log('All Routes Middleware...');
    next();
  }
}
