import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';

const passportModule = PassportModule.register({ defaultStrategy: 'jwt' });

@Module({
  imports: [
    UserModule,
    passportModule,
    JwtModule.register({
      secret: environment.jwtSecret,
      signOptions: {
        expiresIn: 3600
      }
    })
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthModule],
  controllers: [AuthController]
})
export class AuthModule {}
