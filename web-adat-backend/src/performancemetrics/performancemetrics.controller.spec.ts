import { Test, TestingModule } from '@nestjs/testing';
import { PerformancemetricsController } from './performancemetrics.controller';
import { PrismaService } from '../prisma.service';
import { PerformancemetricsService } from './performancemetrics.service';

describe('PerformancemetricsController', () => {
  let controller: PerformancemetricsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PerformancemetricsController,],
      providers: [PerformancemetricsService, PrismaService],
    }).compile();

    controller = module.get<PerformancemetricsController>(PerformancemetricsController);
  });

  it('Kontroller definiálva', () => {
    expect(controller).toBeDefined();
  });
});
