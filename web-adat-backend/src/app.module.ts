import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { PurchasesModule } from './purchases/purchases.module';
import { PerformancemetricsModule } from './performancemetrics/performancemetrics.module';
import { PerformancemetricsMiddleware } from './performancemetrics/performancemetrics.middleware';
import { PerformancemetricsService } from './performancemetrics/performancemetrics.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [UsersModule, VehiclesModule, PurchasesModule, PerformancemetricsModule],
  controllers: [AppController],
  providers: [PrismaService, AppService, PerformancemetricsService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(PerformancemetricsMiddleware)
      .forRoutes('*');
  }
}
