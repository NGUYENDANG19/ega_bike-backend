import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import { UserEntity } from './user.entities';


@Entity('roles')
export class RoleEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    role_id: number;

    @Column({ length: 255 })
    name: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @OneToMany(() => UserEntity, (user) => user.role)
    users: UserEntity[];
}