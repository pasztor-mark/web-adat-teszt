import { Test, TestingModule } from '@nestjs/testing';
import { PurchasesService } from './purchases.service';
import { PrismaService } from '../prisma.service';
describe('PurchasesService', () => {
  let service: PurchasesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PurchasesService, PrismaService],
    }).compile();

    service = module.get<PurchasesService>(PurchasesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
