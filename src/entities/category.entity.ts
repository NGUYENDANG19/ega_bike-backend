import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductEntity } from "./products.entities";

@Entity('categories')
export class CategoryEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'int' })
    category_id: number;

    @Column({ type: 'varchar', length: 100 })
    name: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @OneToMany(() => ProductEntity, (product) => product.product_id)
    product: ProductEntity;
}                           