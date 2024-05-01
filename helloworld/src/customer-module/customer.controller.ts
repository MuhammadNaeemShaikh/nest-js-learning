import { Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CustomerService } from './customer.service';

@ApiTags('customer')
@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post('')
  @UsePipes(new ValidationPipe())
  @ApiBody({})
  async addCustomer() {}
  //   @UsePipes(new ValidationPipe())
  //   @ApiBody({ type: TaskDto })
  //   async addTask(@Body() task: TaskDto): Promise<Task> {
  //     try {
  //       return this.taskService.addTask(task);
  //     } catch (err) {
  //       throw err;
  //     }
  //   }
}
