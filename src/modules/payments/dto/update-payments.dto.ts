import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthDto } from './create-payments.dto';

export class UpdateAuthDto extends PartialType(CreateAuthDto) {}
