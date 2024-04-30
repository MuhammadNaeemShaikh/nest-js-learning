import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user-module/user.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './core/filter';
import { TaskModule } from './task-module/task.module';

@Module({
  imports: [UserModule, TaskModule],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule { }
