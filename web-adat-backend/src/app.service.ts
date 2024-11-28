import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  async getTableSizes() {
    const tableNames = await this.prisma.$queryRaw<
      { table_name: string }[]
    >`
      SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = 'private'
        AND table_type = 'BASE TABLE'
    `;

    return tableNames.map(table => table.table_name);
  }
}
