import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { Product } from '../entities/product.entity';

export abstract class ProductsRepository {
  abstract create(data: CreateProductDto): Promise<Product> | Product;
  abstract findAll(): Promise<Product[]> | Product[];
  abstract findOne(id: string): Promise<Product | undefined> | Product;
  abstract findName(name: string): Promise<Product | undefined> | Product;
}
