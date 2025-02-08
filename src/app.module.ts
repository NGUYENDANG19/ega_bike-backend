import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './models/user.model';
import { UserModule } from './modules/user/user.module';
import { UserEntity } from './entities/user.entities';
import { RoleEntity } from './entities/role.entities';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT) || 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [UserEntity,RoleEntity],
      synchronize: true,
    }),
    UserModule,
  ],
})
export class AppModule {
  constructor() {
    console.log('✅ TypeORM đã khởi động');
  }
}
