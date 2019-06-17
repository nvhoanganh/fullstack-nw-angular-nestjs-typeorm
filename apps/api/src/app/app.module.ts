import { Module } from '@nestjs/common';

import { TicketsController } from './app.controller';
import { HealthCheckService } from './app.service';
import { TicketService } from './ticket.service';

@Module({
  imports: [],
  controllers: [TicketsController],
  providers: [HealthCheckService, TicketService],
})
export class AppModule {}
