import { Injectable, NestMiddleware } from '@nestjs/common';
import { PerformancemetricsService } from './performancemetrics.service';

import { NextFunction, Request, Response } from 'express';

@Injectable()
export class PerformancemetricsMiddleware implements NestMiddleware {
  constructor(private readonly performancemetricsService: PerformancemetricsService) {}
  async use(req: Request, res: Response, next: NextFunction) {
    const start = performance.now();
    res.on('finish', async () => {
      const finish = performance.now();
      
      try {
        await this.performancemetricsService.addMeasurement(
          req.url,
          start,
          finish,
          `A ${req.url} URL végpont visszatérési ideje: ${finish - start} ms.`,
        )
      } catch (error) {
        console.error(error);
      }
    })
    next();
  }
}
