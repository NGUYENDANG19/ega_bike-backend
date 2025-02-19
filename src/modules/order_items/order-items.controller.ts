import { Controller, Get, Post, Body, Param, Patch, Delete } from "@nestjs/common";
import { OrderItemsService } from "./order-items.service";
import { CreateOrderItemDto } from "./dto/create-order-items.dto";
import { UpdateOrderItemDto } from "./dto/update-order-items.dto";

@Controller("order-items")
export class OrderItemsController {
  constructor(private readonly orderItemsService: OrderItemsService) {}

  @Get()
  async findAll() {
    return this.orderItemsService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: number) {
    return this.orderItemsService.findOne(id);
  }

  @Post()
  async create(@Body() createOrderItemDto: CreateOrderItemDto) {
    return this.orderItemsService.create(createOrderItemDto);
  }

  @Patch(":id")
  async update(@Param("id") id: number, @Body() updateOrderItemDto: UpdateOrderItemDto) {
    return this.orderItemsService.update(id, updateOrderItemDto);
  }

  @Delete(":id")
  async remove(@Param("id") id: number) {
    return this.orderItemsService.remove(id);
  }
}
