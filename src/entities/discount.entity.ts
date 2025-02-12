import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { DiscountType } from '../utils/types';

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
}
