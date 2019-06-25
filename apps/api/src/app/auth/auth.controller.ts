import { Controller, Get, Body, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { JwtTokenDto, LoginRequestDto, UserService } from '@fullstack/data';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private AuthSrv: AuthService) {}

  @ApiResponse({ status: 200, type: JwtTokenDto })
  @Post()
  async getAll(@Body() login: LoginRequestDto) {
    return this.AuthSrv.signIn(login);
  }
}
