/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UsersRepository } from './repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private userRepository: UsersRepository) {}
  create(createUserDto: CreateUserDto) {
    return this.userRepository.create(createUserDto);
  }

  findAll() {
    return this.userRepository.findAll();
  }

  findOne(id: string) {
    const findUser = this.userRepository.findOne(id);
    if (!findUser) {
      throw new NotFoundException(`User not found!`);
    }
    return this.userRepository.findOne(id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const findUser = this.userRepository.findOne(id);
    if (!findUser) {
      throw new NotFoundException(`User not found!`);
    }
    return this.userRepository.update(id, updateUserDto);
  }

  remove(id: string) {
    const findUser = this.userRepository.findOne(id);
    if (!findUser) {
      throw new NotFoundException(`User not found!`);
    }
    return this.userRepository.delete(id);
  }
}
