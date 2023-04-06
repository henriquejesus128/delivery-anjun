import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../users.repository';
import { CreateUserDto } from '../../dto/create-user.dto';
import { UpdateUserDto } from '../../dto/update-user.dto';
import { User } from '../../entities/user.entity';
import { PrismaService } from 'src/database/prisma.service';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class UsersPrismaRepository implements UsersRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto): Promise<User> {
    const user = new User();
    Object.assign(user, { ...data });
    const newUser = await this.prisma.user.create({ data: { ...user } });
    return plainToInstance(User, newUser);
  }

  async findAll(): Promise<User[]> {
    throw new Error('Method not implemented.');
  }
  findOne(id: string): User | Promise<User> {
    throw new Error('Method not implemented.');
  }
  update(id: string, data: UpdateUserDto): User | Promise<User> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): void | Promise<void> {
    throw new Error('Method not implemented.');
  }
  findByEmail(email: string): User | Promise<User> {
    throw new Error('Method not implemented.');
  }
}
