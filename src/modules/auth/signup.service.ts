import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../../core/schemas/user.schema';
import { SignupDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SignupService {

  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async signup(user: SignupDto) {
    let isUser = await this.userModel.findOne({ email: user.email });
    if(isUser) throw new HttpException('User already exists', HttpStatus.CONFLICT);

    user.password = await bcrypt.hash(user.password , 10);

    const newUser = await this.userModel.create(user);
    return { message: "User signed up successfully",data: newUser};
  }
}
