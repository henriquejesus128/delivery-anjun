import { Module } from '@nestjs/common';
import { RecipientsService } from './recipients.service';
import { RecipientsController } from './recipients.controller';
import { PrismaService } from 'src/database/prisma.service';
import { RecipientsRepository } from './repositories/recipients.repository';
import { RecipientsPrismaRepository } from './repositories/prisma/recipients.prisma.repository';

@Module({
  controllers: [RecipientsController],
  providers: [
    RecipientsService,
    PrismaService,
    { provide: RecipientsRepository, useClass: RecipientsPrismaRepository },
  ],
  exports: [RecipientsService],
})
export class RecipientsModule {}
