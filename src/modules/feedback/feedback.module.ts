import { Module } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { FeedbackController } from './feedback.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedbackEntity } from 'src/entities/feedback.entity';
import { UserEntity } from 'src/entities/user.entity';
import { OrderEntity } from 'src/entities/order.entity';
import { ProductEntity } from 'src/entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FeedbackEntity, UserEntity, OrderEntity, ProductEntity])],
  controllers: [FeedbackController],
  providers: [FeedbackService],
})
export class FeedbackModule { }
