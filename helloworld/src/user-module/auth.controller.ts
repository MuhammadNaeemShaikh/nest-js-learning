import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { UserDto, loginDto } from './dto/auth.dto';
import { SignUp, getUserReturnType, loginReturnType } from './interface/user.interface';
import { AuthGuard } from 'src/core/guard';
import { Roles } from 'src/core/decorator/roles.decorator';
import { RoleEnum } from 'src/core/enum/index.enum';

@ApiTags('auth')
@Controller('auth')
export class UserController {
  constructor(private readonly authService: AuthService) { }

  @Post('signUp')
  @UsePipes(new ValidationPipe())
  @ApiBody({})
  async addUser(@Body() user: UserDto): Promise<SignUp> {
    try {
      return this.authService.createUser(user);
    } catch (error) {
      throw error;
    }
  }

  @Post('login')
  @UsePipes(new ValidationPipe())
  @ApiBody({})
  async login(@Body() data: loginDto): Promise<loginReturnType> {
    try {
      return this.authService.login(data);
    } catch (error) {
      throw error;
    }
  }

  @Get('getUser')
  @Roles(RoleEnum.USER)
  @UseGuards(AuthGuard)
  async getUser(@Req() req): Promise<getUserReturnType> {
    try {
      const userId = req.user._id;
      // Now, use the UserService to fetch the user details by ID
      return this.authService.getUser(userId);
    } catch (error) {
      throw error;
    }
  }
}
