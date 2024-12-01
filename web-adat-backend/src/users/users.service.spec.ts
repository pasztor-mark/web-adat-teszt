import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { PrismaService } from '../prisma.service';
import { User } from './entities/user.entity';





describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService, PrismaService],
    }).compile();

    service = module.get<UsersService>(UsersService);
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
})