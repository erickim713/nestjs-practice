import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { User } from '../user/user.entity';
import jwt = require('jsonwebtoken');

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  test() {
    return this.userService.testing();
  }

  async findUser(username: string) {
    return await this.userService.findOne(username);
  }

  generateJWT(user: User) {
    return jwt.sign(
      {
        name: user.name,
        id: user.id,
        username: user.username,
      },
      'secretKeyHere',
      {
        expiresIn: '7d',
      },
    );
  }
}
