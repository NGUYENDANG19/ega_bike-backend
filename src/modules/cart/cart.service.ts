import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CartEntity } from 'src/entities/cart.enity';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/entities/user.entities';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartEntity)
    private readonly cartRepository: Repository<CartEntity>,

    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) { }

  async create(createCartDto: CreateCartDto) {
    const user = await this.userRepository.findOne({ where: { user_id: createCartDto.user_id } })
    if (!user) throw new Error('User not found')

    const cart = this.cartRepository.create({ user }) // Chỉ tạo object, chưa lưu vào DB
    return await this.cartRepository.save(cart) // Lưu vào DB
  }

  findAll() {
    return this.cartRepository.find()
  }

  findOne(id: number) {
    return this.cartRepository.findOne({ where: { cart_id: id } })
  }

  async update(id: number, updateCartDto: UpdateCartDto) {
    const user = await this.userRepository.findOne({ where: { user_id: updateCartDto.user_id } })
    if (!user) throw new Error('User not found')

    return this.cartRepository.update({ cart_id: id }, { user })
  }

  remove(id: number) {
    return this.cartRepository.delete({ cart_id: id })
  }
}
