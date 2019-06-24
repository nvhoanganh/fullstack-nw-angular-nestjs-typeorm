import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum TicketType {
  Silver = 0,
  Gold = 1,
  Platnium = 2
}

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;
}
