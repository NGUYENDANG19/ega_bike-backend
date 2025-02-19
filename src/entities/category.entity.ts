import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductEntity } from "./product.entity";

@Entity('categories')
export class CategoryEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'int' })
    category_id: number;

    @Column({ type: 'varchar', length: 100 })
    name: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    image: string;

    @OneToMany(() => ProductEntity, (product) => product.category)
    products: ProductEntity[];

}                           