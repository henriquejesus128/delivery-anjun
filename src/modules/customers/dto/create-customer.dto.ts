import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateAddressDto } from './create-address.dto';

export class CreateCustomerDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: String;

  @ApiProperty()
  @IsNotEmpty()
  address: CreateAddressDto;
}
