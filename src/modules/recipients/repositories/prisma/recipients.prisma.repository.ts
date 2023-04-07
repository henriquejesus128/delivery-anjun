import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { plainToInstance } from 'class-transformer';
import { CreateRecipientDto } from '../../dto/create-recipient.dto';
import { Recipient } from '../../entities/recipient.entity';
import { RecipientsRepository } from '../recipients.repository';
import { AdressesPrismaRepository } from 'src/modules/adresses/repositories/prisma/adresses.prisma.repository';

@Injectable()
export class RecipientsPrismaRepository implements RecipientsRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateRecipientDto): Promise<Recipient> {
    const recipient = new Recipient();
    Object.assign(recipient, { ...data });
    const newRecipient = await this.prisma.recipient.create({
      data: { ...recipient },
    });
    return plainToInstance(Recipient, newRecipient);
  }

  async findAll(): Promise<Recipient[]> {
    const recipient = await this.prisma.recipient.findMany();
    return plainToInstance(Recipient, recipient);
  }

  async findOne(data: CreateRecipientDto): Promise<Recipient> {
    const recipient = await this.prisma.recipient.findFirst({ where: data });
    return plainToInstance(Recipient, recipient);
  }

  async findName(name: string): Promise<Recipient> {
    const recipient = await this.prisma.recipient.findFirst({
      where: { name: name },
    });
    return plainToInstance(Recipient, recipient);
  }
}
