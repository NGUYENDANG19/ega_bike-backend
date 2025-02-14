import { IsNotEmpty } from "class-validator";

export class CreateCartItemDto {
    @IsNotEmpty()
    quantity: number

    @IsNotEmpty()
    cart_id: number

    @IsNotEmpty()
    product_id: number
}
