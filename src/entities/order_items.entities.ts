import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from "typeorm";
import { OrderEntity } from "./orders.entities";
import { ProductEntity } from "./products.entities";

@Entity("order_items")
export class OrderItemEntity {
    @PrimaryGeneratedColumn()
    order_item_id: number;

    @Column({ type: 'int' }) s
    quantity: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    price: number;

    @ManyToOne(() => ProductEntity, (product) => product.product_id, { eager: true })
    product: ProductEntity;

    @ManyToOne(() => OrderEntity, (order) => order.order_id, { eager: true })
    order: OrderEntity;
}