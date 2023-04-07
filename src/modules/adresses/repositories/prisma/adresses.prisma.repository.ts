import { Injectable } from '@nestjs/common';
import { AdressesRepository } from '../adresses.repository';
import { PrismaService } from 'src/database/prisma.service';
import { plainToInstance } from 'class-transformer';
import { Address } from '../../entities/adress.entity';
import { CreateAddressDto } from '../../dto/create-adress.dto';

@Injectable()
export class AdressesPrismaRepository implements AdressesRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateAddressDto): Promise<Address> {
    const address = new Address();
    Object.assign(address, { ...data });
    const newAddress = await this.prisma.address.create({
      data: { ...address },
    });
    return plainToInstance(Address, newAddress);
  }

  async findOne(data: CreateAddressDto): Promise<Address> {
    const address = await this.prisma.address.findFirst({ where: data });
    return plainToInstance(Address, address);
  }
}
