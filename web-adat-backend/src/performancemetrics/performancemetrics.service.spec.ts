import { Test, TestingModule } from '@nestjs/testing';
import { PerformancemetricsService } from './performancemetrics.service';
import { PrismaService } from '../prisma.service';
import { ADD_MEASUREMENT } from '../../test/test-data';

describe('PerformancemetricsService', () => {
  let service: PerformancemetricsService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PerformancemetricsService, PrismaService],
    }).compile();

    service = module.get<PerformancemetricsService>(PerformancemetricsService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('Szolgáltatás definiálva van', () => {
    expect(service).toBeDefined();
  });
  it('PrismaService definiálva van', () => {
    expect(prismaService).toBeDefined();
  });
  describe('addMeasurement', () => {
    it('Mérés hozzáadása', async () => {
      const result = await service.addMeasurement(
        ADD_MEASUREMENT.name,
        ADD_MEASUREMENT.t0,
        ADD_MEASUREMENT.t1,
        ADD_MEASUREMENT.description,
      );
      console.log(result);
      expect(result).toBe('SIKER');
    });
  });
  describe('getAverageMeasurement', () => {
    it('Mérés átlaga', async () => {
      const result = await service.getAverageMeasurement(
        '/performancemetrics/averages',
      );
      console.log(
        'GET requestek előtt érdemes seedelni az adatbázist, és a weboldalon is tesztelgetni.',
      );
      expect(result).toBeDefined();
    });
  });
  describe('getGroupMeasurement', () => {
    it('Mérés csoportosítása', async () => {
      const result = await service.getGroupMeasurement();
      console.log(
        'GET requestek előtt érdemes seedelni az adatbázist, és a weboldalon is tesztelgetni.',
      );
      expect(result).toBeDefined();
    });
  });
  describe('getAverageMeasurement', () => {
    it('Mérés csoportosítása', async () => {
      const result = await service.getAverageMeasurement(
        '/performancemetrics/averages',
      );
      console.log(
        'GET requestek előtt érdemes seedelni az adatbázist, és a weboldalon is tesztelgetni.',
      );
      expect(result).toBeDefined();
    });
  });
});
