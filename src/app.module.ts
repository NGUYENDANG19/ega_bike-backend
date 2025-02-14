import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { RoleEntity } from './entities/role.entities';
import { BrandsModule } from './modules/brands/brands.module';
import { BrandEntity } from './entities/brand.entity';
import { RoleModule } from './modules/role/role.module';
import { OrderEntity } from './entities/orders.entities';
import { UserEntity } from './entities/user.entities';
import { CartItemEntity } from './entities/cart-item.entity';
import { CartEntity } from './entities/cart.enity';
import { CategoryEntity } from './entities/category.entity';
import { DiscountEntity } from './entities/discount.entity';
import { FeedbackEntity } from './entities/feedback.entity';
import { OrderItemEntity } from './entities/order_items.entities';
import { PaymentEntity } from './entities/payments.entities';
import { ProductImagesEntity } from './entities/product_images.entities';
import { ProductEntity } from './entities/products.entities';

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
      entities: [
        BrandEntity,
        CartItemEntity,
        CartEntity,
        CategoryEntity,
        DiscountEntity,
        FeedbackEntity,
        OrderItemEntity,
        OrderEntity,
        PaymentEntity,
        ProductImagesEntity,
        ProductEntity,
        RoleEntity,
        UserEntity,
      ],
      synchronize: true,
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
