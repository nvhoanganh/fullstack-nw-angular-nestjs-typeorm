import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete
} from '@nestjs/common';
import { CountryService } from './country.service';
import { Country } from '@fullstack/domain';
import { ApiResponse } from '@nestjs/swagger';

@Controller('countries')
export class CountryController {
  constructor(private readonly photoService: CountryService) {}

  @ApiResponse({ status: 200, type: Country, isArray: true })
  @Get()
  findAll(): Promise<Country[]> {
    return this.photoService.findAll();
  }

  @ApiResponse({ status: 200, type: Country, isArray: true })
  @Post()
  addCountry(@Body() data: Country): Promise<Country> {
    return this.photoService.addOne(data);
  }

  @ApiResponse({ status: 200, type: Country, isArray: true })
  @Put(':id')
  updateCountry(
    @Param('id') id: number,
    @Body() data: Country
  ): Promise<Country> {
    return this.photoService.updateOne(id, data);
  }

  @Delete(':id')
  deleteCountry(@Param('id') id: number) {
    return this.photoService.delete(id);
  }
  @ApiResponse({ status: 200, type: Country, isArray: true })
  @Get(':id')
  findOne(@Param('id') id: number): Promise<Country> {
    return this.photoService.findOne(id);
  }
}
