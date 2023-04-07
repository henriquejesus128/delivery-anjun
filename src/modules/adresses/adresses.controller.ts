import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AdressesService } from './adresses.service';
import { CreateAddressDto } from './dto/create-adress.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('adresses')
export class AdressesController {
  constructor(private readonly adressesService: AdressesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createAdressDto: CreateAddressDto) {
    return this.adressesService.create(createAdressDto);
  }
}
