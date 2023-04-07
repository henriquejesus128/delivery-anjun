import { Product } from '@prisma/client';
import { CreateProductDto } from '../dto/create-product.dto';

export abstract class ProductsRepository {
  abstract create(data: CreateProductDto): Promise<Product> | Product;
  abstract findAll(): Promise<Product[]> | Product[];
  abstract findOne(id: string): Promise<Product | undefined> | Product;
  abstract findByProduct(
    data: CreateProductDto,
  ): Promise<Product | undefined> | Product | undefined;
}
