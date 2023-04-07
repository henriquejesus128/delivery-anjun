import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { CreateRecipientDto } from './dto/create-recipient.dto';
import { RecipientsRepository } from './repositories/recipients.repository';

@Injectable()
export class RecipientsService {
  constructor(private recipientRepository: RecipientsRepository) {}
  async create(createRecipientDto: CreateRecipientDto) {
    const { name } = createRecipientDto;

    const findProduct = await this.recipientRepository.findName(name);

    if (findProduct) {
      throw new ConflictException(`Product already exists!`);
    }

    const product = await this.recipientRepository.create(createRecipientDto);

    return product;
  }

  async findAll() {
    return await this.recipientRepository.findAll();
  }

  async findOne(id: string) {
    const findProduct = await this.recipientRepository.findOne(id);

    if (!findProduct) {
      throw new NotFoundException(`User not found!`);
    }

    return await this.recipientRepository.findOne(id);
  }
}
