import { Test, TestingModule } from '@nestjs/testing';
import { PurchasesController } from './purchases.controller';
import { PurchasesService } from './purchases.service';
import { PrismaService } from '../prisma.service';

describe('PurchasesController', () => {
  let controller: PurchasesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PurchasesController],
      providers: [PurchasesService, PrismaService],
    }).compile();

    controller = module.get<PurchasesController>(PurchasesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
