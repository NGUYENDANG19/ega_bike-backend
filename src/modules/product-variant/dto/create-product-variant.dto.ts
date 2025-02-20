import { IsNotEmpty, IsOptional } from "class-validator";
import { VariantName } from "src/common/enums/types";

export class CreateProductVariantDto {
    @IsNotEmpty()
    variant_name: VariantName;

    @IsNotEmpty()
    variant_value: string;

    @IsNotEmpty()
    price: number;

    @IsNotEmpty()
    stock_quantity: number;

    @IsOptional()
    image_url: string;

    @IsNotEmpty()
    product_id: number;
}
