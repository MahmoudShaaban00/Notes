import { Body, Controller, Post } from '@nestjs/common';
import { SignupDto } from './dto/auth.dto';
import { SignupService } from './signup.service';

@Controller('signup')
export class SignupController {

  constructor(private readonly signupService: SignupService) {}

 @Post()
async signup(@Body() body: SignupDto) {
  return await this.signupService.signup(body);

  }
}
