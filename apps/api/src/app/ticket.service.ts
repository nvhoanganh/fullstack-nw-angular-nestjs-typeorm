import { Injectable } from '@nestjs/common';
import { Ticket, TicketType } from '@fullstack/data';

@Injectable()
export class TicketService {
  getTickets(): Ticket[] {
    return [
      { id: 1, title: 'Fix my computer!', type: TicketType.Gold },
      { id: 2, title: 'Fix my desk', type: TicketType.Platnium }
    ];
  }
}
