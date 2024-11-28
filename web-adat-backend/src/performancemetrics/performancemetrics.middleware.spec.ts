import { PerformancemetricsMiddleware } from './performancemetrics.middleware';

describe('PerformancemetricsMiddleware', () => {
  it('should be defined', () => {
    expect(new PerformancemetricsMiddleware()).toBeDefined();
  });
});
