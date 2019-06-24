import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketService } from './ticket.service';
import { Ticket } from './ticket.entity';
import { TicketController } from './ticket.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Ticket])],
  providers: [TicketService],
  controllers: [TicketController]
})
export class TicketModule {}
