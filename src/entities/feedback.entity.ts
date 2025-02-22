import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";
import { ProductEntity } from "./product.entity";
import { OrderEntity } from "./order.entity";

@Entity('feedbacks')
export class FeedbackEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'int' })
    feedback_id: number;

    @Column({ type: 'int', default: 1 })
    rating: number;

    @Column({ type: 'text' })
    comments: string

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    create_at: Date;

    @Column({ type: 'tinyint', default: 0 })
    is_resolved: boolean;

    @ManyToOne(() => UserEntity, (user) => user.feedbacks, { eager: true })
    user: UserEntity;

    @ManyToOne(() => ProductEntity, (product) => product.feedbacks, { eager: true, nullable: true })
    product: ProductEntity;

    @ManyToOne(() => OrderEntity, (order) => order.feedbacks, { eager: true, nullable: true })
    order: OrderEntity;
}