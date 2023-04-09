import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';
import { ILogin } from 'src/interface/interface';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}
  async validatedUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    if (user) {
      const passwordMatch = await compare(password, user.password);
      if (passwordMatch) {
        return { email: user.email };
      }
    }
    return null;
  }
  async login(email: string): Promise<ILogin> {
    const user = await this.userService.findByEmail(email);
    return {
      token: this.jwtService.sign({ email }, { subject: user.id }),
    };
  }
}
