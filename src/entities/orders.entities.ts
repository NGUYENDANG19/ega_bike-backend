import { OrderStatus } from "src/common/enums/types";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from "typeorm";
import { UserEntities } from "./user.entities";

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
    
    @Column()
    total_amount: boolean;
    
    @Column()
    user_id: number;

    @Column()
    discount_id: number;
    
  @ManyToOne(() => UserEntities, (user) => user.orders, { eager: true })
    user: UserEntities;
}