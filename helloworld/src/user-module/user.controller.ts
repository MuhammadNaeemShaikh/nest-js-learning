import { Body, Controller, Delete, Get, HttpCode, InternalServerErrorException, Param, Post, Query, Req, UseFilters, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./interface/user";
import { userDto, deleteUserDto } from "./dto/user.dto";
import { Request } from "express";
import { HttpExceptionFilter } from "src/core/filter";
import { AuthGuard } from "src/core/guard";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get('')
    //@UseFilters(new HttpExceptionFilter()) if we want to send custom error
    @UseGuards(new AuthGuard())
    async getUser(): Promise<User[]> {
        try {
            return this.userService.getUser();
        } catch (error) {
            throw error
        }
    }

    @Post('')
    // @HttpCode(204) //if you want to send custom code
    @UsePipes(new ValidationPipe()) //enforce validation
    addUser(@Body() user: userDto, @Req() req: Request, @Query() sort: Boolean): User { //user dto is for validation
        return this.userService.addUser(user);
    }

    @Delete(':email')
    @UsePipes(new ValidationPipe()) //enforce validation
    deleteUser(@Param() params: deleteUserDto): User[] {
        return this.userService.deleteUser(params.email);
    }
}