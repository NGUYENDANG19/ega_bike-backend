import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/create-payments.dto';
import { UpdatePaymentDto } from './dto/update-payments.dto';


@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post()
  create(@Body() createPaymentDto: CreatePaymentDto) {
    return this.paymentsService.create(createPaymentDto);
  }

  @Get()
  findAll() {
    return this.paymentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.paymentsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updatePaymentDto: UpdatePaymentDto) {
    return this.paymentsService.update(id, updatePaymentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.paymentsService.remove(id);
  }
}
