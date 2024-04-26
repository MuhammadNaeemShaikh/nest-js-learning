import { Body, Controller, Delete, Get, HttpCode, Param, Post, Query, Req, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./interface/user";
import { userDto, deleteUserDto } from "./dto/user.dto";
import { Request } from "express";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get('')
    getUser(): User[] {
        return this.userService.getUser();
    }

    @Post('')
    // @HttpCode(204) //if you want to send custom code
    @UsePipes(new ValidationPipe()) //enforce validation
    addUser(@Body() user: userDto, @Req() req: Request, @Query() sort: Boolean): User { //user dto is for validation
        return this.userService.addUser(user);
    }

    @Delete(':email')
    deleteUser(@Param() params: deleteUserDto): User[] {
        return this.userService.deleteUser(params.email);
    }
}