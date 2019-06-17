import { Controller, Get } from '@nestjs/common';

import { HealthCheckService } from './app.service';
import { TicketService } from './ticket.service';

@Controller()
export class AppController {
  constructor(private readonly appService: HealthCheckService, private ticketSrv: TicketService) {}

  @Get('healthz')
  getData() {
    return this.appService.getData();
  }
  @Get('tickets')
  getTickets() {
    return this.ticketSrv.getTickets();
  }
}
