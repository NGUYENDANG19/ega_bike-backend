import { Module } from '@nestjs/common';
import { DiscountConditionService } from './discount-condition.service';
import { DiscountConditionController } from './discount-condition.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiscountConditionEntity } from 'src/entities/discount-condition';
import { DiscountEntity } from 'src/entities/discount.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DiscountConditionEntity, DiscountEntity])],
  controllers: [DiscountConditionController],
  providers: [DiscountConditionService],
})
export class DiscountConditionModule { }
