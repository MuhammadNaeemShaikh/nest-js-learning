import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { UserDto, loginDto } from './dto/auth.dto';
import { SignUp, loginReturnType } from './interface/user.interface';

@ApiTags('auth')
@Controller('auth')
export class UserController {
  constructor(private readonly authService: AuthService) { }

  @Post('signUp')
  @UsePipes(new ValidationPipe())
  @ApiBody({})
  async addUser(@Body() user: UserDto): Promise<SignUp> {
    try {
      return this.authService.createUser(user)
    } catch (error) {
      throw error;
    }
  }

  @Post('login')
  @UsePipes(new ValidationPipe())
  @ApiBody({})
  async login(@Body() data: loginDto): Promise<loginReturnType> {
    try {
      return this.authService.login(data)
    } catch (error) {
      throw error;
    }
  }
  //   @ApiBody({ type: TaskDto })
  //   @UsePipes(new ValidationPipe())
  //   async addTask(@Body() task: TaskDto): Promise<Task> {
  //     try {
  //       return this.taskService.addTask(task);
  //     } catch (err) {
  //       throw err;
  //     }
  //   }
}
