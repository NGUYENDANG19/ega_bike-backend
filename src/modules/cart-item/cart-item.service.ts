import { Injectable } from '@nestjs/common';
import { CreateCartItemDto } from './dto/create-cart-item.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CartItemEntity } from 'src/entities/cart-item.entity';
import { Repository } from 'typeorm';
import { CartEntity } from 'src/entities/cart.enity';
import { ProductEntity } from 'src/entities/products.entities';

@Injectable()
export class CartItemService {
  constructor(
    @InjectRepository(CartItemEntity)
    private readonly cartItemRepository: Repository<CartItemEntity>,

    @InjectRepository(CartEntity)
    private readonly cartRepository: Repository<CartEntity>,

    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>
  ) { }
  async create(createCartItemDto: CreateCartItemDto) {
    const cart = await this.cartRepository.findOne({ where: { cart_id: createCartItemDto.cart_id } })
    const product = await this.productRepository.findOne({ where: { product_id: createCartItemDto.product_id } })
    if (!cart || !product) throw new Error('Cart or Product not found')

    const cartItem = this.cartItemRepository.create({ cart, product, quantity: createCartItemDto.quantity })
    return await this.cartItemRepository.save(cartItem);
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
