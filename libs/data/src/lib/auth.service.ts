import { JwtService } from '@nestjs/jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from '@fullstack/domain';
import { UserService } from './user.service';
import { JwtPayload } from './jwt-payload.interface';
import { LoginRequestDto } from './dto';

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
