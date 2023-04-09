import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/database/prisma.service';
import { IUser } from '../../interface/interface';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const { email } = createUserDto;

    const findUser = await this.findByEmail(email);

    if (findUser) {
      throw new ConflictException(`User already exists!`);
    }

    const user = await this.prisma.user.create({ data: createUserDto });

    delete user.password;

    return await this.findOne(user.id);
  }

  async findAll(): Promise<any> {
    const listUser = await this.prisma.user.findMany({
      select: {
        password: false,
        id: true,
        name: true,
        email: true,
        orders: true,
      },
    });
    return listUser;
  }

  async findOne(id: string): Promise<any> {
    const findUser = await this.prisma.user.findUnique({
      where: { id },
      select: {
        password: false,
        id: true,
        name: true,
        email: true,
        orders: true,
      },
    });

    if (!findUser) {
      throw new NotFoundException(`User not found!`);
    }

    return findUser;
  }

  async findByEmail(email: string) {
    const findUser = await this.prisma.user.findUnique({ where: { email } });
    return findUser;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const findUser = await this.prisma.user.findUnique({ where: { id } });
    if (!findUser) {
      throw new NotFoundException(`User not found!`);
    }
    const updateUser = await this.prisma.user.update({
      where: { id },
      data: { ...updateUserDto },
    });
    delete updateUser.password;
    return await this.findOne(updateUser.id);
  }

  async remove(id: string): Promise<void> {
    const findUser = await this.prisma.user.findUnique({ where: { id } });
    if (!findUser) {
      throw new NotFoundException(`User not found!`);
    }
    await this.prisma.user.delete({ where: { id } });
    return;
  }
}
