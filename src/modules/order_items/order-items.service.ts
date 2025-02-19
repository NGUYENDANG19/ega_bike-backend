import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { OrderItemEntity } from "src/entities/order_items.entities";
import { Repository } from "typeorm";
import { CreateOrderItemDto } from "./dto/create-order-items.dto";
import { UpdateOrderItemDto } from "./dto/update-order-items.dto";

@Injectable()
export class OrderItemsService {
  constructor(
    @InjectRepository(OrderItemEntity)
    private readonly orderItemRepository: Repository<OrderItemEntity>
  ) {}

  // Lấy tất cả các mục trong đơn hàng
  async findAll(): Promise<OrderItemEntity[]> {
    return await this.orderItemRepository.find({ relations: ["order", "product"] });
  }

  // Lấy một mục theo ID
  async findOne(id: number): Promise<OrderItemEntity> {
    const orderItem = await this.orderItemRepository.findOne({ where: { order_item_id: id }, relations: ["order", "product"] });
    if (!orderItem) {
      throw new Error(`Order item with ID ${id} not found`);
    }
    return orderItem;
  }

  // Thêm mục vào đơn hàng
  async create(createOrderItemDto: CreateOrderItemDto): Promise<OrderItemEntity> {
    const newOrderItem = this.orderItemRepository.create(createOrderItemDto);
    return await this.orderItemRepository.save(newOrderItem);
  }

  // Cập nhật mục đơn hàng
  async update(id: number, updateOrderItemDto: UpdateOrderItemDto): Promise<OrderItemEntity> {
    await this.orderItemRepository.update(id, updateOrderItemDto);
    return this.findOne(id);
  }

  // Xóa mục đơn hàng
  async remove(id: number): Promise<void> {
    await this.orderItemRepository.delete(id);
  }
}
