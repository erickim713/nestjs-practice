import { Controller } from '@nestjs/common';

@Controller('user')
export class UserController {
  getAll() {
    return 'hello user';
  }
}
