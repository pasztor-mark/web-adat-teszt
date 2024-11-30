import { Module } from '@nestjs/common';
import { PerformancemetricsService } from './performancemetrics.service';
import { PerformancemetricsController } from './performancemetrics.controller';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [PerformancemetricsService, PrismaService],
  controllers: [PerformancemetricsController]
})
export class PerformancemetricsModule {}
