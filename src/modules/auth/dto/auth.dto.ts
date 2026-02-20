import { isEmail, IsEmail, IsMongoId, IsOptional, IsStrongPassword, MaxLength, MinLength } from 'class-validator';

export class SignupDto {
    @MaxLength(50)
    @MinLength(2)
    name: string;
    @IsEmail()
    email: string;
    @IsStrongPassword()
    password: string;
    @IsMongoId()
    @IsOptional()
    user: string;
}

export class SigninDto {

    @IsEmail()
    email: string;
    @IsStrongPassword()
    password: string;
}
