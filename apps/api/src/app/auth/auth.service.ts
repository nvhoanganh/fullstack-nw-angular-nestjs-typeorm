import { JwtService } from '@nestjs/jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from '@fullstack/domain';
import { UserService } from '../user/user.service';
import { LoginRequestDto, JwtPayload } from '@fullstack/data';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService
  ) {}
  async signIn(login: LoginRequestDto): Promise<string> {
    const usr = await this.usersService.findOneByEmail(login.username);
    if (usr && usr.hashedPassword === login.password) {
      const user: JwtPayload = {
        email: usr.email,
        firstName: usr.firstName,
        lastName: usr.lastName,
        role: usr.userRole
      };
      return this.jwtService.sign(user);
    } else {
      throw new UnauthorizedException();
    }
  }

  async validateUser(payload: JwtPayload): Promise<User> {
    return await this.usersService.findOneByEmail(payload.email);
  }
}
