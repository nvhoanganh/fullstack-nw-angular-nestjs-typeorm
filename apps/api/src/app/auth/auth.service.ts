import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { JwtPayload, LoginRequestDto } from '@fullstack/data';
import { User } from '@fullstack/domain';
import { UserService } from '../user/user.service';

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
      return new Promise(resolve => resolve(null));
    }
  }

  async validateUser(payload: JwtPayload): Promise<User> {
    return await this.usersService.findOne(payload.email);
  }
}
