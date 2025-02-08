import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthDto } from './create-role.dto';

export class UpdateAuthDto extends PartialType(CreateAuthDto) {}
