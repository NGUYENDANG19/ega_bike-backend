import { Injectable } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';
import { FeedbackEntity } from 'src/entities/feedback.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { ProductEntity } from 'src/entities/product.entity';
import { OrderEntity } from 'src/entities/order.entity';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectRepository(FeedbackEntity)
    private readonly feedbackRepository: Repository<FeedbackEntity>,

    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,

    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,

    @InjectRepository(OrderEntity)
    private readonly orderRepository: Repository<OrderEntity>,
  ) { }
  async create(createFeedbackDto: CreateFeedbackDto) {
    const user = await this.userRepository.findOne({ where: { user_id: createFeedbackDto.user_id } })
    const product = await this.productRepository.findOne({ where: { product_id: createFeedbackDto.product_id } }) || undefined
    const order = await this.orderRepository.findOne({ where: { order_id: createFeedbackDto.order_id } }) || undefined

    if (!user) throw new Error('User not found')
    if (!product && !order) throw new Error('Product or Order is not empty')

    const feedback = this.feedbackRepository.create({
      user,
      product,
      order,
      rating: createFeedbackDto.rating,
      comments: createFeedbackDto.comments,
    })

    return await this.feedbackRepository.save(feedback)
  }

  findAll() {
    return this.feedbackRepository.find()
  }

  findOne(id: number) {
    return this.feedbackRepository.findOne({ where: { feedback_id: id } })
  }

  update(id: number, updateFeedbackDto: UpdateFeedbackDto) {
    return this.feedbackRepository.update({ feedback_id: id }, updateFeedbackDto)
  }

  remove(id: number) {
    return this.feedbackRepository.delete(id)
  }
}
