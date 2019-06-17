import { Injectable } from '@nestjs/common';

export interface Ticket {
  id: number;
  title: string;
}

@Injectable()
export class TicketService {
  getTickets(): Ticket[] {
    return [
      { id: 1, title: 'Fix my computer!' },
      { id: 2, title: 'Fix my desk' }
    ];
  }
}
