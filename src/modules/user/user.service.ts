import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entities';


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) {}

    // Hàm lấy tất cả user
    async getAllUsers(): Promise<UserEntity[]> {
        return await this.userRepository.find({
            select: ['user_id', 'name', 'email', 'phone', 'address', 'created_at'], // Bỏ qua mật khẩu
        });
    }

   
}
