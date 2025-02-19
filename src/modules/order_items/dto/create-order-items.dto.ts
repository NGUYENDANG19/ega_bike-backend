import { IsNumber } from "class-validator";

export class CreateOrderItemDto {
  @IsNumber()
  quantity: number;

  @IsNumber()
  price: number;

  @IsNumber()
  orderId: number;

  @IsNumber()
  productId: number;
}
