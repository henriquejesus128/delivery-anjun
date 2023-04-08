import { ConflictException, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/database/prisma.service';
import { CustomersService } from '../customers/customers.service';
import { ProductsService } from '../products/products.service';
import { Product } from '@prisma/client';

@Injectable()
export class OrdersService {
  constructor(
    private prisma: PrismaService,
    private customersService: CustomersService,
    private productsService: ProductsService,
  ) {}
  async create(
    createOrderDto: CreateOrderDto,
    id_user: string,
    id_customer: string,
  ) {
    const findCustomer = await this.customersService.findOne(id_customer);

    if (!findCustomer) {
      throw new ConflictException(`Customer already exists!`);
    }

    const products = createOrderDto.products;

    let productList: Product[] = [];

    for (let i = 0; i < products.length; i++) {
      let productName = products[i];
      const findProduct = await this.productsService.findByName(productName);
      if (!findProduct) {
        productList.push(
          await this.productsService.create({ name: productName }),
        );
      } else {
        productList.push(findProduct);
      }
    }

    // const order = await this.prisma.order.create({
    //   data: {
    //     ...createOrderDto,
    //     senderId: id_user,
    //     recipientId: id_customer,
    //   },
    // });
    // return order;
  }

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
