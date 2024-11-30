import { Test, TestingModule } from '@nestjs/testing';
import { PerformancemetricsService } from './performancemetrics.service';
import { PrismaService } from '../prisma.service';

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
      const result = await service.addMeasurement('test', 0, 100, 'test');
      expect(result).toBeDefined();
    });
  })
});
