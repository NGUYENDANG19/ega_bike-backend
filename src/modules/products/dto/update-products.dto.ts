import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthDto } from './create-products.dto';

export class UpdateAuthDto extends PartialType(CreateAuthDto) {}
