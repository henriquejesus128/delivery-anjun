import { Address } from '../entities/adress.entity';
import { CreateAddressDto } from '../dto/create-adress.dto';

export abstract class AdressesRepository {
  abstract create(data: CreateAddressDto): Promise<Address> | Address;
  abstract findOne(
    data: CreateAddressDto,
  ): Promise<Address | undefined> | Address;
}
