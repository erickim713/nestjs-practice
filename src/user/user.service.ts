import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { encryptPassword, verifyPassword } from '../config/security';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  testing() {
    return 'league of legends is so fun';
  }
  async initialize() {
    const [key, salt] = await encryptPassword('test');

    let user = await this.userRepository.findOne({ username: 'test' });
    if (typeof user === 'undefined') {
      user = this.userRepository.create({
        name: 'eric',
        username: 'test',
        key,
        salt,
      });
      await this.userRepository.insert(user);
    }
  }
}
