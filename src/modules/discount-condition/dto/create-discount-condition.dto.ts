import { IsNotEmpty } from "class-validator";
import { DiscountConditionType } from "src/common/enums/types";

export class CreateDiscountConditionDto {
    @IsNotEmpty()
    condition_type: DiscountConditionType

    @IsNotEmpty()
    condition_value: number

    @IsNotEmpty()
    discount_id: number
}
