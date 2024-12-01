import { IsDefined, IsEmail, IsString, MaxLength, Min, MinLength } from "class-validator";

export class CreateUserDto {
    @IsDefined()
    @IsString()
    @IsEmail()
    email: string;
    @IsString()
    @MinLength(5)
    @MaxLength(40)
    name: string;
}
