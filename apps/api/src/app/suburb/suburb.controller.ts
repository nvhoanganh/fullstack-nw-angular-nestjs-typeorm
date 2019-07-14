import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { SuburbService } from './suburb.service';
import { Suburb } from '@fullstack/domain';
import { ApiResponse } from '@nestjs/swagger';
import { SuburbDto } from '@fullstack/data';

@Controller('suburbs')
export class SuburbController {
  constructor(private readonly photoService: SuburbService) {}

  @ApiResponse({ status: 200, type: SuburbDto, isArray: true })
  @Get()
  findAll(): Promise<SuburbDto[]> {
    return this.photoService.findAll();
  }

  @ApiResponse({ status: 200, type: SuburbDto })
  @Post()
  addSuburb(@Body() data: Suburb): Promise<SuburbDto> {
    return this.photoService.addOne(data);
  }

  @ApiResponse({ status: 200, type: SuburbDto, isArray: true })
  @Put(':id')
  updateSuburb(@Param('id') id: number, @Body() data: Suburb): Promise<SuburbDto> {
    return this.photoService.updateOne(id, data);
  }

  @Delete(':id')
  deleteSuburb(@Param('id') id: number) {
    return this.photoService.delete(id);
  }

  @ApiResponse({ status: 200, type: SuburbDto })
  @Get(':id')
  findOne(@Param('id') id: number): Promise<SuburbDto> {
    return this.photoService.findOne(id);
  }
}
