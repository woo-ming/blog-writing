import { ArgumentsHost, Catch, ExceptionFilter, Logger } from '@nestjs/common';

@Catch()
export class CatsFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    Logger.log('Cats Filters');
  }
}
