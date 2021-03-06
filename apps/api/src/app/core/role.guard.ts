import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { SetMetadata } from '@nestjs/common';
import { UserRole } from '@fullstack/domain';

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
    // console.log(`logged in user, required role is ${requireRole}`, user.userRole);
    const hasRole = () => requireRole.toString() === user.userRole.toString();
    return user && user.userRole && hasRole();
  }
}


export const Roles = (...roles: string[] | number[]) => SetMetadata('role', roles);
