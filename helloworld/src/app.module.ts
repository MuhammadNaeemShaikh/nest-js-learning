import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { HttpExceptionFilter } from './core/filter';
import { TaskModule } from './task-module/task.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './user-module/auth.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { consumers } from 'stream';
import { CsrfMiddleware } from './core/middleware/csrf.middlware';

@Module({
  imports: [TaskModule, DatabaseModule, AuthModule, ThrottlerModule.forRoot([{
    ttl: 60000,
    limit: 10,
  }]),],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard
    }

  ],
})
export class AppModule {

}
