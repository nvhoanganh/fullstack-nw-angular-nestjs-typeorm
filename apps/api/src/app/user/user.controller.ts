import { Controller, Get, Body, Post, UseGuards } from '@nestjs/common';
import { UserDto, UserService } from '@fullstack/data';
import { ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

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
