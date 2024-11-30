import { PrismaService } from '../prisma.service';
import { PerformancemetricsMiddleware } from './performancemetrics.middleware';
import { PerformancemetricsService } from './performancemetrics.service';
describe('PerformancemetricsMiddleware', () => {
  it('should be defined', () => {
    expect(new PerformancemetricsMiddleware(new PerformancemetricsService(new PrismaService))).toBeDefined();
  });
});
