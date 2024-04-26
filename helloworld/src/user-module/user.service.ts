import { Injectable, NotFoundException } from "@nestjs/common";
import { User } from "./interface/user";


@Injectable()
export class UserService {
    private users: User[] = []

    getUser(): User[] {
        return this.users;
    }

    addUser(user: User): User {
        this.users.push(user);
        return user;
    }

    deleteUser(email: string): User[] {
        const isEmailExist = this.users.filter(user => user.email === email);
        if (isEmailExist.length == 0) {
            throw new NotFoundException('User Not Found')
        }
        // Filter out the user with the specified email
        this.users = this.users.filter(user => user.email !== email);

        // Return the updated users array
        return this.users;
    }

}