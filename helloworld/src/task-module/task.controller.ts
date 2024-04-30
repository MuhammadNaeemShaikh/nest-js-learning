import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { TaskService } from "./task.service";
import { Task } from "./interface/task";
import { DltTaskDto, TaskDto } from "./dto/task.dto";

@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService) { }


    @Get('')
    async getTasks(): Promise<Task[]> {
        try {
            return this.taskService.getTasks()
        } catch (err) {
            throw err;
        }
    }


    @Post('')
    @UsePipes(new ValidationPipe())
    async addTask(@Body() task: TaskDto): Promise<Task> {
        try {
            return this.taskService.addTask(task);
        }
        catch (err) {
            throw err;
        }
    }

    @Get(':id')
    @UsePipes(new ValidationPipe())
    async getTask(@Param() params: DltTaskDto): Promise<Task> {
        try {
            return this.taskService.getTask(params.id)
        } catch (error) {
            throw error;
        }
    }
}



