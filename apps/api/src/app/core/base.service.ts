import { HttpException, HttpStatus } from '@nestjs/common';
import { BaseEntity } from '@fullstack/domain';

export class CrudService {
  constructor(public readonly ormRepo: any) {}

  async findAll(): Promise<any[]> {
    return await this.ormRepo.find();
  }

  async findOne(id: number): Promise<any> {
    const obj = await this.ormRepo.findOne(id);
    if (obj) {
      return obj;
    }
    throw new HttpException('NotFound', HttpStatus.NOT_FOUND);
  }

  async addOne(p: BaseEntity): Promise<any> {
    delete p.id;
    await this.ormRepo.save(p);
    return p;
  }

  async updateOne(idToUpdate: number, p: BaseEntity): Promise<any> {
    const obj = await this.ormRepo.findOne(idToUpdate);
    if (obj) {
      return await this.ormRepo.save( {
        ...obj,
        ...p,
        dateUpdated: new Date(),
      });
    } else {
      throw new HttpException('NotFound', HttpStatus.NOT_FOUND);
    }
  }

  async delete(id: number) {
    if (await this.findOne(id)) {
      return await this.ormRepo.delete(id);
    }
  }
}


