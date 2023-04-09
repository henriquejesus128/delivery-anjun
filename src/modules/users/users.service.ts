import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/database/prisma.service';
import { IFindByEmail, IUser } from '../../interface/interface';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<IUser> {
    const { email } = createUserDto;

    const findUser = await this.findByEmail(email);
    console.log(findUser);

    if (findUser) {
      throw new ConflictException(`User already exists!`);
    }

    const user = await this.prisma.user.create({
      data: createUserDto,
      include: { orders: true },
    });

    delete user.password;

    return user;
  }

  async findAll(): Promise<IUser[]> {
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

  async findOne(id: string): Promise<IUser> {
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

  async findByEmail(email: string): Promise<IFindByEmail> {
    const findUser = await this.prisma.user.findUnique({ where: { email } });
    return findUser;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<IUser> {
    const findUser = await this.prisma.user.findUnique({ where: { id } });
    if (!findUser) {
      throw new NotFoundException(`User not found!`);
    }
    const updateUser = await this.prisma.user.update({
      where: { id },
      data: { ...updateUserDto },
      include: { orders: true },
    });
    delete updateUser.password;
    return updateUser;
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
