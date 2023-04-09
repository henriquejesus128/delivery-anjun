import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  UseGuards,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt/jwt-auth.guard';

@ApiTags('Order')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  create(
    @Body() createOrderDto: CreateOrderDto,
    @Request() req: any,
    @Param('id') id_customer: string,
  ) {
    const { sub } = req.user.data;
    return this.ordersService.create(createOrderDto, sub, id_customer);
  }

  @Get()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.ordersService.findAll();
  }

  @Get('product/:id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  findByProduct(@Param('id') id: string) {
    return this.ordersService.findByProduct(id);
  }

  @Get('sender/:id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  findBySender(@Param('id') id: string) {
    return this.ordersService.findBySender(id);
  }

  @Get('recipient/:id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  findByRecipient(@Param('id') id: string) {
    return this.ordersService.findByRecipient(id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(id, updateOrderDto);
  }
}
