import { OrderStatus } from "src/common/enums/types";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, OneToMany, OneToOne } from "typeorm";
import { UserEntity } from "./user.entity";
import { FeedbackEntity } from "./feedback.entity";
import { PaymentEntity } from "./payment.entity";
import { DiscountEntity } from "./discount.entity";
import { OrderItemEntity } from "./order_items.entity";

@Entity("orders")
export class OrderEntity {

  @PrimaryGeneratedColumn()
  order_id: number;

  @CreateDateColumn({ type: "timestamp" })
  order_date: Date;

  @Column(
    {
      type: "enum",
      enum: OrderStatus,
      default: OrderStatus.PENDING,
    }
  )
  status: OrderStatus;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  total_amount: number;

  @ManyToOne(() => DiscountEntity, discount => discount.orders, { eager: true })
  discount: DiscountEntity;

  @ManyToOne(() => UserEntity, (user) => user.orders, { eager: true })
  user: UserEntity;

  @OneToMany(() => FeedbackEntity, (feedback) => feedback.order)
  feedbacks: FeedbackEntity[];

  @OneToOne(() => PaymentEntity, (payment) => payment.order)
  payment: PaymentEntity;

  @OneToMany(() => OrderItemEntity, (orderItem) => orderItem.order)
  orderItems: OrderItemEntity[];
}