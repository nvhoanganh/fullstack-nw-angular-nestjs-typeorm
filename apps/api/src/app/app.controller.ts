import { Controller, Get, Body, Post } from '@nestjs/common';

import { HealthCheckService } from './app.service';
import { TicketService } from './ticket.service';
import { Ticket, CreateTicketDto, TicketDto } from '@fullstack/data';
import { ApiResponse } from '@nestjs/swagger';

@Controller()
export class TicketsController {
  constructor(
    private readonly appService: HealthCheckService,
    private ticketSrv: TicketService
  ) {}

  @Get('healthz')
  getData() {
    return this.appService.getData();
  }
  @ApiResponse({ status: 200, type: TicketDto, isArray: true })
  @Get('tickets')
  getTickets() {
    return this.ticketSrv.getTickets();
  }

  @Post('tickets')
  @ApiResponse({
    status: 201,
    type: CreateTicketDto,
    description: 'The record has been successfully created.'
  })
  createTicket(@Body() ticketDto: CreateTicketDto) {
    return ticketDto;
  }
}
