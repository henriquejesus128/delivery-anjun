/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private userRepository: UsersRepository) {}

  async create(createUserDto: CreateUserDto) {
    const { email } = createUserDto;

    const findUser = await this.userRepository.findByEmail(email);

    if (findUser) {
      throw new ConflictException(`Email already exists!`);
    }

    const user = await this.userRepository.create(createUserDto);

    return user;
  }

  async findAll() {
    return await this.userRepository.findAll();
  }

  async findOne(id: string) {
    const findUser = await this.userRepository.findOne(id);

    if (!findUser) {
      throw new NotFoundException(`User not found!`);
    }

    return await this.userRepository.findOne(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const findUser = await this.userRepository.findOne(id);
    if (!findUser) {
      throw new NotFoundException(`User not found!`);
    }
    return await this.userRepository.update(id, updateUserDto);
  }

  async remove(id: string) {
    const findUser = await this.userRepository.findOne(id);
    if (!findUser) {
      throw new NotFoundException(`User not found!`);
    }
    return await this.userRepository.delete(id);
  }
}
