import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { RoleEnum } from '../enum/index.enum';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return false; // No roles specified, allow access
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    // Assuming user.roles is an array of roles assigned to the user
    return roles.includes(RoleEnum.ADMIN);
  }
}

@Injectable()
export class UserGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return false; // No roles specified, not allow access
    }
    return roles.includes(RoleEnum.USER);
  }
}
