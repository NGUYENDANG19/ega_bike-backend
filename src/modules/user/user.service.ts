import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import * as bcrypt from "bcrypt";

import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "src/models/user.model";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async findAll(): Promise<User[]> {
    const users = await this.userRepository.find();
    console.log("Users in DB:", users);
    return users;
  }
  

  // 2. Tìm user theo ID
  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { user_id: id }, relations: ["role"] });
    if (!user) throw new NotFoundException(`User với ID ${id} không tồn tại`);
    return user;
  }

  // 3. Tạo user mới
  async create(createUserDto: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const newUser = this.userRepository.create({ ...createUserDto, password: hashedPassword });
    return this.userRepository.save(newUser);
  }

  // 4. Cập nhật user
  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);
    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
    }
    Object.assign(user, updateUserDto);
    return this.userRepository.save(user);
  }

  // 5. Xóa user
  async remove(id: number): Promise<void> {
    const user = await this.findOne(id);
    await this.userRepository.remove(user);
  }
}
