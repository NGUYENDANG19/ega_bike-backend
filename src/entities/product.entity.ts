import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { ProductImagesEntity } from "./product_image.entity";
import { CartItemEntity } from "./cart-item.entity";
import { CategoryEntity } from "./category.entity";
import { BrandEntity } from "./brand.entity";
import { FeedbackEntity } from "./feedback.entity";
import { OrderItemEntity } from "./order_items.entity";
import { ProductVariantEntity } from "./product-variant.entity";

@Entity("products")
export class ProductEntity {
  @PrimaryGeneratedColumn()
  product_id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ type: "text", nullable: true })
  description: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  discount_price: number;

  @Column()
  rating: number;

  @Column({ type: "int" })
  stock_quantity: number;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @Column()
  sku: string;

  @OneToMany(() => ProductImagesEntity, (product_images) => product_images.product)
  product_images: ProductImagesEntity[];

  @OneToMany(() => CartItemEntity, (cartItem) => cartItem.product)
  cartItems: CartItemEntity[];

  @OneToMany(() => OrderItemEntity, (orderItem) => orderItem.product)
  orderItems: OrderItemEntity[];

  @OneToMany(() => FeedbackEntity, (feedback) => feedback.product)
  feedbacks: FeedbackEntity[];

  @OneToMany(() => ProductVariantEntity, (productVariant) => productVariant.product)
  product_variants: ProductVariantEntity[];

  @ManyToOne(() => CategoryEntity, (category) => category.products, { eager: true })
  category: CategoryEntity;

  @ManyToOne(() => BrandEntity, (brand) => brand.products, { eager: true })
  brand: BrandEntity;
}
