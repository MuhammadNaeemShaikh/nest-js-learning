import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user-module/user.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './core/filter';
import { TaskModule } from './task-module/task.module';
import { DatabaseModule } from './database/database.module';
import { CustomerModule } from './customer-module/customer.module';

@Module({
  imports: [UserModule, TaskModule, DatabaseModule, CustomerModule],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule { }
