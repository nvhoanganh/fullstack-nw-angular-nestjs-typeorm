import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { SetMetadata } from '@nestjs/common';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requireRole = this.reflector.get<string>(
      'role',
      context.getHandler()
    );
    if (!requireRole) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const hasRole = () => requireRole.indexOf(user.role) >= 0;
    return user && user.roles && hasRole();
  }
}


export const Roles = (...roles: string[]) => SetMetadata('role', roles);
