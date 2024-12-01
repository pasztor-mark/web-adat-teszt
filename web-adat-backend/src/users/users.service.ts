import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma.service'

@Injectable()
export class UsersService {
  db: PrismaService;
  constructor(db: PrismaService) {
    this.db = db;
  }

  async create(createUserDto: CreateUserDto) {
    
    await this.db.user.create({ data: createUserDto });
    
    
    return 'Felhasználó létrehozva';
  }

  async findAll() {
    const users = await this.db.user.findMany();

    return users;
  }

  async findOne(id: number) {
    return await this.db.user.findUnique({ where: { id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.db.user.update({ where: { id }, data: updateUserDto });
    return 'Felhasználó frissítve';
  }

  async remove(id: number) {
    await this.db.user.delete({ where: { id } });
    return `#${id} felhasználó törölve`;
  }
}
