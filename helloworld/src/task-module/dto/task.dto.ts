import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class TaskDto {
    @IsString()
    @IsNotEmpty()
    id: string

    @IsString()
    @IsNotEmpty()
    name: string

    @IsNumber()
    @IsNotEmpty()
    duration: number

    @IsBoolean()
    @IsNotEmpty()
    completed: boolean

    @IsString()
    @IsNotEmpty()
    description: string

    @IsString()
    @IsNotEmpty()
    owner: string
}


export class DltTaskDto {
    @IsString()
    @IsNotEmpty()
    id: string
}