import { IsNumber, IsEnum } from 'class-validator';
import { PaymentMethod, PaymentStatus } from 'src/common/enums/types';

export class CreatePaymentDto {
  @IsNumber()
  amount: number;

  @IsEnum(PaymentMethod)
  payment_method: PaymentMethod;

  @IsEnum(PaymentStatus)
  status: PaymentStatus;

  @IsNumber()
  orderId: number;
}
