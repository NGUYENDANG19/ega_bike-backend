import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateFeedbackDto {
    @IsNotEmpty()
    rating: number

    @IsNotEmpty()
    comments: string

    @IsOptional()
    is_resolved: boolean

    @IsNotEmpty()
    user_id: number

    @IsOptional()
    product_id: number

    @IsOptional()
    order_id: number
}
 