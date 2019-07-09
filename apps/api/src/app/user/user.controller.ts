import { Controller, Get, UseGuards, Body, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';
import { User, UserRole } from '@fullstack/domain';
import { Roles, RolesGuard } from '../core/role.guard';
import { AuthService } from '../auth/auth.service';

@Controller('users')
export class UserController {
  constructor(private UserSrv: UserService) {}

  @ApiResponse({ status: 200, type: User, isArray: true })
  @Get()
  @Roles(UserRole.Admin)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard())
  getAll() {
    return this.UserSrv.findAll();
  }

  @ApiResponse({ status: 200, type: User, isArray: true })
  @Post()
  @Roles(UserRole.Admin)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard())
  createNew(@Body() data: User) {
    return this.UserSrv.addOne(data);
  }

}
