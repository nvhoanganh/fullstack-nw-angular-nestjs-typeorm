import { Controller, Get, Body, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { JwtTokenDto, LoginRequestDto, UserService, AuthService } from '@fullstack/data';

@Controller('auth')
export class AuthController {
  constructor(private AuthSrv: AuthService) {}

  @ApiResponse({ status: 200, type: JwtTokenDto })
  @Post()
  async getAll(@Body() login: LoginRequestDto) {
    return this.AuthSrv.signIn(login);
  }
}
