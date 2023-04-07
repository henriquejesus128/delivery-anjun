import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/adresses/create-address.dto';
import { PrismaService } from 'src/database/prisma.service';
import { UpdateAddressDto } from './dto/adresses/update-address.dto';

@Injectable()
export class AdressesService {
  constructor(private prisma: PrismaService) {}
  async create(createAddressDto: CreateAddressDto) {
    return 'This action adds a new customer';
  }

  async findAll() {
    return `This action returns all customers`;
  }

  async findOne(id: string) {
    return `This action returns a #${id} customer`;
  }

  async update(id: string, updateCustomerDto: UpdateAddressDto) {
    return `This action updates a #${id} customer`;
  }

  async remove(id: string) {
    return `This action removes a #${id} customer`;
  }
}
