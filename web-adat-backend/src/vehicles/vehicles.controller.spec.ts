import { Test, TestingModule } from '@nestjs/testing';
import { VehiclesController } from './vehicles.controller';
import { VehiclesService } from './vehicles.service';
import { PrismaService } from '../prisma.service';

describe('VehiclesController', () => {
  let controller: VehiclesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VehiclesController],
      providers: [VehiclesService, PrismaService],
    }).compile();

    controller = module.get<VehiclesController>(VehiclesController);
  });

  it('Kontroller definiálva', () => {
    expect(controller).toBeDefined();
  });
});
