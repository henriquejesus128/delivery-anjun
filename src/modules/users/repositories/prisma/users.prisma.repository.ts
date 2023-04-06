import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../users.repository';
import { CreateUserDto } from '../../dto/create-user.dto';
import { UpdateUserDto } from '../../dto/update-user.dto';
import { User } from '../../entities/user.entity';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UsersPrismaRepository implements UsersRepository {
  constructor(private prisma: PrismaService) {}
  create(data: CreateUserDto): User | Promise<User> {
    throw new Error('Method not implemented.');
  }
  findAll(): User[] | Promise<User[]> {
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
