import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateBrandDto {
    @IsNotEmpty()
    brand_name: string

    @IsOptional()
    description: string

    @IsOptional()
    logo_url: string
}
