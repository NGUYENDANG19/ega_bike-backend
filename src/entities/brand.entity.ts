import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('brands')
export class BrandEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'int' })
    brand_id: number;

    @Column({ type: 'varchar', length: 45, unique: true })
    brand_name: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    logo_url: string;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;
}
