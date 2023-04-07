import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local/local-auth.guard';
import { IAuthLogin } from './interface/auth.interface';

@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @UseGuards(LocalAuthGuard)
  async login(@Body() user: IAuthLogin) {
    return this.authService.login(user.email);
  }
}
