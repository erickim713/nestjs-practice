import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('Application basic test', () => {

  class AppServiceMock {
    public getHello(): string {
      return 'Hello World';
    }

    public checkOnline(): boolean {
      return true;
    }
  }

  let appController: AppController;

  beforeAll(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [{
        provide: AppService,
        useClass: AppServiceMock
      }],
    }).compile();

    appController = app.get<AppController>(AppController);
    console.log(appController);
  });

  describe('App Test', () => {
    it('if online: should return hello world', () => {
      const expected = 'Hello World';
      expect(appController.getHello()).toBe(expected);
    });

    it('if online: should return true', () => {
      const expected = true
      expect(appController.online()).toBe(expected);
    })
  });
});
