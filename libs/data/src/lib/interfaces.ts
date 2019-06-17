export enum TicketType {
  Silver = 'Silver',
  Gold = 'Gold',
  Platnium = 'Platnium'
}

export enum TicketType3 {
  Silver = 'Silver',
  Gold = 'Gold',
  Platnium = 'Platnium'
}

export interface Ticket {
  id?: number;
  title: string;
  type: TicketType;
}
export interface HealthCheck {
  status: string;
}
