import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const { email } = createUserDto;

    const findUser = await this.prisma.user.findUnique({ where: { email } });

    if (findUser) {
      throw new ConflictException(`User already exists!`);
    }

    const user = await this.prisma.user.create({ data: createUserDto });

    delete user.password;

    return user;
  }

  async findAll() {
    return await this.prisma.user.findMany({
      select: {
        password: false,
        id: true,
        name: true,
        email: true,
        orders: true,
      },
    });
  }

  async findOne(id: string) {
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
    return updateUser;
  }

  async remove(id: string) {
    const findUser = await this.prisma.user.findUnique({ where: { id } });
    if (!findUser) {
      throw new NotFoundException(`User not found!`);
    }
    await this.prisma.user.delete({ where: { id } });
    return;
  }
}
