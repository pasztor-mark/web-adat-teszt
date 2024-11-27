import { Test, TestingModule } from '@nestjs/testing';
import { PerformancemetricsController } from './performancemetrics.controller';

describe('PerformancemetricsController', () => {
  let controller: PerformancemetricsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PerformancemetricsController],
    }).compile();

    controller = module.get<PerformancemetricsController>(PerformancemetricsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
