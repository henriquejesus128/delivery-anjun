import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { PrismaService } from 'src/database/prisma.service';
import { CustomersModule } from '../customers/customers.module';
import { ProductsModule } from '../products/products.module';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService, PrismaService],
  exports: [OrdersService],
  imports: [CustomersModule, ProductsModule],
})
export class OrdersModule {}
