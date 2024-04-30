import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest();
        const token = request.headers.authorization;

        // Validate the token (this is a simplified example)
        if (token && token === 'valid-token') {
            return true;
        }

        return false;
    }
}
