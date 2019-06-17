import { Controller, Get, Body, Post } from '@nestjs/common';

import { HealthCheckService } from './healthcheck.service';
import { TicketService } from './ticket.service';
import { CreateTicketDto, TicketDto } from '@fullstack/data';
import { ApiResponse } from '@nestjs/swagger';

@Controller('tickets')
export class TicketsController {
  constructor(
    private readonly appService: HealthCheckService,
    private ticketSrv: TicketService
  ) {}

  @ApiResponse({ status: 200, type: TicketDto, isArray: true })
  @Get()
  getAll() {
    return this.ticketSrv.getTickets();
  }

  @Post()
  @ApiResponse({
    status: 201,
    type: CreateTicketDto,
    description: 'The record has been successfully created.'
  })
  post(@Body() ticketDto: CreateTicketDto) {
    return ticketDto;
  }
}
