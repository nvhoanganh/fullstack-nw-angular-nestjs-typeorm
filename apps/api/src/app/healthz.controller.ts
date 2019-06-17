import { Controller, Get } from '@nestjs/common';
import { HealthCheckService } from './healthcheck.service';
import { ApiResponse } from '@nestjs/swagger';
import { HealthCheckDto } from '@fullstack/data';

@Controller('healthz')
export class HealthController {
  constructor(private readonly appService: HealthCheckService) {}

  @Get()
  @ApiResponse({ status: 200, type: HealthCheckDto })
  get() {
    return this.appService.getData();
  }
}
