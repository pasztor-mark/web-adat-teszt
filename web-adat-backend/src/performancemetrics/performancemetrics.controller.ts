import { Body, Controller, Get, Post } from '@nestjs/common';
import { PerformancemetricsService } from './performancemetrics.service';

@Controller('performancemetrics')
export class PerformancemetricsController {
  constructor(
    private readonly performancemetricsService: PerformancemetricsService,
  ) {}
  @Post('measure')
  async addMeasurement(
    @Body() data: { name: string; t0: number; t1: number; description: string },
  ) {
    return this.performancemetricsService.addMeasurement(
        data.name,
        data.t0,
        data.t1,
        data.description
    )
  }
  @Get('averages')
    async getGroupMeasurement() {
        return this.performancemetricsService.getGroupMeasurement()
    }
  @Get('average/:name')
  async getAverageMeasurement(name: string) {
    return this.performancemetricsService.getAverageMeasurement(name)
  }
}
