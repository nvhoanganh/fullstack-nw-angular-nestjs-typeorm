import { JwtService } from '@nestjs/jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtPayload, LoginRequestDto, UserService } from '@fullstack/data';
import { User } from '@fullstack/domain';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService
  ) {}
  async signIn(login: LoginRequestDto): Promise<string> {
    const usr = await this.usersService.findOne(login.username);
    if (usr && usr.hashedPassword === login.password) {
      const user: JwtPayload = {
        email: usr.email,
        firstName: usr.firstName,
        lastName: usr.lastName
      };
      return this.jwtService.sign(user);
    } else {
      throw new UnauthorizedException();
    }
  }

  async validateUser(payload: JwtPayload): Promise<User> {
    return await this.usersService.findOne(payload.email);
  }
}
