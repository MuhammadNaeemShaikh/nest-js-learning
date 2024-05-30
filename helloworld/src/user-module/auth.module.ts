import { Module } from '@nestjs/common';
import { UserController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.schema';
import { JwtService } from './jwt.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [AuthService, JwtService],
  exports: [AuthService],
})
export class AuthModule { }
