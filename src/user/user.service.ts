import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  testing() {
    return 'league of legends is so fun';
  }
}
