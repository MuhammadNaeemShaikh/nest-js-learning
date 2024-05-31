import { Injectable, NestMiddleware } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { UserException } from '../exception/user.exception';
import { statusCode } from '../statusCode/statusCode';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if (authorization && authorization.startsWith('Bearer')) {
      const token = authorization.split(' ')[1];

      jwt.verify(token, process.env.JWT_SEC || 'test', (err, user) => {
        if (err) {
          throw new UserException(
            statusCode.UNAUTHORIZED,
            'You are Not Authenticated',
          );
        } else {
          req.user = user;
          next(); // Only call next() if no error occurred
        }
      });
    } else {
      throw new UserException(
        statusCode.UNAUTHORIZED,
        'You are Not Authenticated',
      );
    }
    // Removed the unconditional next() call here
  }
}
