import { CreateRecipientDto } from '../dto/create-recipient.dto';
import { Recipient } from '../entities/recipient.entity';

export abstract class RecipientsRepository {
  abstract create(data: CreateRecipientDto): Promise<Recipient> | Recipient;
  abstract findAll(): Promise<Recipient[]> | Recipient[];
  abstract findOne(id: string): Promise<Recipient | undefined> | Recipient;
  abstract findName(name: string): Promise<Recipient | undefined> | Recipient;
}
