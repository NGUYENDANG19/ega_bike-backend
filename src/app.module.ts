import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { RoleEntity } from './entities/role.entities';
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
import { BrandModule } from './modules/brand/brand.module';
import { CartModule } from './modules/cart/cart.module';
import { CartItemModule } from './modules/cart-item/cart-item.module';
import { CategoryModule } from './modules/category/category.module';
import { DiscountModule } from './modules/discount/discount.module';
import { FeedbackModule } from './modules/feedback/feedback.module';

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
    BrandModule,
    CartModule,
    CartItemModule,
    CategoryModule,
    DiscountModule,
    FeedbackModule,
    UserModule,
    RoleModule,
  ],
})
export class AppModule {
  constructor() {
    console.log('✅ TypeORM đã khởi động');
  }
}
