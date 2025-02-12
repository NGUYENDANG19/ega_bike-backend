import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, OneToMany } from "typeorm";
import { RoleEntity } from "./role.entities";
import { ProductEntity } from "./products.entities";

@Entity('product_images')
export class productImagesEntity {
  @PrimaryGeneratedColumn()
  product_image_id: number;

  @Column({ length: 255 })
  url: string;

  @Column()
  product_id: number;

  @OneToMany(() => ProductEntity, (product) => product.product_images)
    products: ProductEntity[];

}
