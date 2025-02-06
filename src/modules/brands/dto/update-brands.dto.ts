import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthDto } from './create-brands.dto';

export class UpdateAuthDto extends PartialType(CreateAuthDto) {}
