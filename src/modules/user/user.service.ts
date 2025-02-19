import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import * as bcrypt from "bcrypt";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserEntity } from "src/entities/user.entity";


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>
  ) { }

  // 📌 Lấy danh sách user
  async findAll(): Promise<UserEntity[]> {
    const users = await this.userRepository.find();
    console.log("Users in DB:", users);
    return users;
  }

  // 📌 Tìm user theo ID
  async findOne(id: number): Promise<UserEntity> {
    const user = await this.userRepository.findOne({ where: { user_id: id }, relations: ["role"] });
    if (!user) throw new NotFoundException(`User với ID ${id} không tồn tại`);
    return user;
  }

  async findOneByEmail(email: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) throw new NotFoundException(`User với ID ${email} không tồn tại`);
    return user;
  }

  // 📌 Tạo user mới
  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const existingUser = await this.userRepository.findOne({ where: { email: createUserDto.email } });
    if (existingUser) {
      throw new ConflictException("Email đã tồn tại!");
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    // Truyền role_id trực tiếp vào entity
    const newUser = this.userRepository.create({
      ...createUserDto,
      password: hashedPassword,
      role: { role_id: createUserDto.role_id }, // 👈 Thêm role theo đúng quan hệ
    });

    return this.userRepository.save(newUser);
  }

  // 📌 Cập nhật UserEntity
  async update(id: number, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    const user = await this.findOne(id);
    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
    }
    Object.assign(user, updateUserDto);
    return this.userRepository.save(user);
  }

  // 📌 Xóa user
  async remove(id: number): Promise<void> {
    const user = await this.findOne(id);
    await this.userRepository.remove(user);

  }
}
