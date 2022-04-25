import {
  ArgumentMetadata,
  Injectable,
  Logger,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class GlobalPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    Logger.log('Global Pipe');
    return value;
  }
}
