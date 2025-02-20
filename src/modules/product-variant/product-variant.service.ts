import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductVariantDto } from './dto/create-product-variant.dto';
import { UpdateProductVariantDto } from './dto/update-product-variant.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductVariantEntity } from 'src/entities/product-variant.entity';
import { Repository } from 'typeorm';
import { ProductEntity } from 'src/entities/product.entity';

@Injectable()
export class ProductVariantService {
  constructor(
    @InjectRepository(ProductVariantEntity)
    private readonly productVariantRepository: Repository<ProductVariantEntity>,

    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) { }
  async create(createProductVariantDto: CreateProductVariantDto) {
    const product = await this.productRepository.findOne({ where: { product_id: createProductVariantDto.product_id } });
    if (!product) throw new NotFoundException('Product not found');

    const productVariant = this.productVariantRepository.create({
      product,
      ...createProductVariantDto
    })
    return await this.productVariantRepository.save(productVariant)
  }

  findAll() {
    return this.productVariantRepository.find();
  }

  findOne(id: number) {
    return this.productVariantRepository.findOne({ where: { product_variant_id: id } })
  }

  update(id: number, updateProductVariantDto: UpdateProductVariantDto) {
    return this.productVariantRepository.update({ product_variant_id: id }, updateProductVariantDto)
  }

  remove(id: number) {
    return this.productVariantRepository.delete(id)
  }
}
