import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { UsersModule } from '../src/users/users.module';
import { VehiclesModule } from '../src/vehicles/vehicles.module';
import { PerformancemetricsModule } from '../src/performancemetrics/performancemetrics.module';
import { AppService } from '../src/app.service';
import { UsersService } from '../src/users/users.service';
import { VehiclesService } from 'src/vehicles/vehicles.service';
import { PerformancemetricsService } from '../src/performancemetrics/performancemetrics.service';
import { PrismaService } from '../src/prisma.service';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, UsersModule, VehiclesModule, PerformancemetricsModule],
      providers: [AppService, UsersService, VehiclesService, PerformancemetricsService, PrismaService],

    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
