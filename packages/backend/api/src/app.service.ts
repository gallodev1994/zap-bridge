import { Injectable } from '@nestjs/common';
import type { HealthResponse } from '@/shared/interface/HealthResponse';

@Injectable()
export class AppService {
  getHealth(): HealthResponse {
    return {
      "work": true
    };
  }
}
