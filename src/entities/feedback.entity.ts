import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entities";

@Entity('feedbacks')
export class FeedbackEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'int' })
    feedback_id: number;

    @Column({ type: 'int', length: 11, default: 0 })
    rating: number;

    @Column({ type: 'text' })
    comments: string

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    create_at: Date;

    @Column({ type: 'tinyint', default: 0 })
    is_resolved: boolean;

    @ManyToOne(() => User, (user) => user.user_id)
    user: User;

    // @ManyToOne(() => ProductEntity, (product) => product.product_id)
    // product: ProductEntity;

    // @ManyToOne(() => OrderEntity, (order) => order.order_id)
    // order: OrderEntity;
}