import { BaseEntity, Column, PrimaryGeneratedColumn, Entity, ManyToOne } from "typeorm";
import { CartEntity } from "./cart.enity";
import { ProductEntity } from "./products.entities";

@Entity('cart_items')
export class CartItemEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'int' })
    cart_item_id: number;

    @Column({ type: 'int', default: 1 })
    quantity: number;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    create_at: Date;

    @ManyToOne(() => CartEntity, (cart) => cart.cartItems, { eager: true })
    cart: CartEntity;

    @ManyToOne(() => ProductEntity, (product) => product.cartItems, { eager: true })
    product: ProductEntity;
}
