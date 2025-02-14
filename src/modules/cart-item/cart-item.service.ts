import { Injectable } from '@nestjs/common';
import { CreateCartItemDto } from './dto/create-cart-item.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CartItemEntity } from 'src/entities/cart-item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CartItemService {
  constructor(
    @InjectRepository(CartItemEntity)
    private readonly cartItemRepository: Repository<CartItemEntity>
  ) { }
  create(createCartItemDto: CreateCartItemDto) {
    return this.cartItemRepository.create(createCartItemDto);
  }

  findAll() {
    return this.cartItemRepository.find()
  }

  findOne(id: number) {
    return this.cartItemRepository.findOne({ where: { cart_item_id: id } })
  }

  update(id: number, updateCartItemDto: UpdateCartItemDto) {
    this.cartItemRepository.update({ cart_item_id: id }, updateCartItemDto)
  }

  remove(id: number) {
    this.cartItemRepository.delete(id)
  }
}
