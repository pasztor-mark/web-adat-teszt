import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { UsersController } from './users/users.controller';
import { VehiclesController } from './vehicles/vehicles.controller';
import { PerformancemetricsController } from './performancemetrics/performancemetrics.controller';
import { PrismaService } from './prisma.service';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';
import { VehiclesService } from './vehicles/vehicles.service';
import { PerformancemetricsService } from './performancemetrics/performancemetrics.service';


describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController, UsersController, VehiclesController, PerformancemetricsController],
      providers: [AppService, PrismaService, UsersService, VehiclesService, PerformancemetricsService]
    }).compile();

    appController = app.get<AppController>(AppController);
  });
  it('should be defined', () => {
    expect(appController).toBeDefined();
  });
  
});
