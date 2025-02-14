import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, OneToMany, OneToOne } from "typeorm";
import { RoleEntity } from "./role.entities";
import { OrderEntity } from "./orders.entities";
import { CartEntity } from "./cart.enity";

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @Column({ length: 255 })
  password: string;

  @Column({ type: 'varchar', length: 15 })
  phone: string;

  @Column({ type: 'text' })
  address: string;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @ManyToOne(() => RoleEntity, (role) => role.users, { eager: true }) // 👈 Mối quan hệ với Role
  role: RoleEntity;

  @OneToMany(() => OrderEntity, (order) => order.user)
  orders: OrderEntity[];

  @OneToOne(() => CartEntity, (cart) => cart.cart_id)
  cart: CartEntity;
}
