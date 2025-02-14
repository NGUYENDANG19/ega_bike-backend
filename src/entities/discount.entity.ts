import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { DiscountType } from '../common/enums/types';
import { OrderEntity } from "./orders.entities";

@Entity('discounts')
export class DiscountEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'int' })
    discount_id: number;

    @Column({ type: 'varchar', length: 45, unique: true })
    code: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @Column({
        type: 'enum',
        enum: DiscountType,
        default: DiscountType.PERCENTAGE
    })
    discount_type: DiscountType;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    discount_value: number;

    @Column({ type: 'datetime' })
    start_date: Date;

    @Column({ type: 'datetime' })
    end_date: Date;

    @Column({ type: 'tinyint', default: 1 })
    is_active: boolean;

    @OneToMany(() => OrderEntity, (order) => order.order_id)
    order: OrderEntity;
}
