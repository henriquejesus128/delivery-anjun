import { Address } from '@prisma/client';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRecipientDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  address: Address;
}
