import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from "typeorm";

@Entity("order_items")
export class OrderItemEntity {

    @PrimaryGeneratedColumn()
    order_item_id: number;
    
    @Column()
    quantity: number;
    
    @Column()
    price: number;
    
    @Column()
    order_id: number;
    
    @Column()
    product_id: number;
    

  
}