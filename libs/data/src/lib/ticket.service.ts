import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ticket } from '@fullstack/domain';

@Injectable()
export class TicketService {
  constructor(
    @InjectRepository(Ticket)
    private readonly photoRepository: Repository<Ticket>
  ) {}

  findAll(): Promise<Ticket[]> {
    return this.photoRepository.find();
  }

  save(ticket: Ticket): Promise<Ticket> {
    return this.photoRepository.save(ticket);
  }
}
