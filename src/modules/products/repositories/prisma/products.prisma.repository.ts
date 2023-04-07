import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { plainToInstance } from 'class-transformer';
import { ProductsRepository } from '../products.repository';
import { CreateProductDto } from '../../dto/create-product.dto';
import { Product } from '../../entities/product.entity';

@Injectable()
export class ProductsPrismaRepository implements ProductsRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateProductDto): Promise<Product> {
    const product = new Product();
    Object.assign(product, { ...data });
    const newProduct = await this.prisma.product.create({
      data: { ...product },
    });
    return plainToInstance(Product, newProduct);
  }

  async findAll(): Promise<Product[]> {
    const products = await this.prisma.product.findMany();
    return plainToInstance(Product, products);
  }

  async findOne(id: string): Promise<Product> {
    const product = await this.prisma.product.findUnique({ where: { id } });
    return plainToInstance(Product, product);
  }

  async findByProduct(data: CreateProductDto): Promise<Product> {
    const product = await this.prisma.product.findFirst(data);
    return product;
  }
}
