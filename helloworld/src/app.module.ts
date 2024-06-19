import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { HttpExceptionFilter } from './core/filter';
import { TaskModule } from './task-module/task.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './user-module/auth.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { LoggerMiddleware } from './core/middleware';
import { GlobalResponseInterceptor } from './core/Interceptor/GlobalResponse.interceptor';
import { ChatGateway } from './sockets/events.gateway';
import { RoomDetailsService } from './sockets/roomdetails.service';

@Module({
  imports: [
    TaskModule,
    DatabaseModule,
    AuthModule,
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 10,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: GlobalResponseInterceptor,
    },
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    ChatGateway,
    RoomDetailsService,
  ],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude(
        { path: 'auth/login', method: RequestMethod.POST }, // Exclude GET /health
        { path: 'auth/signUp', method: RequestMethod.POST }, // Exclude GET /status
      )
      .forRoutes('*'); // Applies the middleware to all routes
  }
}
