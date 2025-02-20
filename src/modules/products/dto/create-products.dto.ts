import { IsString, IsOptional, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateProductsDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNumber()
  price: number;

  @IsNotEmpty()
  stock_quantity: number;

  @IsOptional()
  @IsNumber()
  discount_price?: number;

  @IsNumber()
  rating: number;

  @IsString()
  sku: string;

  @IsNumber()
  categoryId: number;

  @IsNumber()
  brandId: number;
}
