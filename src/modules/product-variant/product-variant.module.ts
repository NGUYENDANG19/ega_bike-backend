import { Module } from '@nestjs/common';
import { ProductVariantService } from './product-variant.service';
import { ProductVariantController } from './product-variant.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductVariantEntity } from 'src/entities/product-variant.entity';
import { ProductEntity } from 'src/entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductVariantEntity, ProductEntity])],
  controllers: [ProductVariantController],
  providers: [ProductVariantService],
})
export class ProductVariantModule { }
