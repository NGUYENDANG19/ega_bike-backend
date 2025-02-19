import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductImagesEntity } from 'src/entities/product_image.entity';
import { ProductEntity } from 'src/entities/product.entity';
import { ProductImagesController } from './product-images.controller';
import { ProductImagesService } from './product-images.service';


@Module({
  imports: [TypeOrmModule.forFeature([ProductImagesEntity, ProductEntity])],
  controllers: [ProductImagesController],
  providers: [ProductImagesService],
})
export class ProductImagesModule { }
