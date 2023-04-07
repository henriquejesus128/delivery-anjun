import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsRepository } from './repositories/products.repository';

@Injectable()
export class ProductsService {
  constructor(private productRepository: ProductsRepository) {}
  async create(createProductDto: CreateProductDto) {
    const { name } = createProductDto;

    const findProduct = await this.productRepository.findName(name);

    if (findProduct) {
      throw new ConflictException(`Product already exists!`);
    }

    const product = await this.productRepository.create(createProductDto);

    return product;
  }

  async findAll() {
    return await this.productRepository.findAll();
  }

  async findOne(id: string) {
    const findProduct = await this.productRepository.findOne(id);

    if (!findProduct) {
      throw new NotFoundException(`User not found!`);
    }

    return await this.productRepository.findOne(id);
  }
}
