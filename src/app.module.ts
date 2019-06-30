import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { AccountsModule } from './accounts/accounts.module';
import { ConfigModule } from './util/config/config.module';
import { ConfigService } from './util/config/config.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          type: configService.get('DB_TYPE'),
          host: configService.get('DB_HOST'),
          port: parseInt(configService.get('DB_PORT')),
          username: configService.get('DB_USERNAME'),
          database: configService.get('DB_DATABASE'),
          entities: [__dirname + 'dist/**/*.entity{.ts,.js}'],
          synchronize: configService.isThisEnv('development'),
        } as TypeOrmModuleAsyncOptions;
      },
    }),
    ConfigModule,
    AccountsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
