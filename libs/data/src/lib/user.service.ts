import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '@fullstack/domain';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly repo: Repository<User>
  ) {}

  findAll(): Promise<User[]> {
    return this.repo.find();
  }

  findOne(email: string): Promise<User> {
    return this.repo.findOne({ email: email });
  }

  save(user: User): Promise<User> {
    return this.repo.save(user);
  }
}
