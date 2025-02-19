import { PaymentMethod, PaymentStatus } from "src/common/enums/types";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { OrderEntity } from "./order.entity";

@Entity("payments")
export class PaymentEntity {
  @PrimaryGeneratedColumn()
  payment_id: number;

  @CreateDateColumn({ type: "timestamp" })
  payment_date: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @Column({
    type: "enum",
    enum: PaymentMethod,
    default: PaymentMethod.CASH,
  })
  payment_method: PaymentMethod;

  @Column({
    type: "enum",
    enum: PaymentStatus,
    default: PaymentStatus.PENDING,
  })
  status: PaymentStatus;

  @OneToOne(() => OrderEntity, (order) => order.payment, { eager: true })
  @JoinColumn() // chỉ định khóa ngoại nằm ở bảng này
  order: OrderEntity;
}
