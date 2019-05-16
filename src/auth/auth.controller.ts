import { Controller, Get, Post, Body, HttpException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto';
import { LoginFailException } from './exception/auth.exception';
import { v4 } from 'uuid';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Get()
  hello() {
    return this.authService.test();
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    console.log(loginDto);
    const { username, password } = loginDto;
    const user = await this.authService.findUser(username);
    if (typeof user === 'undefined') {
      throw new LoginFailException();
    }
    const refreshToken = v4();
    console.log(refreshToken);
    const token = this.authService.generateJWT(user);

    const data = {
      token,
      refreshToken,
    };
    return {
      HttpStatus: 201,
      data,
    };
  }
}
