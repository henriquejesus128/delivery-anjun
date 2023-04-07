import { Injectable } from '@nestjs/common';

import { CreateCustomerDto } from './dto/customers/create-customer.dto';
import { PrismaService } from 'src/database/prisma.service';
import { UpdateCustomerDto } from './dto/customers/update-customer.dto';

@Injectable()
export class CustomersService {
  constructor(private prisma: PrismaService) {}
  async create(createCustomerDto: CreateCustomerDto) {
    return 'This action adds a new customer';
  }

  async findAll() {
    return `This action returns all customers`;
  }

  async findOne(id: string) {
    return `This action returns a #${id} customer`;
  }

  async update(id: string, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  async remove(id: string) {
    return `This action removes a #${id} customer`;
  }
}
