import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthDto } from './create-feedbacks.dto';

export class UpdateAuthDto extends PartialType(CreateAuthDto) {}
