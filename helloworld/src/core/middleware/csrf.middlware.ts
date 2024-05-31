// import { Injectable, NestMiddleware } from '@nestjs/common';
// import { Request, Response, NextFunction } from 'express';
// import * as expressCsrf from 'csurf';

// @Injectable()
// export class CsrfMiddleware implements NestMiddleware {
//     use(req: Request, res: Response, next: NextFunction) {
//         const csrfProtection = expressCsrf({ cookie: true }); // Enable CSRF protection with cookie support
//         csrfProtection(req, res, () => {
//             next();
//         });
//     }
// }
