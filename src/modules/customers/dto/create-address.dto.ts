import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAddressDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  street: String;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  number: String;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  complement: String;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  city: String;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  state: String;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  zipCope: String;
}
