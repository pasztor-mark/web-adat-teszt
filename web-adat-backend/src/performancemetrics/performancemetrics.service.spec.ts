import { Test, TestingModule } from '@nestjs/testing';
import { PerformancemetricsService } from './performancemetrics.service';
import { PrismaService } from '../prisma.service';

describe('PerformancemetricsService', () => {
  let service: PerformancemetricsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PerformancemetricsService, PrismaService],
    }).compile();

    service = module.get<PerformancemetricsService>(PerformancemetricsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
