import { BaseEntity, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entities";
import { CartItemEntity } from "./cart-item.entity";

@Entity('cart')
export class CartEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'int' })
    cart_id: number;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    create_at: Date;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP' })
    update_at: Date;

    @OneToOne(() => UserEntity, (user) => user.user_id, { eager: true })
    @JoinColumn()
    user: UserEntity;

    @OneToMany(() => CartItemEntity, (cartItem) => cartItem.cart)
    cartItems: CartItemEntity;
}