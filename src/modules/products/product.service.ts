import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from 'src/entities/products.entities';
import { Repository } from 'typeorm';
import { CreateProductsDto } from './dto/create-products.dto';
import { UpdateProductsDto } from './dto/update-products.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async create(createProductDto: CreateProductsDto) {
    const product = this.productRepository.create(createProductDto);
    return await this.productRepository.save(product);
  }

  async findAll() {
    return await this.productRepository.find({ relations: ['category', 'brand'] });
  }

  async findOne(id: number) {
    const product = await this.productRepository.findOne({ where: { product_id: id }, relations: ['category', 'brand'] });
    if (!product) throw new NotFoundException('Product not found');
    return product;
  }

  async update(id: number, updateProductDto: UpdateProductsDto) {
    const product = await this.productRepository.preload({ product_id: id, ...updateProductDto });
    if (!product) throw new NotFoundException('Product not found');
    return this.productRepository.save(product);
  }

  async remove(id: number) {
    const result = await this.productRepository.delete(id);
    if (result.affected === 0) throw new NotFoundException('Product not found');
    return { message: 'Product deleted successfully' };
  }
}