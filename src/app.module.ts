import { Module } from '@nestjs/common';
import { LoginsModule } from './modules/logins/logins.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'node:path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { isDevelopment } from './common/constants/global';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: join(__dirname, '..', `.env.${process.env.NODE_ENV}`),
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (CS: ConfigService) => ({
        type: 'mariadb',
        host: CS.getOrThrow('DB_IP'),
        port: CS.getOrThrow('DB_PORT'),
        username: CS.getOrThrow('DB_USER'),
        password: CS.getOrThrow('DB_PASS'),
        database: CS.getOrThrow('DB_NAME'),
        entities: [join(__dirname, 'modules/**/entities/*.entity.js')],
        synchronize: true,
        autoLoadEntities: isDevelopment,
        // dropSchema: true,
      }),
    }),
    LoginsModule,
    UsersModule,
  ],
})
export class AppModule {}
