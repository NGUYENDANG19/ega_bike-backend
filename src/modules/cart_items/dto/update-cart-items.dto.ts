import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthDto } from './create-cart-items.dto';

export class UpdateAuthDto extends PartialType(CreateAuthDto) {}
