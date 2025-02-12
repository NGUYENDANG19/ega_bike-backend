import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { productImagesEntity } from "./product_images.entities";

@Entity("products")
export class ProductEntity {
  @PrimaryGeneratedColumn()
  product_id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ type: "text", nullable: true })
  description: string;

  @Column()
  price: boolean;

  @Column()
  discount_price: boolean;

  @Column()
  rating: number;

  @Column({ type: "text", nullable: true })
  created_at: string;

  @Column()
  category_id: number;

  @Column()
  brand_id: number;

  @Column()
  sku: string;

  @ManyToOne(() => productImagesEntity, (product_images) => product_images.products)
  product_images: productImagesEntity[];
}
