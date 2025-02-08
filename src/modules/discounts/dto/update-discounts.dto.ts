import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthDto } from './create-discounts.dto';

export class UpdateAuthDto extends PartialType(CreateAuthDto) {}
