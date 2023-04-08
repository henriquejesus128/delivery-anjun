import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateProductDto } from 'src/modules/products/dto/create-product.dto';

export class CreateOrderDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  products: CreateProductDto[];
}
