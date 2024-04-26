import { IsDefined, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class userDto {
    @IsString()
    @IsEmail()
    @IsNotEmpty() //is not empty or is defined work same
    email: string;


    @IsString()
    @IsDefined()
    userName: string;
}

export class deleteUserDto {
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;
}