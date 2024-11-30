import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PerformancemetricsService {
  constructor(private readonly prisma: PrismaService) {}

  async addMeasurement(
    name: string,
    t0: number,
    t1: number,
    description: string,
  ) {
    const timeElapesd = t1 - t0;

    return this.prisma.performanceMetrics.create({
      data: {
        name,
        description,
        value: timeElapesd,
      },
    });
  }
  async getAverageMeasurement(name: string) {
    const metrics = await this.prisma.performanceMetrics.findMany({
      where: { name },
    });

    if (metrics.length === 0) {
      throw new Error('Nincs ilyen mérés');
    }
    const ossz = metrics.reduce((acc, curr) => acc + curr.value, 0);
    const atlag = ossz / metrics.length;

    return {
      name,
      atlag,
    };
  }


  async getGroupMeasurement() {
    const metrics = await this.prisma.performanceMetrics.groupBy({
      by: ['name'],
      _avg: {
        value: true,
      },
      _count: {
        value: true,
      },
    });
    return metrics.map((meres) => ({
      name: meres.name,
      atlag: meres._avg.value,
      count: meres._count.value,
    }));
  }
}
