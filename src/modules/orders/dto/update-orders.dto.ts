import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthDto } from './create-orders.dto';

export class UpdateAuthDto extends PartialType(CreateAuthDto) {}
