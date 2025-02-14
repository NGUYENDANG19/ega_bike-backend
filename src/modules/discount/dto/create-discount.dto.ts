import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";
import { DiscountType } from "src/common/enums/types";

export class CreateDiscountDto {
    @IsNotEmpty()
    code: string

    @IsOptional()
    description: string

    @IsNotEmpty()
    discount_type: DiscountType

    @IsNotEmpty()
    @IsNumber()
    discount_value: number

    @IsNotEmpty()
    start_date: Date

    @IsNotEmpty()
    end_date: Date

    @IsNotEmpty()
    is_active: boolean
}
