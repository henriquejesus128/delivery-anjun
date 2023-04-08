import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { PrismaService } from 'src/database/prisma.service';
import { CustomersService } from '../customers/customers.service';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService, PrismaService, CustomersService],
  exports: [OrdersService],
})
export class OrdersModule {}
