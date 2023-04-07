import { Injectable } from '@nestjs/common';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { PrismaService } from 'src/database/prisma.service';

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
