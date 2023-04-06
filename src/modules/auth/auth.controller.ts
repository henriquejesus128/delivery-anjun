import { Body, Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { IAuthLogin } from './auth.interface';

@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  async login(@Body() user: IAuthLogin) {
    return this.authService.login(user.email);
  }
}
