import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuburbService } from './suburb.service';
import { SuburbController } from './suburb.controller';
import { Suburb } from '@fullstack/domain';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forFeature([Suburb]),
    PassportModule.register({ defaultStrategy: 'jwt' })
  ],
  providers: [SuburbService],
  controllers: [SuburbController]
})
export class SuburbModule {}
