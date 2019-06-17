import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { HealthCheckService } from './app.service';
import { TicketService } from './ticket.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [HealthCheckService, TicketService],
})
export class AppModule {}
