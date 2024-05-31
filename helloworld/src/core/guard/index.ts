import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class AdminGuard implements CanActivate {
    constructor(private reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
        const roles = this.reflector.get<string[]>('roles', context.getHandler());
        if (!roles) {
            return true; // No roles specified, allow access
        }
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        // Assuming user.roles is an array of roles assigned to the user
        return roles.includes('USER');
    }
}



@Injectable()
export class UserGuard implements CanActivate {
    constructor(private reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
        const roles = this.reflector.get<string[]>('roles', context.getHandler());
        if (!roles) {
            return true; // No roles specified, allow access
        }
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        // Assuming user.roles is an array of roles assigned to the user
        return roles.includes('ADMIN');
    }
}
