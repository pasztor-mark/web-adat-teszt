import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { PurchasesModule } from './purchases/purchases.module';

@Module({
  imports: [UsersModule, VehiclesModule, PurchasesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
