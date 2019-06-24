import { Module } from '@nestjs/common';
import { HealthCheckService } from './healthcheck.service';
import { HealthCheckController } from './healthz.controller';

@Module({
  imports: [],
  providers: [HealthCheckService],
  controllers: [HealthCheckController]
})
export class HealthCheckModule {}
