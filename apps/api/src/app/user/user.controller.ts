import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';
import { User } from '@fullstack/domain';

@Controller('users')
export class UserController {
  constructor(private UserSrv: UserService) {}

  @ApiResponse({ status: 200, type: User, isArray: true })
  @Get()
  @UseGuards(AuthGuard())
  getAll() {
    return this.UserSrv.findAll();
  }
}
