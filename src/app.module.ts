import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { RoleEntity } from './entities/role.entities';
import { BrandsModule } from './modules/brands/brands.module';
import { BrandEntity } from './entities/brand.entity';
import { RoleModule } from './modules/role/role.module';
import { OrderEntity } from './entities/orders.entities';
import { UserEntities } from './entities/user.entities';

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
      entities: [UserEntities, RoleEntity, BrandEntity, OrderEntity],
    }),
    UserModule,
    RoleModule,
    BrandsModule,
  ],
})
export class AppModule {
  constructor() {
    console.log('✅ TypeORM đã khởi động');
  }
}
