import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductImagesEntity } from 'src/entities/product_image.entity';
import { ProductEntity } from 'src/entities/product.entity';
import { CreateProductImageDto } from './dto/create-product-images.dto';
import { UpdateProductImageDto } from './dto/update-product-images.dto';

@Injectable()
export class ProductImagesService {
  constructor(
    @InjectRepository(ProductImagesEntity)
    private readonly productImagesRepository: Repository<ProductImagesEntity>,

    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) { }

  async create(createProductImageDto: CreateProductImageDto) {
    const product = await this.productRepository.findOne({
      where: { product_id: createProductImageDto.productId },
    });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    const productImage = this.productImagesRepository.create({
      url: createProductImageDto.url,
      product,
    });

    return await this.productImagesRepository.save(productImage);
  }

  findAll() {
    return this.productImagesRepository.find();
  }

  async findOne(id: number) {
    const image = await this.productImagesRepository.findOne({ where: { product_image_id: id } });
    if (!image) {
      throw new NotFoundException('Product image not found');
    }
    return image;
  }

  async update(id: number, updateProductImageDto: UpdateProductImageDto) {
    const image = await this.findOne(id);
    if (updateProductImageDto.url) {
      image.url = updateProductImageDto.url;
    }
    return await this.productImagesRepository.save(image);
  }

  async remove(id: number) {
    const image = await this.findOne(id);
    return await this.productImagesRepository.remove(image);
  }
}
