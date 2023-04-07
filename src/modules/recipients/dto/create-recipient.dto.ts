import { Address } from '@prisma/client';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRecipientDto {
  @IsString()
  @IsNotEmpty()
  name: String;

  @IsString()
  @IsNotEmpty()
  address: Address;
}
