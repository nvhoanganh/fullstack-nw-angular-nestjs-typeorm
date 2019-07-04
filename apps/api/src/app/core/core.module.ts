import { Module } from '@nestjs/common';
import { CrudService } from './base.service';

@Module({
  imports: [],
  providers: [CrudService],
  controllers: []
})
export class CoreModule {}
