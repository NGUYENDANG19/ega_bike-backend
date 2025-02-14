import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, OneToMany } from "typeorm";
import { ProductEntity } from "./products.entities";

@Entity('product_images')
export class ProductImagesEntity {
  @PrimaryGeneratedColumn()
  product_image_id: number;

  @Column({ length: 255 })
  url: string;

  @ManyToOne(() => ProductEntity, (product) => product.product_images, { eager: true })
  products: ProductEntity[];
}
