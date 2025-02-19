import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DiscountConditionService } from './discount-condition.service';
import { CreateDiscountConditionDto } from './dto/create-discount-condition.dto';
import { UpdateDiscountConditionDto } from './dto/update-discount-condition.dto';

@Controller('discount-condition')
export class DiscountConditionController {
  constructor(private readonly discountConditionService: DiscountConditionService) { }

  @Post()
  create(@Body() createDiscountConditionDto: CreateDiscountConditionDto) {
    return this.discountConditionService.create(createDiscountConditionDto);
  }

  @Get()
  findAll() {
    return this.discountConditionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.discountConditionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDiscountConditionDto: UpdateDiscountConditionDto) {
    return this.discountConditionService.update(+id, updateDiscountConditionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.discountConditionService.remove(+id);
  }
}
