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

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
describe('findAll', () => {
  it('visszaadja az összes felhasználót', async () => {
    const usersService = new UsersService(new PrismaService());
    expect(await usersService.findAll()).toBeInstanceOf(Array<User>);
  });
})