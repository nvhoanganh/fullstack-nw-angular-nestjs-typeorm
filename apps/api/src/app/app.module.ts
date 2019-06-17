import { Module } from '@nestjs/common';

import { TicketsController } from './tickets.controller';
import { HealthCheckService } from './healthcheck.service';
import { TicketService } from './ticket.service';
import { HealthController } from './healthz.controller';

@Module({
  imports: [],
  controllers: [TicketsController, HealthController],
  providers: [HealthCheckService, TicketService],
})
export class AppModule {}
