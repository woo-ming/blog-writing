import { Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

export function functionalMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  Logger.log(`Functional Middleware...`);
  next();
}
