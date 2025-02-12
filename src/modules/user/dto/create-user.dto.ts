// src/users/dto/create-user.dto.ts
import { IsEmail, IsNotEmpty, IsString, MinLength, IsNumber } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @MinLength(6)
    password: string;

    @IsString()
    phone?: string;

    @IsString()
    address?: string;

    @IsNotEmpty()
    @IsNumber()
    role_id: number;  
}
