import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ParceIntPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    // transforma el valor a numero base 10
    const val = parseInt(value, 10);
    // si no es numero retorna
    if (isNaN(val)) {
      throw new BadRequestException(value + ' is not an integer');
    }
    return val;
  }
}
