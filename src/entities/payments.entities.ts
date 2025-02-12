import { type } from "os";
import { DiscountType, PaymentMethod, Status } from "src/common/enums/types";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  OneToMany,
} from "typeorm";

@Entity("payments")
export class PaymentEntity {
  @PrimaryGeneratedColumn()
  payment_id: number;

  @CreateDateColumn({ type: "timestamp" })
  payment_date: Date;

  @Column()
  amount: boolean;

  @Column({
    type: "enum",
    enum: PaymentMethod,
    default: PaymentMethod.CASH,
  })
  payment_method: PaymentMethod;

  @Column({
    type: "enum",
    enum: Status,
    default: Status.PENDING,
  })
  status: Status;

  @Column()
  order_id: number;
}
