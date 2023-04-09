import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { PrismaService } from 'src/database/prisma.service';
import { ZipCodeService } from './zipcode/apizipcode.service';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService, PrismaService, ZipCodeService],
  exports: [CustomersService],
})
export class CustomersModule {}
