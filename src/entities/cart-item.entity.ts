import { BaseEntity, Column, PrimaryGeneratedColumn, Entity, ManyToOne } from "typeorm";
import { CartEntity } from "./cart.enity";

@Entity('cart_items')
export class CartItemEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'int' })
    cart_item_id: number;

    @Column({ type: 'int', length: 11 })
    quantity: number;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    create_at: Date;

    @ManyToOne(() => CartEntity, (cart) => cart.cart_id)
    cart: CartEntity;

    // @ManyToOne(() => ProductEntity, (product) => product.product_id)
    // product: ProductEntity;
}
