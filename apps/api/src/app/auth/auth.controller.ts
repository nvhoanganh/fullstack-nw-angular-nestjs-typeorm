import { Controller, Body, Post, Get, UseGuards } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { JwtTokenDto, LoginRequestDto } from '@fullstack/data';
import { AuthService } from './auth.service';
import { User, UserRole } from '@fullstack/domain';
import { Roles, RolesGuard } from '../core/role.guard';
import { AuthGuard } from '@nestjs/passport';
import { ContextService } from '../core/context.service';

@Controller('auth')
export class AuthController {
  constructor(
    private AuthSrv: AuthService,
    private contextSvc: ContextService
  ) {}

  @ApiResponse({ status: 200, type: User, isArray: true })
  @Get('me')
  @UseGuards(AuthGuard())
  getLoginUser() {
    return this.contextSvc.getUserInfoFromJwtToken();
  }

  @ApiResponse({ status: 200, type: JwtTokenDto })
  @Post()
  async getAll(@Body() login: LoginRequestDto) {
    return this.AuthSrv.signIn(login);
  }
}
