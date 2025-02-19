import { Injectable } from '@nestjs/common';
import { CreateDiscountConditionDto } from './dto/create-discount-condition.dto';
import { UpdateDiscountConditionDto } from './dto/update-discount-condition.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DiscountConditionEntity } from 'src/entities/discount-condition';
import { Repository } from 'typeorm';
import { DiscountEntity } from 'src/entities/discount.entity';
import { UserEntity } from 'src/entities/user.entities';
import { CategoryEntity } from 'src/entities/category.entity';
import { ProductEntity } from 'src/entities/products.entities';
import { DiscountConditionType } from 'src/common/enums/types';

@Injectable()
export class DiscountConditionService {
  constructor(
    @InjectRepository(DiscountConditionEntity)
    private readonly discountConditionRespository: Repository<DiscountConditionEntity>,

    @InjectRepository(DiscountEntity)
    private readonly discountRespository: Repository<DiscountEntity>,
  ) { }
  async create(createDiscountConditionDto: CreateDiscountConditionDto) {
    const discount = await this.discountRespository.findOne({ where: { discount_id: createDiscountConditionDto.discount_id } })
    if (!discount) throw new Error('Discount is not empty')
    const discount_condition = this.discountConditionRespository.create({
      discount,
      ...createDiscountConditionDto
    })
    return this.discountConditionRespository.save(discount_condition)
  }

  findAll() {
    return this.discountConditionRespository.find();
  }

  findOne(id: number) {
    return this.discountConditionRespository.findOne({ where: { discount_condition_id: id } });
  }

  update(id: number, updateDiscountConditionDto: UpdateDiscountConditionDto) {
    return this.discountConditionRespository.update({ discount_condition_id: id }, updateDiscountConditionDto)
  }

  remove(id: number) {
    return this.discountConditionRespository.delete(id)
  }
}
