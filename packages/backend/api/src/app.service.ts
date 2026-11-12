import { Injectable } from '@nestjs/common';
import type { HealthResponse } from '@/shared/HealthResponse';

@Injectable()
export class AppService {
  getHealth(): HealthResponse {
    return {
      "work": true
    };
  }
}
