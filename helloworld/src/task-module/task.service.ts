import { Injectable, NotFoundException } from "@nestjs/common";
import { Task } from "./interface/task";

@Injectable()
export class TaskService {
    public tasks: Task[] = []

    async addTask(task: Task): Promise<Task> {
        this.tasks.push(task);
        return task;
    }

    async getTask(id: string): Promise<Task> {
        const task = this.tasks.filter(task => task.id === id);
        if (task.length === 0) {
            throw new NotFoundException('Task Not Found');
        }
        return task[0];
    }

    async getTasks(): Promise<Task[]> {
        return this.tasks;
    }
}