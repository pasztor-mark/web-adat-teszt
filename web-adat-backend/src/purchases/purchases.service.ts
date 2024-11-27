import { Injectable } from '@nestjs/common';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PurchasesService {
  db: PrismaService;
  constructor(db: PrismaService) {
    this.db = db
  }
  async create(createPurchaseDto: CreatePurchaseDto) {
    await this.db.purchase.create({ data: createPurchaseDto });
    return "Vétel létrehozva";
  }

  async findAll() {
    return await this.db.purchase.findMany();
  }

  async findOne(id: number) {
    return await this.db.purchase.findUnique({ where: { id } });
  }

  async update(id: number, updatePurchaseDto: UpdatePurchaseDto) {
    await this.db.purchase.update({ where: { id }, data: updatePurchaseDto });
    return "Vétel frissítve";
  }

  async remove(id: number) {
    await this.db.purchase.delete({ where: { id } });
    return `#${id} vétel törölve`;
  }
}
