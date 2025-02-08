import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from 'src/entities/user.entities';
import { StatusCodes } from 'src/common/constants/status-codes';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}


  // API lấy tất cả user
  @Get()
  async getAllUsers() {
      const users = await this.userService.getAllUsers();
      return {
          statusCode: StatusCodes.SUCCESS,
          message: 'All users retrieved successfully',
          data: users,
      };
  }
}
