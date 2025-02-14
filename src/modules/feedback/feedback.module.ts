import { Module } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { FeedbackController } from './feedback.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedbackEntity } from 'src/entities/feedback.entity';
import { UserEntity } from 'src/entities/user.entities';
import { OrderEntity } from 'src/entities/orders.entities';
import { ProductEntity } from 'src/entities/products.entities';

@Module({
  imports: [TypeOrmModule.forFeature([FeedbackEntity, UserEntity, OrderEntity, ProductEntity])],
  controllers: [FeedbackController],
  providers: [FeedbackService],
})
export class FeedbackModule { }
