import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  async create(
    createOrderDto: CreateOrderDto,
    email: string,
    id_customer: string,
  ) {}

  async findAll() {
    return `This action returns all orders`;
  }

  async findOne(id: string) {
    return `This action returns a #${id} order`;
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  async remove(id: string) {
    return `This action removes a #${id} order`;
  }
}
