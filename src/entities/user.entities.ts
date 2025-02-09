import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from "typeorm";
import { RoleEntity } from "./role.entities";

@Entity('users')
export class User {
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

  @ManyToOne(() => RoleEntity, (role) => role.users)
  role: RoleEntity;
}
