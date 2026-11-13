import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import type { HealthResponse } from '@/shared/interface/HealthResponse';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('api')
  getHealth(): HealthResponse {
    return this.appService.getHealth();
  }
}
