import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/auth.dto';

@Controller('/auth')
export class AuthController {
  constructor(private readonly user:AuthService){}
  @Get('signin')
  signin(): string {
    return 'signin';
  }
  @Post('signup')
  signUp(@Body()user: CreateAuthDto) {
    return this.user.create(user)
  }
}
