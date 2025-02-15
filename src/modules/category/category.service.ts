import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from 'src/entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>
  ) { }
  create(createCategoryDto: CreateCategoryDto) {
    this.categoryRepository.create(createCategoryDto)
  }

  findAll() {
    return this.categoryRepository
      .createQueryBuilder('categories')
      .leftJoin('categories.products', 'products')
      .select([
        'categories.category_id AS category_id',
        'categories.name AS name',
        'categories.description AS description',
        'categories.image AS image',
      ])
      .addSelect('COUNT(products.product_id)', 'productCount')
      .groupBy('categories.category_id')
      .getRawMany()
  }

  findOne(id: number) {
    return this.categoryRepository.findOne({ where: { category_id: id } })
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    this.categoryRepository.update({ category_id: id }, updateCategoryDto)
  }

  remove(id: number) {
    this.categoryRepository.delete(id)
  }
}
