import { Test, TestingModule } from '@nestjs/testing';
import { PurchasesService } from './purchases.service';
import { PrismaService } from '../prisma.service';
import { Purchase } from './entities/purchase.entity';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { Vehicle } from '../vehicles/entities/vehicle.entity';
import { VehiclesService } from '../vehicles/vehicles.service';
describe('PurchasesService', () => {
  let service: PurchasesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PurchasesService, PrismaService, UsersService, VehiclesService],
    }).compile();

    service = module.get<PurchasesService>(PurchasesService);
  });

  it('Szolgáltatás definiálva', () => {
    expect(service).toBeDefined();
  });
  describe('findAll', () => {
    it('Összes vétel lekérdezése', async () => {
      expect(await service.findAll()).not.toEqual([]);
    });
  });
  describe('findOne', () => {
    it('Egy vétel lekérdezése', async () => {
      expect(await service.findOne(1)).toBeInstanceOf(Object);
    });
  });
});
