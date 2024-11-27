import { Injectable } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class VehiclesService {
  db: PrismaService;
  constructor(db: PrismaService) {
    this.db = db
  }
  async create(createVehicleDto: CreateVehicleDto) {
    await this.db.vehicle.create({ data: createVehicleDto });
    return "Jármű létrehozva";
  }

  async findAll() {
    return await this.db.vehicle.findMany();
  }

  async findOne(id: number) {
    return await this.db.vehicle.findUnique({ where: { id } });
  }

  async update(id: number, updateVehicleDto: UpdateVehicleDto) {
    await this.db.vehicle.update({ where: { id }, data: updateVehicleDto });
    return "Jármű frissítve";
  }

  async remove(id: number) {
    await this.db.vehicle.delete({ where: { id } });
    return `#${id} jármű törölve`;
  }
}
