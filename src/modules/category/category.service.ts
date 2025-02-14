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
    return this.categoryRepository.find()
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
