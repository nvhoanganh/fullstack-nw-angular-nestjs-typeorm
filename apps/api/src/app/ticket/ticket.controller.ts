import { Controller, Get, Body, Post } from '@nestjs/common';
import { CreateTicketDto, TicketDto, TicketService } from '@fullstack/data';
import { ApiResponse } from '@nestjs/swagger';

@Controller('tickets')
export class TicketController {
  constructor(private ticketSrv: TicketService) {}

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
  async post(@Body() ticketDto: CreateTicketDto) {
    return await this.ticketSrv.save({
      ...ticketDto,
      id: 0
    });
  }
}
