import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  constructor(
  ) {

  }

  getHello(): string {
    return 'Hello World!';
  }

  checkOnline(): boolean {
    return true;
  }

  async onModuleInit() {
    if (process.env.NODE_ENV === 'development') {
      // await this.userService.initialize();
    }
  }
}
