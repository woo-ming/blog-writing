import { ArgumentsHost, Catch, ExceptionFilter, Logger } from '@nestjs/common';

@Catch()
export class GlobalFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    Logger.log('Global Filter...');
  }
}
