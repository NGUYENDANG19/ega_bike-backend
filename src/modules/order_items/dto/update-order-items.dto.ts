import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthDto } from './create-order-items.dto';

export class UpdateAuthDto extends PartialType(CreateAuthDto) {}
