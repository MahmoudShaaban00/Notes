import { Module } from '@nestjs/common';
import { SignupService } from './signup.service';
import { SigninService } from './signin.service';
import { SignupController } from './signup.controller';
import { SigninController } from './signin.controller';
import { User, UserSchema } from 'src/core/schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [MongooseModule.forFeature([{ name:User.name ,schema:UserSchema}])],
  providers: [SignupService, SigninService, JwtService],
  controllers: [SignupController, SigninController]
})
export class AuthModule {}
