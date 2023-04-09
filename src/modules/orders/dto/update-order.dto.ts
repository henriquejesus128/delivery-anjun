import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateOrderDto } from './create-order.dto';
import { Status } from '@prisma/client';
import { IsEnum, IsNotEmpty } from 'class-validator';

export class UpdateOrderDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(Status)
  status: Status;
}
