import { Controller, Get, Body, Post } from '@nestjs/common';
import { HealthCheckService } from '../healthz/healthcheck.service';
import { CreateTicketDto, TicketDto } from '@fullstack/data';
import { ApiResponse } from '@nestjs/swagger';
import { TicketService } from './ticket.service';

@Controller('tickets')
export class TicketController {
  constructor(
    private ticketSrv: TicketService
  ) {}

  @ApiResponse({ status: 200, type: TicketDto, isArray: true })
  @Get()
  getAll() {
    return this.ticketSrv.findAll();
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
