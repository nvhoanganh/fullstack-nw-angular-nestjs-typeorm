import { Controller, Get, Body, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import {
  JwtTokenDto,
  LoginRequestDto,
} from '@fullstack/data';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';

@Controller('auth')
export class AuthController {
  constructor(
    private AuthSrv: AuthService,
    private readonly usersService: UserService
  ) {}

  @ApiResponse({ status: 200, type: JwtTokenDto })
  @Post()
  async getAll(@Body() login: LoginRequestDto) {
    return this.AuthSrv.signIn(login);
  }
}
