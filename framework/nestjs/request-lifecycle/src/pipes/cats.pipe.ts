import {
  ArgumentMetadata,
  Injectable,
  Logger,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class CatsPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    Logger.log('Cats Pipe');
    return value;
  }
}
