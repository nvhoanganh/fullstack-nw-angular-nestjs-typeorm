import { Module } from '@nestjs/common';
import { CrudService } from './base.service';
import { ContextService } from './context.service';

const CORE_SVC = [CrudService, ContextService];

@Module({
  imports: [],
  providers: CORE_SVC,
  controllers: [],
  exports: CORE_SVC
})
export class CoreModule {}
