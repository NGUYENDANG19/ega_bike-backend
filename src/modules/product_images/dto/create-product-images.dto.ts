import { IsString, IsNumber } from 'class-validator';

export class CreateProductImageDto {
  @IsString()
  url: string;

  @IsNumber()
  productId: number;
}
