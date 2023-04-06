import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { IAuthLogin } from './auth.interface';
import { LocalAuthGard } from './local-auth.guard';

@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @UseGuards(LocalAuthGard)
  async login(@Body() user: IAuthLogin) {
    return this.authService.login(user.email);
  }
}
