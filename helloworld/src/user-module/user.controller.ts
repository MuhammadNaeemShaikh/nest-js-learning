import { Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./interface/user";
import { userDto, deleteUserDto } from "./dto/user.dto";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get('')
    getUser(): User[] {
        return this.userService.getUser();
    }

    @Post('')
    @UsePipes(new ValidationPipe()) //enforce validation
    addUser(@Body() user: userDto): User { //user dto is for validation
        return this.userService.addUser(user);
    }

    @Delete(':email')
    deleteUser(@Param() params: deleteUserDto): User[] {
        return this.userService.deleteUser(params.email)
    }
}