import { Controller, Get, Body, Post, UseGuards } from '@nestjs/common';
import { UserDto } from '@fullstack/data';
import { ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private UserSrv: UserService) {}

  @ApiResponse({ status: 200, type: UserDto, isArray: true })
  @Get()
  @UseGuards(AuthGuard())
  getAll() {
    return this.UserSrv.findAll();
  }
}
