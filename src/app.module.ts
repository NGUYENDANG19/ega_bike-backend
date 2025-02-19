import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { RoleEntity } from './entities/role.entity';
import { BrandEntity } from './entities/brand.entity';
import { RoleModule } from './modules/role/role.module';
import { OrderEntity } from './entities/order.entity';
import { UserEntity } from './entities/user.entity';
import { CartItemEntity } from './entities/cart-item.entity';
import { CartEntity } from './entities/cart.enity';
import { CategoryEntity } from './entities/category.entity';
import { DiscountEntity } from './entities/discount.entity';
import { FeedbackEntity } from './entities/feedback.entity';
import { OrderItemEntity } from './entities/order_items.entity';
import { PaymentEntity } from './entities/payment.entity';
import { ProductImagesEntity } from './entities/product_image.entity';
import { ProductEntity } from './entities/product.entity';
import { BrandModule } from './modules/brand/brand.module';
import { CartModule } from './modules/cart/cart.module';
import { CartItemModule } from './modules/cart-item/cart-item.module';
import { CategoryModule } from './modules/category/category.module';
import { DiscountModule } from './modules/discount/discount.module';
import { FeedbackModule } from './modules/feedback/feedback.module';
import { AuthModule } from './auth/auth.module';
import { UploadModule } from './upload/upload.module';
import { DiscountConditionModule } from './modules/discount-condition/discount-condition.module';
import { DiscountConditionEntity } from './entities/discount-condition.entity';
import { ProductImagesModule } from './modules/product_images/product-images.module';
import { ProductModule } from './modules/products/product.module';

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
      charset: 'utf8mb4',
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
        DiscountConditionEntity,
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
    AuthModule,
    UploadModule,
    DiscountConditionModule,
    ProductImagesModule,
    ProductModule,
  ],
})
export class AppModule {
  constructor() {
    console.log('✅ TypeORM đã khởi động');
  }
}
