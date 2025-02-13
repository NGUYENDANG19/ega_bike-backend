import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, OneToMany } from "typeorm";
import { RoleEntity } from "./role.entities";
import { OrderEntity } from "./orders.entities";

@Entity('users')
export class UserEntities {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  phone: string;

  @Column()
  address: string;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @ManyToOne(() => RoleEntity, (role) => role.users, { eager: true }) // 👈 Mối quan hệ với Role
  role: RoleEntity;
  
  @OneToMany(() => OrderEntity, (order) => order.user)
  orders: OrderEntity[];
}
