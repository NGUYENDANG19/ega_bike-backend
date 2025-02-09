import { IsEmail, IsNotEmpty, IsOptional, MinLength } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsOptional()
  phone?: string;

  @IsOptional()
  address?: string;

  @IsNotEmpty()
  roleRoleId: number;
}
