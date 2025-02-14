import { BaseEntity, Column, PrimaryGeneratedColumn, Entity, ManyToOne } from "typeorm";
import { CartEntity } from "./cart.enity";
import { ProductEntity } from "./products.entities";

@Entity('cart_items')
export class CartItemEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'int' })
    cart_item_id: number;

    @Column({ type: 'int' })
    quantity: number;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    create_at: Date;

    @ManyToOne(() => CartEntity, (cart) => cart.cart_id)
    cart: CartEntity;

    @ManyToOne(() => ProductEntity, (product) => product.product_id, { eager: true })
    product: ProductEntity;
}
