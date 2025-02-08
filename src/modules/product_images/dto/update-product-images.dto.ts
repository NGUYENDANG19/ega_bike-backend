import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthDto } from './create-product-images.dto';

export class UpdateAuthDto extends PartialType(CreateAuthDto) {}
