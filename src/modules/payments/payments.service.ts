import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from 'src/entities/orders.entities';
import { PaymentEntity } from 'src/entities/payments.entities';
import { Repository } from 'typeorm';
import { CreatePaymentDto } from './dto/create-payments.dto';
import { UpdatePaymentDto } from './dto/update-payments.dto';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(PaymentEntity)
    private readonly paymentRepository: Repository<PaymentEntity>,

    @InjectRepository(OrderEntity)
    private readonly orderRepository: Repository<OrderEntity>,
  ) {}

  async create(createPaymentDto: CreatePaymentDto) {
    const order = await this.orderRepository.findOne({ where: { order_id: createPaymentDto.orderId } });

    if (!order) {
      throw new NotFoundException('Order not found');
    }

    const payment = this.paymentRepository.create({
      amount: createPaymentDto.amount,
      payment_method: createPaymentDto.payment_method,
      status: createPaymentDto.status,
      order,
    });

    return await this.paymentRepository.save(payment);
  }

  findAll() {
    return this.paymentRepository.find();
  }

  async findOne(id: number) {
    const payment = await this.paymentRepository.findOne({ where: { payment_id: id } });
    if (!payment) {
      throw new NotFoundException('Payment not found');
    }
    return payment;
  }

  async update(id: number, updatePaymentDto: UpdatePaymentDto) {
    const payment = await this.findOne(id);

    if (updatePaymentDto.amount) {
      payment.amount = updatePaymentDto.amount;
    }

    if (updatePaymentDto.payment_method) {
      payment.payment_method = updatePaymentDto.payment_method;
    }

    if (updatePaymentDto.status) {
      payment.status = updatePaymentDto.status;
    }

    return await this.paymentRepository.save(payment);
  }

  async remove(id: number) {
    const payment = await this.findOne(id);
    return await this.paymentRepository.remove(payment);
  }
}
