import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthCheckService {
  getData(): { status: string } {
    return ({ status: 'OK' });
  }
}
