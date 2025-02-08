import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthDto } from './create-categories.dto';

export class UpdateAuthDto extends PartialType(CreateAuthDto) {}
