import { IsNotEmpty, IsString } from 'class-validator';
import { IAddress } from 'src/modules/adresses/interface/address.interface';

export class CreateRecipientDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  address: IAddress;
}
