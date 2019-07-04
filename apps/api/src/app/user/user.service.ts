import {
  Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '@fullstack/domain';
import { CrudService } from '../core/base.service';

@Injectable()
export class UserService extends CrudService {
  constructor(
    @InjectRepository(User)
    repo: Repository<User>
  ) {
    super(repo);
  }

  async findOneByEmail(email: any): Promise<any> {
    return await this.ormRepo.findOne({ email: email });
  }
}
