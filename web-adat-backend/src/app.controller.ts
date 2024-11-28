import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("tableSizes")
  async getTableSizes() {
    const sizes = await this.appService.getTableSizes();
    return sizes
  }
}
