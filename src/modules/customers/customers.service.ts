import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCustomerDto } from './dto/customers/create-customer.dto';
import { PrismaService } from 'src/database/prisma.service';
import { UpdateCustomerDto } from './dto/customers/update-customer.dto';
import { ICustomer } from 'src/interface/interface';
import { ZipCodeService } from './zipcode/apizipcode.service';

@Injectable()
export class CustomersService {
  constructor(
    private prisma: PrismaService,
    private zipCodeService: ZipCodeService,
  ) {}
  async create(createCustomerDto: CreateCustomerDto): Promise<ICustomer> {
    const { address, name } = createCustomerDto;

    const findCustomer = await this.prisma.customer.findFirst({
      where: { name: name },
    });

    if (findCustomer) {
      throw new ConflictException(`Customer already exists!`);
    }

    const resp = await this.zipCodeService.fetchZipCode(address.zipCode);

    if (!resp.street) {
      const customer = await this.prisma.customer.create({
        data: {
          ...createCustomerDto,
          address: { create: { ...address, ...resp } },
        },
        include: { address: true },
      });
      return customer;
    }

    const customer = await this.prisma.customer.create({
      data: {
        ...createCustomerDto,
        address: { create: { ...address } },
      },
      include: { address: true },
    });
    return customer;
  }

  async findAll(): Promise<ICustomer[]> {
    return await this.prisma.customer.findMany({
      include: {
        address: {
          select: {
            id: true,
            city: true,
            complement: true,
            neighborhood: true,
            number: true,
            state: true,
            street: true,
            zipCode: true,
            customerId: false,
          },
        },
      },
    });
  }

  async findOne(id: string): Promise<ICustomer> {
    const findCustomer = await this.prisma.customer.findUnique({
      where: { id },
      include: { address: true },
    });

    if (!findCustomer) {
      throw new NotFoundException(`Customer not found!`);
    }

    delete findCustomer.address.customerId;

    return findCustomer;
  }

  async update(
    id: string,
    updateCustomerDto: UpdateCustomerDto,
  ): Promise<ICustomer> {
    const { address } = updateCustomerDto;

    const findCustomer = await this.prisma.customer.findUniqueOrThrow({
      where: { id },
      include: {
        address: {
          select: {
            id: true,
          },
        },
      },
    });

    if (!findCustomer) {
      throw new NotFoundException(`Customer not found!`);
    }

    const updateCustomer = await this.prisma.customer.update({
      where: { id },
      data: { ...updateCustomerDto, address: { update: { ...address } } },
      include: { address: true },
    });

    return updateCustomer;
  }

  async remove(id: string): Promise<void> {
    const findCustomer = await this.prisma.customer.findUniqueOrThrow({
      where: { id },
      include: {
        address: {
          select: {
            id: true,
          },
        },
      },
    });

    if (!findCustomer) {
      throw new NotFoundException(`Customer not found!`);
    }
    await this.prisma.customer.delete({ where: { id } });
    return;
  }
}
