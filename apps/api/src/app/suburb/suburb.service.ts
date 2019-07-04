import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Suburb } from '@fullstack/domain';
import { CrudService } from '../core/base.service';

@Injectable()
export class SuburbService extends CrudService {
  constructor(
    @InjectRepository(Suburb)
    repo: Repository<Suburb>
  ) {
    super(repo);
  }
}
