import { DiscountConditionType } from "src/common/enums/types";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { DiscountEntity } from "./discount.entity";

@Entity('discount_conditions')
export class DiscountConditionEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'int' })
    discount_condition_id: number

    @Column({
        type: 'enum',
        enum: DiscountConditionType,
        default: DiscountConditionType.CATEGORY_ID
    })
    condition_type: DiscountConditionType

    @Column({ type: 'int' })
    condition_value: number

    @ManyToOne(() => DiscountEntity, (discount) => discount.discount_conditions)
    discount: DiscountEntity
}   