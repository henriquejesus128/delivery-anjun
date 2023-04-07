import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}
  async create(createProductDto: CreateProductDto) {
    const { name } = createProductDto;

    const findProduct = await this.prisma.product.findFirst({
      where: { name },
    });

    if (findProduct) {
      throw new ConflictException(`Product already exists!`);
    }

    const product = await this.prisma.product.create({
      data: createProductDto,
    });

    return product;
  }

  async findAll() {
    return await this.prisma.product.findMany();
  }

  async findOne(id: string) {
    const findProduct = await this.prisma.product.findUnique({ where: { id } });

    if (!findProduct) {
      throw new NotFoundException(`Product not found!`);
    }

    return findProduct;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
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

  async remove(id: string) {
    const findProduct = await this.prisma.product.findUnique({ where: { id } });
    if (!findProduct) {
      throw new NotFoundException(`Product not found!`);
    }
    await this.prisma.product.delete({ where: { id } });
    return;
  }
}
