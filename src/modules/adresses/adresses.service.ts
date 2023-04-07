import { Injectable, ConflictException } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-adress.dto';
import { AdressesRepository } from './repositories/adresses.repository';

@Injectable()
export class AdressesService {
  constructor(private addressRepository: AdressesRepository) {}

  async create(createAddressDto: CreateAddressDto) {
    const findAddress = await this.addressRepository.findOne(createAddressDto);

    if (findAddress) {
      throw new ConflictException(`Address already exists!`);
    }

    const address = await this.addressRepository.create(createAddressDto);

    return address;
  }
}
