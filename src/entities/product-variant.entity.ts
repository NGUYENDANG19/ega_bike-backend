import { VariantName } from "src/common/enums/types";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ProductEntity } from "./product.entity";

@Entity('product_variants')
export class ProductVariantEntity {
    @PrimaryGeneratedColumn()
    product_variant_id: number;

    @Column({
        type: 'enum',
        enum: VariantName,
        default: VariantName.COLOR
    }) // Màu sắc, kích thước
    variant_name: VariantName;

    @Column()
    variant_value: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    price: number;

    @Column({ type: 'int' })
    stock_quantity: number;

    @Column({ type: 'varchar', length: 255, nullable: true })
    image_url: string;

    @ManyToOne(() => ProductEntity, (product) => product.product_variants, { eager: true })
    product: ProductEntity;
}