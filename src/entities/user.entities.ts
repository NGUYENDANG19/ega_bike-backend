import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, BaseEntity } from 'typeorm';
import { RoleEntity } from './role.entities';

@Entity('users')
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ unique: true, length: 255 })
  email: string;

  @Column()
  password: string;

  @Column({ length: 15, nullable: true })
  phone: string;

  @Column({ type: 'text', nullable: true })
  address: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @ManyToOne(() => RoleEntity, (role) => role.users)
  role: RoleEntity;
}
