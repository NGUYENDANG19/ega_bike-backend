import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { RoleEntity } from 'src/entities/role.entities';
import { StatusCodes } from 'src/common/constants/status-codes';



@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(RoleEntity)
    private readonly roleRepository: Repository<RoleEntity>,
  ) {}

  // 📌 Lấy danh sách Role
  async findAll(): Promise<RoleEntity[]> {
    return this.roleRepository.find();
  }

  // 📌 Tìm Role theo ID
  async findOne(id: number): Promise<RoleEntity> {
    const role = await this.roleRepository.findOne({ where: { role_id: id } });
    if (!role) throw new NotFoundException(`Role với ID ${id} không tồn tại`);
    return role;
  }

  // 📌 Tạo mới Role
  async create(createRoleDto: CreateRoleDto): Promise<RoleEntity> {
    const role = this.roleRepository.create(createRoleDto);
    return this.roleRepository.save(role);
  }

  // 📌 Cập nhật Role
  async update(id: number, updateRoleDto: UpdateRoleDto): Promise<RoleEntity> {
    const role = await this.findOne(id);
    Object.assign(role, updateRoleDto);
    return this.roleRepository.save(role);
  }

  // 📌 Xóa Role
  async remove(id: number): Promise<{ message: string, status: number }> {
    const result = await this.roleRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Role với ID ${id} không tồn tại`);
    }
    return { 
      status: StatusCodes.SUCCESS,
      message: `Role với ID ${id} đã được xóa thành công` ,
      };
  }
}
