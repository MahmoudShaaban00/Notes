import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/core/schemas/user.schema';
import { HttpException, HttpStatus } from '@nestjs/common';
import { compareSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class SigninService {

    constructor(@InjectModel(User.name) private readonly userModel:Model<User> ,  private _jwtService: JwtService){}

    async signin(user: any) {
    let isUser = await this.userModel.findOne({ email: user.email });
    if(!(isUser && compareSync(user.password, isUser.password))) throw new HttpException('Invalid email or password', HttpStatus.UNAUTHORIZED);

    let token = this._jwtService.sign({name:isUser.name , id:isUser._id},{secret:'ahmed'});
    return { message: "User signed in successfully",token: token};
    }
}
