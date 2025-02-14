import { Injectable } from '@nestjs/common';
import { CreateDiscountDto } from './dto/create-discount.dto';
import { UpdateDiscountDto } from './dto/update-discount.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DiscountEntity } from 'src/entities/discount.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DiscountService {
  constructor(
    @InjectRepository(DiscountEntity)
    private readonly discountRepository: Repository<DiscountEntity>
  ) { }

  create(createDiscountDto: CreateDiscountDto) {
    this.discountRepository.create(createDiscountDto)
  }

  findAll() {
    return this.discountRepository.find()
  }

  findOne(id: number) {
    return this.discountRepository.findOne({ where: { discount_id: id } })
  }

  update(id: number, updateDiscountDto: UpdateDiscountDto) {
    this.discountRepository.update({ discount_id: id }, updateDiscountDto)
  }

  remove(id: number) {
    this.discountRepository.delete(id)
  }
}
