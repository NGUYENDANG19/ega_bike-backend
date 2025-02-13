import { BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntities } from "./user.entities";

@Entity('cart')
export class CartEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'int' })
    cart_id: number;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    create_at: Date;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP' })
    update_at: Date;

    @OneToOne(() => UserEntities, (user) => user.user_id)
    user: UserEntities;
}