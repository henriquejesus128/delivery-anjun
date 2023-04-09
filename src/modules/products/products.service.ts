import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/database/prisma.service';
import { IProduct } from 'src/interface/interface';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}
  async create(createProductDto: CreateProductDto): Promise<IProduct> {
    const { name } = createProductDto;

    const findProduct = await this.findByName(name);

    if (findProduct) {
      throw new ConflictException(`Product already exists!`);
    }

    const product = await this.prisma.product.create({
      data: createProductDto,
    });

    return product;
  }

  async findByName(name: string) {
    const findProduct = await this.prisma.product.findUnique({
      where: { name },
    });
    return findProduct;
  }

  async findAll(): Promise<IProduct[]> {
    return await this.prisma.product.findMany();
  }

  async findOne(id: string): Promise<IProduct> {
    const findProduct = await this.prisma.product.findUnique({ where: { id } });

    if (!findProduct) {
      throw new NotFoundException(`Product not found!`);
    }

    return findProduct;
  }

  async update(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<IProduct> {
    const findProduct = await this.prisma.product.findUnique({ where: { id } });

    if (!findProduct) {
      throw new NotFoundException(`Product not found!`);
    }

    const updateProduct = await this.prisma.product.update({
      where: { id },
      data: { ...updateProductDto },
    });

    return updateProduct;
  }

  async remove(id: string): Promise<void> {
    const findProduct = await this.prisma.product.findUnique({ where: { id } });
    if (!findProduct) {
      throw new NotFoundException(`Product not found!`);
    }
    await this.prisma.product.delete({ where: { id } });
    return;
  }
}
