import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsEnum, IsNotEmpty, IsString, Matches, MinLength } from "class-validator";
import { RoleEnum } from "src/core/enum/index.enum";

export class UserDto {
    @ApiProperty({ description: 'First Name', example: 'John' })
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @ApiProperty({ description: 'Last Name', example: 'Doe' })
    @IsString()
    @IsNotEmpty()
    lastName: string;

    @ApiProperty({ description: 'Email', example: 'johndoe123@gmail.com' })
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({ description: 'Password', example: 'ComplexPassw0rd!' })
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @Matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/, {
        message: 'password must contain at least one number, one lowercase and one uppercase letter, and be at least 8 characters long',
    })
    password: string;

    @ApiProperty({ description: 'Role', example: 'USER' })
    @IsString()
    @IsNotEmpty()
    // @IsEnum(RoleEnum)
    role: string;

    @ApiProperty({ description: 'Address', example: 'houstom123street' })
    @IsString()
    @IsNotEmpty()
    address: string;


    @ApiProperty({ description: 'Date of Birth', example: '1990-01-01' }) // Fixed the type to Date
    @IsNotEmpty()
    dob: Date;

    @ApiProperty({ description: 'Description of the user', example: 'lorem ipsum' })
    @IsString()
    @IsNotEmpty()
    description: string;

    @ApiProperty({ description: 'Profile Image URL', example: 'https://example.com/image.jpg' })
    @IsString()
    @IsNotEmpty()
    profile: string;
}

export class GetSpecificTask {
    @ApiProperty({ description: 'The ID of the task', example: '1' })
    @IsString()
    @IsNotEmpty()
    id: string;
}

export class loginDto {
    @ApiProperty({ description: 'Email', example: 'johndoe123@gmail.com' })
    @IsNotEmpty()
    @IsEmail()
    @IsString()
    userEmail: string;

    @ApiProperty({ description: 'Password', example: 'johndoe123' })
    @IsNotEmpty()
    @IsString()
    password: string;
}