import { PrismaService } from '../prisma.service';
import { PerformancemetricsMiddleware } from './performancemetrics.middleware';
import { PerformancemetricsService } from './performancemetrics.service';
describe('PerformancemetricsMiddleware', () => {
  it('Middleware definiálva', () => {
    expect(new PerformancemetricsMiddleware(new PerformancemetricsService(new PrismaService))).toBeDefined();
  });
});
