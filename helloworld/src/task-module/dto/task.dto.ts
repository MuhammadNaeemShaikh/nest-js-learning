import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class TaskDto {
    @ApiProperty({ description: 'The ID of the task', example: '123' })
    @IsString()
    @IsNotEmpty()
    id: string;

    @ApiProperty({ description: 'The name of the task', example: 'Task Name' })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ description: 'The duration of the task in minutes', example: 60 })
    @IsNumber()
    @IsNotEmpty()
    duration: number;

    @ApiProperty({ description: 'Whether the task is completed', example: false })
    @IsBoolean()
    @IsNotEmpty()
    completed: boolean;

    @ApiProperty({ description: 'The description of the task', example: 'Task Description' })
    @IsString()
    @IsNotEmpty()
    description: string;

    @ApiProperty({ description: 'The owner of the task', example: 'Owner Name' })
    @IsString()
    @IsNotEmpty()
    owner: string;
}

export class GetSpecificTask {
    @ApiProperty({ description: 'The ID of the task', example: '1' })
    @IsString()
    @IsNotEmpty()
    id: string
}