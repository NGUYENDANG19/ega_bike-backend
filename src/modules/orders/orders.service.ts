import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { OrderEntity } from "src/entities/order.entity";
import { Repository } from "typeorm";
import { CreateOrderDto } from "./dto/create-orders.dto";
import { UpdateOrderDto } from "./dto/update-orders.dto";


@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly orderRepository: Repository<OrderEntity>
  ) { }

  // Lấy danh sách tất cả đơn hàng
  async findAll(): Promise<OrderEntity[]> {
    return await this.orderRepository.find({ relations: ["user", "payment", "orderItems"] });
  }

  // Lấy đơn hàng theo ID
  async findOne(id: number): Promise<OrderEntity> {
    const order = await this.orderRepository.findOne({ where: { order_id: id }, relations: ["user", "payment", "orderItems"] });
    if (!order) {
      throw new Error(`Order with id ${id} not found`);
    }
    return order;
  }

  // Tạo đơn hàng mới
  async create(createOrderDto: CreateOrderDto): Promise<OrderEntity> {
    const newOrder = this.orderRepository.create(createOrderDto);
    return await this.orderRepository.save(newOrder);
  }

  // Cập nhật đơn hàng
  async update(id: number, updateOrderDto: UpdateOrderDto): Promise<OrderEntity> {
    await this.orderRepository.update(id, updateOrderDto);
    return this.findOne(id);
  }

  // Xóa đơn hàng
  async remove(id: number): Promise<void> {
    await this.orderRepository.delete(id);
  }
}
