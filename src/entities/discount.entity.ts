import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { DiscountType } from '../common/enums/types';
import { OrderEntity } from "./order.entity";
import { DiscountConditionEntity } from "./discount-condition.entity";

@Entity('discounts')
export class DiscountEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'int' })
    discount_id: number;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'varchar', length: 45, unique: true })
    code: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @Column({
        type: 'enum',
        enum: DiscountType,
        default: DiscountType.PERCENT
    })
    discount_type: DiscountType;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    discount_value: number;

    @Column({ type: 'datetime' })
    start_date: Date;

    @Column({ type: 'datetime' })
    end_date: Date;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    min_order_value: number // giá trị đơn hàng tối thiểu

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    max_discount: number // giảm tối đa nếu theo %

    @Column({ type: 'tinyint', default: 1 })
    is_active: boolean;

    @Column({ type: 'varchar', length: 255 })
    thumbnail: string;

    @OneToMany(() => OrderEntity, (order) => order.discount)
    orders: OrderEntity[];

    @OneToMany(() => DiscountConditionEntity, (discount_condition) => discount_condition.discount)
    discount_conditions: DiscountConditionEntity[]
}
