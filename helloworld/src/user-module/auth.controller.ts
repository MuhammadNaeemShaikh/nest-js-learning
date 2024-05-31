import { Body, Controller, Get, Post, Req, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { UserDto, loginDto } from './dto/auth.dto';
import { SignUp, loginReturnType } from './interface/user.interface';
import { UserGuard } from 'src/core/guard';

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
  @UseGuards(UserGuard)
  @UsePipes(new ValidationPipe())
  @ApiBody({})
  async login(@Body() data: loginDto): Promise<loginReturnType> {
    try {
      return this.authService.login(data)
    } catch (error) {
      throw error;
    }
  }

  @Get('getUser')
  @UseGuards(UserGuard)
  async getUser(@Req() req) {
    try {
      console.log('hit');
      const userId = await req.user._id;

      console.log(userId, '------------------');
      // Now, use the UserService to fetch the user details by ID
      // const user = await this.authService.getUser(userId);

      // Return the user details
      // return userId;

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
