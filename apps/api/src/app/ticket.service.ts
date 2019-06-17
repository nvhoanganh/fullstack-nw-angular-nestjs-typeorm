import { Injectable } from '@nestjs/common';
import { Ticket } from '@fullstack/data';

@Injectable()
export class TicketService {
  getTickets(): Ticket[] {
    return [
      { id: 1, title: 'Fix my computer!' },
      { id: 2, title: 'Fix my desk' }
    ];
  }
}
