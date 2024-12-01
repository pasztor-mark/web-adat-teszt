import { Test, TestingModule } from '@nestjs/testing';
import { VehiclesService } from './vehicles.service';
import { PrismaService } from '../prisma.service';


describe('VehiclesService', () => {
  let service: VehiclesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehiclesService, PrismaService],
    }).compile();

    service = module.get<VehiclesService>(VehiclesService);
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
