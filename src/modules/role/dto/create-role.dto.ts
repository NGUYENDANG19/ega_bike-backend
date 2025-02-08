import { IsEmail, IsNotEmpty, IsOptional, MaxLength, MinLength } from "class-validator";

export class CreateAuthDto {
    @IsNotEmpty({ message: 'username không được để trống' })
    username: string;

    @IsNotEmpty({ message: 'email không được để trống' })
    @IsEmail({}, { message: 'email không hợp lệ' })
    email: string;

    @IsNotEmpty({ message: 'password không được để trống' })
    @MinLength(6, { message: 'Mật khẩu chứa ít nhất 6 ký tự' })
    password: string;
}
