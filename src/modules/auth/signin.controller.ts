import { Body, Controller, Injectable, Post } from '@nestjs/common';
import { SigninDto } from './dto/auth.dto';
import { SigninService } from './signin.service';

@Controller('signin')
export class SigninController {
    constructor(private readonly signinService: SigninService) {}

    @Post()
    signin(@Body() body: SigninDto) {
            return this.signinService.signin(body);
    }
}
