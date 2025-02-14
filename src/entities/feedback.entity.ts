import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entities";
import { ProductEntity } from "./products.entities";
import { OrderEntity } from "./orders.entities";

@Entity('feedbacks')
export class FeedbackEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'int' })
    feedback_id: number;

    @Column({ type: 'int', default: 0 })
    rating: number;

    @Column({ type: 'text' })
    comments: string

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    create_at: Date;

    @Column({ type: 'tinyint', default: 0 })
    is_resolved: boolean;

    @ManyToOne(() => UserEntity, (user) => user.user_id, { eager: true })
    user: UserEntity;

    @ManyToOne(() => ProductEntity, (product) => product.product_id, { eager: true })
    product: ProductEntity;

    @ManyToOne(() => OrderEntity, (order) => order.order_id, { eager: true })
    order: OrderEntity;
}