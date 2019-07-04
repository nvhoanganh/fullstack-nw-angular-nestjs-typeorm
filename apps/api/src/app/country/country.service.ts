import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Country } from '@fullstack/domain';
import { CrudService } from '../core/base.service';

@Injectable()
export class CountryService extends CrudService {
  constructor(
    @InjectRepository(Country)
    repo: Repository<Country>
  ) {
    super(repo);
  }
}
