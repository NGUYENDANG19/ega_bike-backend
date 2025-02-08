import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthDto } from './create-carts.dto';

export class UpdateAuthDto extends PartialType(CreateAuthDto) {}
