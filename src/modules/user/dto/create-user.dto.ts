import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(6) // Mật khẩu tối thiểu 6 ký tự
    password: string;

    @IsNotEmpty()
    @IsString()
    phone: string;

    @IsOptional()
    @IsString()
    address?: string;
}
