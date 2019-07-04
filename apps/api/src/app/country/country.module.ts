import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountryService } from './country.service';
import { CountryController } from './country.controller';
import { Country } from '@fullstack/domain';

@Module({
  imports: [TypeOrmModule.forFeature([Country])],
  providers: [CountryService],
  controllers: [CountryController]
})
export class CountryModule {}
