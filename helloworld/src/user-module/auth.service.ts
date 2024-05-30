import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SignUp, login, loginReturnType } from './interface/user.interface';
import { UserException } from 'src/core/exception/user.exception';
import { statusCode } from 'src/core/statusCode/statusCode';
import * as bcrypt from 'bcrypt';
import { JwtService } from './jwt.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<SignUp>,
    private jwtService: JwtService
  ) { }

  public async createUser(data: SignUp): Promise<SignUp> {
    try {
      const {
        firstName,
        lastName,
        email,
        password,
        role,
        dob,
        address,
        description,
        profile,
      } = data;

      const isEmailFound = await this.userModel.findOne({ email });

      if (isEmailFound) {
        throw new UserException(statusCode.BAD_REQUEST, 'Email Already Exist');
      }

      //generate Salt
      const salt = await bcrypt.genSalt();

      //hash password
      const hashPassword = await bcrypt.hash(password, salt)


      return await this.userModel.create({
        firstName,
        lastName,
        email,
        password: hashPassword,
        role,
        dob,
        address,
        description,
        profile,
      });

    } catch (error) {
      throw new UserException(500, error.message);
    }
  }

  public async login(data: login): Promise<loginReturnType> {
    try {

      const { userEmail, password } = data;

      //check email found or not
      const isEmailFound = await this.userModel.findOne({ email: userEmail })

      if (!isEmailFound) {
        throw new UserException(statusCode.BAD_REQUEST, 'Email Not Found');
      }

      //compare password
      const isMatch = await bcrypt.compare(password, isEmailFound.password);

      //if password not matched
      if (!isMatch) {
        throw new UserException(statusCode.BAD_REQUEST, 'Password Not Matched');
      }

      const { _id, email, role } = isEmailFound

      return {
        accessToken: await this.jwtService.signature({ _id, email, role }),
      }

    } catch (error) {
      throw new UserException(statusCode.INTERNAL_ERROR, error.message);
    }
  }
}
