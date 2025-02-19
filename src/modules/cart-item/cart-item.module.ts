import { Module } from '@nestjs/common';
import { CartItemService } from './cart-item.service';
import { CartItemController } from './cart-item.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartItemEntity } from 'src/entities/cart-item.entity';
import { CartEntity } from 'src/entities/cart.enity';
import { ProductEntity } from 'src/entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CartItemEntity, CartEntity, ProductEntity])],
  controllers: [CartItemController],
  providers: [CartItemService],
})
export class CartItemModule { }
