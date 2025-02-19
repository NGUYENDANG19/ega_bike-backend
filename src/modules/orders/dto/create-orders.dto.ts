import { IsNumber, IsEnum, IsOptional } from "class-validator";
import { OrderStatus } from "src/common/enums/types";

export class CreateOrderDto {
  @IsNumber()
  userId: number;

  @IsNumber()
  total_amount: number;

  @IsEnum(OrderStatus)
  @IsOptional()
  status?: OrderStatus;
}
