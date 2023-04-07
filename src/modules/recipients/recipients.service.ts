import { Injectable } from '@nestjs/common';
import { CreateRecipientDto } from './dto/create-recipient.dto';

@Injectable()
export class RecipientsService {
  create(createRecipientDto: CreateRecipientDto) {
    return 'This action adds a new recipient';
  }

  findAll() {
    return `This action returns all recipients`;
  }

  findOne(id: string) {
    return `This action returns a #${id} recipient`;
  }
}
