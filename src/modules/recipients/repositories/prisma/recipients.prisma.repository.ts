import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { plainToInstance } from 'class-transformer';
import { CreateRecipientDto } from '../../dto/create-recipient.dto';
import { Recipient } from '../../entities/recipient.entity';
import { RecipientsRepository } from '../recipients.repository';
import { Address } from 'src/modules/adresses/entities/adress.entity';

@Injectable()
export class RecipientsPrismaRepository implements RecipientsRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateRecipientDto): Promise<Recipient> {
    const { address } = data;
    const addressed = new Address();
    Object.assign(addressed, { ...address });
    const newAddress = await this.prisma.address.create({
      data: { ...addressed },
    });

    const recipient = new Recipient();
    Object.assign(recipient, { ...data });
    const newRecipient = await this.prisma.recipient.create({
      data: { ...recipient, adressId: newAddress.id },
      include: { address: true },
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
