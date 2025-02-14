import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateRoleDto {
@IsString()
  name: string;
  
@IsString()
@IsOptional()
  description?: string; // Có thể để trống
}
