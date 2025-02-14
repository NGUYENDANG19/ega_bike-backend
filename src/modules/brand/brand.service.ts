import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BrandEntity } from 'src/entities/brand.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BrandService {
  constructor(
    @InjectRepository(BrandEntity)
    private readonly brandRepository: Repository<BrandEntity>,
  ) { }
  create(createBrandDto: CreateBrandDto) {
    this.brandRepository.create(createBrandDto)
  }

  findAll() {
    return this.brandRepository.find()
  }

  findOne(id: number) {
    return this.brandRepository.findOne({ where: { brand_id: id } })
  }

  update(id: number, updateBrandDto: UpdateBrandDto) {
    this.brandRepository.update({ brand_id: id }, updateBrandDto)
  }

  remove(id: number) {
    return this.brandRepository.delete({ brand_id: id })
  }
}
